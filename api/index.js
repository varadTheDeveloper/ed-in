import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pkg from "pg";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

dotenv.config();

const app = express();
const port = 3000;

// ------------------- Middleware -------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (allow frontend at 5173)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ------------------- PostgreSQL -------------------
const { Pool } = pkg;
const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// ------------------- AWS S3 -------------------
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// ------------------- Routes -------------------

// 1️⃣ Insert paper metadata
app.post("/api/add-paper", async (req, res) => {
  const { scheme, branch, semester, subject, year, month, s3_key } = req.body;

  try {
    const query = `
      INSERT INTO papers (scheme, branch, semester, subject, year, month, s3_key)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [scheme, branch, semester, subject, year, month, s3_key];
    const result = await pool.query(query, values);

    res.json({ message: "Metadata inserted", paper: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Insert failed" });
  }
});

// 2️⃣ Fetch papers with optional filters
app.get("/api/papers", async (req, res) => {
  const { scheme, branch, semester, subject, year, month } = req.query;

  let query = "SELECT * FROM papers WHERE 1=1";
  const values = [];
  let idx = 1;

  if (scheme) {
    query += ` AND scheme=$${idx++}`;
    values.push(scheme);
  }
  if (branch) {
    query += ` AND branch=$${idx++}`;
    values.push(branch);
  }
  if (semester) {
    query += ` AND semester=$${idx++}`;
    values.push(semester);
  }
  if (subject) {
    query += ` AND subject=$${idx++}`;
    values.push(subject);
  }
  if (year) {
    query += ` AND year=$${idx++}`;
    values.push(year);
  }
  if (month) {
    query += ` AND month=$${idx++}`;
    values.push(month);
  }

  try {
    const result = await pool.query(query, values);

    const papersWithUrls = await Promise.all(
      result.rows.map(async (paper) => {
        const command = new GetObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: paper.s3_key,
        });
        const url = await getSignedUrl(s3, command, { expiresIn: 600 });
        return { ...paper, downloadUrl: url };
      })
    );

    res.json(papersWithUrls);
  } catch (err) {
    console.error("Error fetching papers:", err.message);
    res.status(500).json({ error: "Failed to fetch papers" });
  }
});

// 3️⃣ Simple login (for testing only)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1") {
    res.json({ success: true, message: "Login successful!" });
  } else {
    res.json({ success: false, message: "Invalid credentials!" });
  }
});

// ------------------- Start Server -------------------
app.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`);
});

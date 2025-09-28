import express from "express";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer"; 
import dotenv from "dotenv";
import fs from "fs";
const app = express()
const port = 3000
dotenv.config();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// Create an S3 client
const s3 = new S3Client({
  region: process.env.AWS_REGION,  // e.g., "ap-south-1"
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
async function uploadFile() {
  const fileContent = fs.readFileSync("hello.txt");

  const command = new PutObjectCommand({
    Bucket: "varad-raw-0001", // your bucket name
    Key: "hello.txt",         // the object key in bucket
    Body: fileContent,        // file content
  });

  const response = await s3.send(command);
  console.log("Upload response:", response);
}
uploadFile()
app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file;

  try {
    const command = new PutObjectCommand({
      Bucket: "varad-raw-0001",
      Key: file.originalname, // file name in bucket
      Body: fs.createReadStream(file.path),
    });

    await s3.send(command);
    res.json({ message: "File uploaded to S3 successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Download file from S3
app.get("/download/:filename", async (req, res) => {
  const filename = req.params.filename;

  try {
    const command = new GetObjectCommand({
      Bucket: "varad-raw-0001",
      Key: filename,
    });

    const data = await s3.send(command);
    data.Body.pipe(res); // stream file to client
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Download failed" });
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/uploads', (req, res) => {
  res.json({a:"ok"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

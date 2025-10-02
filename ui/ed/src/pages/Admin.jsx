import React, { useState } from "react";

const Admin = () => {
  const [formData, setFormData] = useState({
    scheme: "",
    branch: "",
    semester: "",
    subject: "",
    year: "",
    month: "",
    s3_key: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/add-paper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ Success: ${data.message}`);
        setFormData({
          scheme: "",
          branch: "",
          semester: "",
          subject: "",
          year: "",
          month: "",
          s3_key: "",
        });
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Failed to connect to server");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <h2>📄 Admin Panel - Add Paper</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="scheme"
          value={formData.scheme}
          onChange={handleChange}
          placeholder="Scheme"
          required
        />
        <input
          type="text"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          placeholder="Branch"
          required
        />
        <input
          type="text"
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          placeholder="Semester"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
        <input
          type="text"
          name="month"
          value={formData.month}
          onChange={handleChange}
          placeholder="Month"
          required
        />
        <input
          type="text"
          name="s3_key"
          value={formData.s3_key}
          onChange={handleChange}
          placeholder="S3 Key (e.g., papers/2023/may/cse-ds.pdf)"
          required
        />

        <button type="submit">Add Paper</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Admin;

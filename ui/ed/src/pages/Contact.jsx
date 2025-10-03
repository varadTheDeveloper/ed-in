// src/pages/Contact.jsx
import React, { useState } from "react";
import "./Contact.css"
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    // Here you can also send data to backend via fetch/axios
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h1>
      
      <p style={{ textAlign: "center" }}>
        Have questions or feedback? Fill out the form below and we will get back to you!
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input className="i"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <input
        className="i"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <textarea className="i"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <button type="submit" style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>
          Send Message
        </button>
      </form>

      <p style={{ marginTop: "30px", textAlign: "center" }}>
        Or email us directly at: <a href="mailto:bmr74242@gmail.com">bmr74242@gmail.com</a>
      </p>
    </div>
  );
}

export default Contact;

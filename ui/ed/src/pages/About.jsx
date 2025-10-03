// src/pages/About.jsx
import React from "react";
import  "./About.css"
function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }} className="a">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>About This App</h1>

      <p className="p1">
        Welcome to the MSBTE PYQ Portal! This application is designed to help students easily access 
        previous year question papers (PYQs) for all branches and semesters under MSBTE University.
      </p>

      <h2 style={{ marginTop: "30px" }}>Our Mission</h2>
      <p>
        Our mission is to provide students with a simple, fast, and organized platform to download and 
        study past exam papers, helping them prepare better for their exams.
      </p>

      <h2 style={{ marginTop: "30px" }}>Features</h2>
      <ul>
        <li>Access PYQs by subject and semester.</li>
        <li>Download PDF files directly from the app.</li>
        <li>Easy navigation with a clean, student-friendly interface.</li>
      </ul>

      <h2 style={{ marginTop: "30px" }}>Contact</h2>
      <p>
        For suggestions or feedback, you can reach out to us at: 
        <a href="mailto:bmr74242@gmail.com">bmr74242@gmail.com</a>
      </p>
    </div>
  );
}

export default About;

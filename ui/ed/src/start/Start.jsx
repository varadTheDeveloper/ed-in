import { useState } from "react";
import "./Start.css";
import { useNavigate } from "react-router-dom";
function Start() {
  const [semester, setSemester] = useState(""); // initial empty value
  const [branch, setBranch] = useState("");
  const [scheme, setScheme] = useState("");
   const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/api/get-papers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scheme, branch, semester }),
    });

    const result = await response.json();
    console.log(result);
      navigate("/downloads", {
        state: { branch, semester, scheme },
      });
  } catch (error) {
    alert("Try again");
  }
};

    

  const handleReset = () => {
    setBranch("");
    setSemester("");
    setScheme("");
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div className="a3">
        <select
          id="se"
          value={scheme}
          onChange={(e) => setScheme(e.target.value)}
          required
        >
          <option value="">Select Scheme </option>
          <option value="K ( Regular Diploma )">K ( Regular Diploma )</option>
        </select>
      </div>
      <div className="a2">
        <select
          id="courses"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
        >
          <option value="">Select Branch</option>
          <option value="Computer Engineering">Computer Engineering</option>
          <option value="Electronics and Telecommunication">
            Electronics and Telecommunication
          </option>
          <option value="Electronics Engineering">
            Electronics Engineering
          </option>
          <option value="Mechatronics Engineering">
            Mechatronics Engineering
          </option>
          <option value="Instrumentation Engineering">
            Instrumentation Engineering
          </option>
          <option value="Information Technology">Information Technology</option>
          <option value="Production Engineering">Production Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Chemical Engineering">Chemical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Automobile Engineering">Automobile Engineering</option>
          <option value="Biotechnology Engineering">
            Biotechnology Engineering
          </option>
          <option value="Biomedical Engineering">Biomedical Engineering</option>
          <option value="First Year Engineering">First Year Engineering</option>
          <option value="Computer Engineering AIDS">
            Computer Engineering AIDS
          </option>
          <option value="Electronics and Computer Science">
            Electronics and Computer Science
          </option>
          <option value="Civil & Infrastructure Engineering">
            Civil & Infrastructure Engineering
          </option>
        </select>
      </div>

      <div className="a1">
        <select
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          required
        >
          <option value="">Select Semester</option>
          <option value="3">Semester 3</option>
          <option value="4">Semester 4</option>
          <option value="5">Semester 5</option>
          <option value="6">Semester 6</option>
        </select>
      </div>

      <div className="buttons" disabled={!branch || !semester}>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}

export default Start;

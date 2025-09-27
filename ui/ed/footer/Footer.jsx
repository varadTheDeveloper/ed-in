import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>
          © {new Date().getFullYear()} University Exam Portal. Find previous
          year question papers for all engineering branches and semesters.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Quick Links</h4>
          <nav>
          <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link> 
         <Link to="/terms"> Terms</Link>
           <Link to="/policy">Privacy Policy</Link>
          
          </nav>
        </div>

        <div>
          <h4>Branches</h4>
          <a href="#">Computer Engineering</a>
          <a href="#">Mechanical Engineering</a>
          <a href="#">Civil Engineering</a>
          <a href="#">Electrical Engineering</a>
        </div>

        <div>
          <h4>Semesters</h4>
          <a href="#">Semester 3</a>
          <a href="#">Semester 4</a>
          <a href="#">Semester 5</a>
          <a href="#">Semester 6</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made with ❤️ for Students</p>
      </div>
    </footer>
  );
}

export default Footer;

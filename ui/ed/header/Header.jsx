
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../src/assets/logo.png"

function Header() {
  return (
    <header className="header">
      {/* Top section with logo and app name */}
      <div className="header-top">
        <img src={logo} alt="Logo" className="logo" />
        
        <h1 className="portal-name">msbtepapers.in</h1>
       
      </div>

      {/* Navigation links */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/subjects">Subjects</Link> */}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Bottom section with page title */}
      <div className="header-bottom">
        <h2 className="page-title">Previous Year Question Papers</h2>
      </div>
    </header>
  );
}

export default Header;
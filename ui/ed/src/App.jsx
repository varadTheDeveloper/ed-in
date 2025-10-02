import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Start from "./start/start";
import Download from "./pages/download";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
function App() {
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloads" element={<Download />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        {/*
      
            <Route path="/download" element={ <Download/>} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}

        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <Admin setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;

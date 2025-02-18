import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import '../assets/styles/navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">John Mark</Link> {/* Fix: Use Link */}
        
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#projects">Projects</a></li> {/* Keep as <a> for sections */}
          <li><a href="#contact">Contact</a></li> 
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
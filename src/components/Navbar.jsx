import { useState } from "react";
import  { Link }   from "react-router-dom"
import "./Navbar.css";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">

      <h1 className="logo">AshRise Automotives</h1>

      {/* HAMBURGER ICON */}
      <div className={`hamburger ${open ? "active" : ""}`}
           onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/services">Services</Link></li>
<li><Link to="/collections">Collections</Link></li>
<li><Link to="/contact">Contact</Link></li>
{/* <li><Link to="/drag">Drag Feature</Link></li> */}

      </ul>

    </div>
  );
}

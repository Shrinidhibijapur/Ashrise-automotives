import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">

      <h1 className="logo">AshRise Automotives</h1>

      {/* HAMBURGER ICON */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/about">About</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/services">Services</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/collections">Collections</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/contact">Contact</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/cart">Cart</Link></li>
      </ul>

    </div>
  );
}

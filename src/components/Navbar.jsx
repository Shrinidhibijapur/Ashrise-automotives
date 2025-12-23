import { useState } from "react";
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
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/collections">Collections</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

    </div>
  );
}

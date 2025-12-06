import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#111", color: "white" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link style={{ color: "white" }} to="/">Home</Link></li>
        <li><Link style={{ color: "white" }} to="/about">About</Link></li>
        <li><Link style={{ color: "white" }} to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

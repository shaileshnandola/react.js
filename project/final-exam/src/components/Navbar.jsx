import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <Link className="navbar-brand fw-bold" to="/">Product Manager</Link>
    <div className="ms-auto">
      <Link to="/add" className="btn btn-warning">+ Add Product</Link>
    </div>
  </nav>
);

export default Navbar;

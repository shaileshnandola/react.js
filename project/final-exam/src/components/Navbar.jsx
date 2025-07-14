import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('loggedInUser');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">Product Manager</Link>
      <div className="ms-auto d-flex gap-2">
        {isLoggedIn ? (
          <>
            <Link to="/add" className="btn btn-warning">+ Add Product</Link>
            <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">Login</Link>
            <Link to="/register" className="btn btn-outline-light">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

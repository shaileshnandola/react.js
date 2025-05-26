import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header-container">
          <div className="header-logo">
            <img src="https://img.icons8.com/emoji/48/carrot-emoji.png" alt="logo" />
            <h4>Carrot</h4>
          </div>
          <div className="input-group search-bar-group">
            <input type="text" className="form-control" placeholder="Search For items..." />
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              All Categories
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Fruits</a></li>
              <li><a className="dropdown-item" href="#">Vegetables</a></li>
              <li><a className="dropdown-item" href="#">Dairy</a></li>
            </ul>
            <button className="btn btn-success" type="submit">
              <i className="fa fa-search" />
            </button>
          </div>
          <div className="header-right-section">
            <div><i className="fa-solid fa-user"></i> Account</div>
            <div><i className="fa fa-heart" /> Wishlist</div>
            <div><i className="fa-solid fa-cart-shopping"></i> Cart</div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-light border-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <i className="fa fa-bars" />
          </button>

          <div className="phone-number-mobile">
            <i className="fa-solid fa-phone"></i>
            <span>+123 (456) (7890)</span>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto gap-lg-4 gap-2 mt-3 mt-lg-0">
              <li className="nav-item"><a className="nav-link fw-bold" href="#">Home</a></li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown">Categories</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Shop Left sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Shop Right sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Full Width</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown">Product</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Product Left sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Product Right sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Product Full Width</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">About Us</a></li>
                  <li><a className="dropdown-item" href="#">Contact Us</a></li>
                  <li><a className="dropdown-item" href="#">Car</a></li>
                  <li><a className="dropdown-item" href="#">Checkout</a></li>
                  <li><a className="dropdown-item" href="#">Track Order</a></li>
                  <li><a className="dropdown-item" href="#">Wishlist</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown">Blog</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Full Width</a></li>
                  <li><a className="dropdown-item" href="#">Detail Left Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Detail Right Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Detail Full Width</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown">Element</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Product</a></li>
                  <li><a className="dropdown-item" href="#">Typography</a></li>
                  <li><a className="dropdown-item" href="#">Button</a></li>
                </ul>
              </li>
            </ul>

            <div className="phone-number ms-auto">
              <i className="fa-solid fa-phone"></i>
              <span>+123 (456) (7890)</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

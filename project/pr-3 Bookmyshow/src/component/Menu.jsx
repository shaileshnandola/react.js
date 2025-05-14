import React from 'react';

const Menu = ({ navigation }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navigation.categories.map((category, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href="#">{category}</a>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {navigation.links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

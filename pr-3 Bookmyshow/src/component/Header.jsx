import React, { useState } from 'react';

const Header = ({ head }) => {
    const [selectedLocation, setSelectedLocation] = useState(head[0]?.location || "Select Location");

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <div className="container">

                <div className="d-flex align-items-center">
                    {head.map((item, index) => (
                        <a className="navbar-brand" href="#" key={`logo-${index}`}>
                            <img
                                src={item.image}
                                alt={`Logo ${index}`}
                                style={{ width: 150 }}
                            />
                        </a>
                    ))}

                    <form className="d-flex ms-3">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                            aria-label="Search"
                        />
                    </form>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-3">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="locationDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {selectedLocation}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="locationDropdown">
                                {["Ahmedabad", "Mumbai", "Delhi"].map((city) => (
                                    <li key={city}>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={() => handleLocationChange(city)}
                                        >
                                            {city}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>

                    {head.map((item, index) => (
                        <div className="d-flex align-items-center" key={`buttons-${index}`}>
                            <button className="btn btn-danger">
                                {item.signin || "Sign In"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header;

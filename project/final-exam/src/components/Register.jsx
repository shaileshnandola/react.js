import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const single = users.some(u => u.email === user.email);
        if (single) return alert('User already exists');

        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registered successfully!');
        navigate('/login');
    };

    return (
        <div className="container mt-5">
            <div className="register-container">
                <h3>Register</h3>
                <form onSubmit={handleRegister}>
                    <input type="email" name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" className="form-control mb-3" placeholder="Password" onChange={handleChange} required />
                    <button className="btn btn-success">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;

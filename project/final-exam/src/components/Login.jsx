import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const [login, setLogin] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin(prev => ({ ...prev, [name]: value }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const isUser = users.find(user => user.email === login.email && user.password === login.password);

        if (isUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(login));
            navigate('/');
        } else {
            alert('Invalid useremail and password');
        }
    };

    return (
        <div className="container mt-5">
            <div className="login-container">
                <h3>Login</h3>
                <form onSubmit={handleLogin}>
                    <input type="email" name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" className="form-control mb-3" placeholder="Password" onChange={handleChange} required />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

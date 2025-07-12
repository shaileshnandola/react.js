import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN_USER } from './redux/action/Authaction';

const Login = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LOGIN_USER(login));
    setLogin({ email: '', password: '' });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="col-md-5">
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <h3 className="text-center mb-4">User Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control rounded-pill px-3"
                placeholder="Enter your email"
                value={login.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control rounded-pill px-3"
                placeholder="Enter your password"
                value={login.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100 rounded-pill">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

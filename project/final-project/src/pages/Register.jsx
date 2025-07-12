import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { REGISTER_USER } from './redux/action/Authaction';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [forminput, setForminput] = useState({
        name: '',
        email: '',
        password: ''
    });

    const changeinput = (e) => {
        const { name, value } = e.target;
        setForminput({
            ...forminput,
            [name]: value
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(REGISTER_USER(forminput))
        navigate("/")
        
    };

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-4 text-center">Register User</h2>
                    <form onSubmit={handlesubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={forminput.name}
                                onChange={changeinput}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                value={forminput.email}
                                onChange={changeinput}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={forminput.password}
                                onChange={changeinput}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

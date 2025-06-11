import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Adduser } from '../../redux/action/crudaction';

const Add = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [forminput, setFormInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...forminput,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            ...forminput,
            userid: Math.floor(Math.random() * 1000000)
        };

        dispatch(Adduser(obj));
        setFormInput({ name: "", email: "", password: "" });
        navigate('/view');
    };

    return (
        <div align="center">
            <h1>Add User</h1>
            <Link to="/view">View Users</Link>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={forminput.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input
                                    type="text"
                                    name="email"
                                    value={forminput.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>
                                <input
                                    type="text"
                                    name="password"
                                    value={forminput.password}
                                    onChange={handleChange}
                                    placeholder="Enter Your Password"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Add;

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Add.css';

const Add = () => {
    const navigate = useNavigate();

    const [forminput, setFormInput] = useState({
        name: "",
        courses: [],
        year: '',
        status: false,
    });

    const [alluser, setAllUser] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'courses' && type === 'checkbox') {
            setFormInput(prev => {
                if (checked) {
                    return {
                        ...prev,
                        courses: [...prev.courses, value]
                    };
                } else {
                    return {
                        ...prev,
                        courses: prev.courses.filter(course => course !== value)
                    };
                }
            });
        } else if (type === 'checkbox' && name === 'status') {
            setFormInput(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormInput(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: Math.floor(Math.random() * 10000),
            ...forminput
        };
        const updatedUsers = [...alluser, newUser];
        setAllUser(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        navigate('/');
    };

    return (
        <div className="add-container">
            <h2> Student Add Records</h2>
            <Link to="/" className="back-link">← Back to View</Link>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Student Name</label>
                    <input
                        type="text"
                        name="name"
                        value={forminput.name}
                        onChange={handleChange}
                        placeholder="Enter student name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Courses</label>
                    <div className="checkbox-group">
                        {["HTML", "CSS", "C"].map(course => (
                            <label key={course}>
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value={course}
                                    checked={forminput.courses.includes(course)}
                                    onChange={handleChange}
                                />
                                {course}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>Year</label>
                    <input
                        type="number"
                        name="year"
                        value={forminput.year}
                        onChange={handleChange}
                        placeholder="Enter year"
                        required
                    />
                </div>

                <div className="form-group status-check">
                    <label>Status</label>
                    <input
                        type="checkbox"
                        name="status"
                        checked={forminput.status}
                        onChange={handleChange}
                    />
                    <span>{forminput.status ? 'Active' : 'Inactive'}</span>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Add;

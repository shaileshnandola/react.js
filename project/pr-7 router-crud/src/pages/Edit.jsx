import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Edit.css';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [alluser, setAllUser] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

    const [forminput, setFormInput] = useState({
        name: "",
        courses: [],
        year: '',
        status: false,
    });

    useEffect(() => {
        const userToEdit = alluser.find(u => u.id === parseInt(id));
        if (userToEdit) {
            setFormInput({
                name: userToEdit.name,
                courses: userToEdit.courses || [],
                year: userToEdit.year,
                status: userToEdit.status,
            });
        }
    }, [id, alluser]);

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
        const updated = alluser.map(user => {
            if (user.id === parseInt(id)) {
                return {
                    ...user,
                    ...forminput
                };
            }
            return user;
        });

        setAllUser(updated);
        localStorage.setItem('users', JSON.stringify(updated));
        navigate('/');
    };

    return (
        <div className="edit-container">
            <h2>Edit Student</h2>
            <Link to="/" className="back-link">← Back to View</Link>
            <form className="edit-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Student Name</label>
                    <input
                        type="text"
                        name="name"
                        value={forminput.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Courses</label>
                    <div className="course-options">
                        {["HTML", "CSS", "C"].map(course => (
                            <label key={course}>
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value={course}
                                    checked={forminput.courses.includes(course)}
                                    onChange={handleChange}
                                /> {course}
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

                <div className="form-group status-toggle">
                    <label>Status</label>
                    <input
                        type="checkbox"
                        name="status"
                        checked={forminput.status}
                        onChange={handleChange}
                    />
                    <span>{forminput.status ? 'Active' : 'Inactive'}</span>
                </div>

                <button type="submit" className="submit-btn">Update</button>
            </form>
        </div>
    );
};

export default Edit;

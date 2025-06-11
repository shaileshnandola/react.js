import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Edit.css';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [alluser, setAllUser] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

    const [forminput, setFormInput] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        courses: [],
    });

    useEffect(() => {
        const userToEdit = alluser.find(u => u.id === parseInt(id));
        if (userToEdit) {
            setFormInput({
                name: userToEdit.name || "",
                email: userToEdit.email || "",
                password: userToEdit.password || "",
                gender: userToEdit.gender || "",
                city: userToEdit.city || "",
                courses: userToEdit.courses || [],
            });
        }
    }, [id, alluser]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'courses' && type === 'checkbox') {
            setFormInput(prev => ({
                ...prev,
                courses: checked
                    ? [...prev.courses, value]
                    : prev.courses.filter(course => course !== value)
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

        const updated = alluser.map(user =>
            user.id === parseInt(id) ? { ...user, ...forminput } : user
        );

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
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={forminput.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={forminput.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="text"
                        name="password"
                        value={forminput.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        {["Male", "Female",].map(g => (
                            <label key={g}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value={g}
                                    checked={forminput.gender === g}
                                    onChange={handleChange}
                                />
                                {g}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>City</label>
                    <select
                        name="city"
                        value={forminput.city}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Select City --</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Courses</label>
                    <div className="checkbox-group">
                        {["HTML", "CSS", "C", "React"].map(course => (
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

                <button type="submit" className="submit-btn">Update</button>
            </form>
        </div>
    );
};

export default Edit;

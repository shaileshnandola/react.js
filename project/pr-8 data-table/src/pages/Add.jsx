import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Add.css';

const Add = () => {
    const navigate = useNavigate();

    const [forminput, setFormInput] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        courses: [],
    });

    const [alluser, setAllUser] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

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
        const newUser = {
            id: Math.floor(Math.random() * 1000000),
            ...forminput
        };
        const updatedUsers = [...alluser, newUser];
        setAllUser(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        navigate('/');
    };

    return (
        <div className="add-container">
            <h2>Student Add Records</h2>
            <Link to="/" className="back-link">← Back to View</Link>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={forminput.name} onChange={handleChange} placeholder="Enter name" required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" value={forminput.email} onChange={handleChange} placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name="password" value={forminput.password} onChange={handleChange} placeholder="Enter password" required />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        {["Male", "Female",].map(gender => (
                            <label key={gender}>
                                <input type="radio" name="gender" value={gender} checked={forminput.gender === gender} onChange={handleChange} />
                                {gender}
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
                                <input type="checkbox" name="courses" value={course} checked={forminput.courses.includes(course)} onChange={handleChange} />
                                {course}
                            </label>
                        ))}
                    </div>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Add;

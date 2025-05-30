import React, { useState } from 'react';
import './Student.css';

const Form = () => {
    const [editid, setEditId] = useState(null);

    const [alluser, setAllUser] = useState(() => {
        return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
    });

    const [forminput, setFormInput] = useState({
        name: "",
        courses: [],
        year: '',
        status: false,
    });

    const changeinput = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox" && name === "courses") {
            if (checked) {
                setFormInput(forminput => ({
                    ...forminput,
                    courses: [...forminput.courses, value]
                }));
            } else {
                setFormInput(forminput => ({
                    ...forminput,
                    courses: forminput.courses.filter(course => course !== value)
                }));
            }
        } else if (type === "checkbox" && name === "status") {
            setFormInput(forminput => ({
                ...forminput,
                status: checked
            }));
        } else {
            setFormInput(forminput => ({
                ...forminput,
                [name]: value
            }));
        }
    };

    const edituser = (id) => {
        const selected = alluser.find(user => user.userid === id);
        setFormInput({ ...selected });
        setEditId(id);
    };

    const handlesubmit = (e) => {
        e.preventDefault();

        if (editid !== null) {
            const updatedUsers = alluser.map(user =>
                user.userid === editid
                    ? { ...user, ...forminput }
                    : user
            );
            setAllUser(updatedUsers);
            localStorage.setItem('user', JSON.stringify(updatedUsers));
        } else {
            const newUser = {
                userid: Math.floor(Math.random() * 100000),
                ...forminput
            };
            const up = [...alluser, newUser];
            setAllUser(up);
            localStorage.setItem('user', JSON.stringify(up));
        }

        setFormInput({
            name: "",
            courses: [],
            year: '',
            status: false,
        });
        setEditId(null);
    };

    const deletrecord = (id) => {
        const filtered = alluser.filter(user => user.userid !== id);
        setAllUser(filtered);
        localStorage.setItem('user', JSON.stringify(filtered));
    };

    return (
        <div className="form-container">
            <h1 style={{textAlign:'center', padding:'20px,0,20px,0'}}>Student Enrollent Track </h1>
            <div className="row-container">
                <div className="column left">
                    <h2>Student Enrollment</h2>
                    <form onSubmit={handlesubmit} className="styled-form">
                        <table className="form-table">
                            <tbody>
                                <tr>
                                    <td>Student Name:</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            value={forminput.name}
                                            onChange={changeinput}
                                            placeholder="Enter name"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Courses:</td>
                                    <td className="checkbox-group">

                                        <input
                                            type="checkbox"
                                            name="courses"
                                            value="HTML"
                                            checked={forminput.courses.includes("HTML")}
                                            onChange={changeinput}
                                        />
                                        HTML

                                        <input
                                            type="checkbox"
                                            name="courses"
                                            value="CSS"
                                            checked={forminput.courses.includes("CSS")}
                                            onChange={changeinput}
                                        />
                                        CSS

                                        <input
                                            type="checkbox"
                                            name="courses"
                                            value="C"
                                            checked={forminput.courses.includes("C")}
                                            onChange={changeinput}
                                        />
                                        C

                                    </td>
                                </tr>
                                <tr>
                                    <td>Year:</td>
                                    <td>
                                        <input
                                            type="number"
                                            name="year"
                                            value={forminput.year}
                                            onChange={changeinput}
                                            placeholder="Enter year"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Status (Active?):</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="status"
                                            checked={forminput.status}
                                            onChange={changeinput}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} align="center">
                                        <input
                                            type="submit"
                                            value={editid !== null ? "Update" : "Submit"}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

                <div className="column right">
                    <h2>View Records</h2>
                    <table className="records-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Student Name</th>
                                <th>Courses</th>
                                <th>Year</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alluser.length > 0 ? (
                                alluser.map((val, index) => (
                                    <tr key={index}>
                                        <td>{val.userid}</td>
                                        <td>{val.name}</td>
                                        <td>{val.courses.join(", ")}</td>
                                        <td>{val.year}</td>
                                        <td>{val.status ? "Active" : "Inactive"}</td>
                                        <td>
                                            <button onClick={() => edituser(val.userid)}>Edit</button>
                                            <button onClick={() => deletrecord(val.userid)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No records found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Form;

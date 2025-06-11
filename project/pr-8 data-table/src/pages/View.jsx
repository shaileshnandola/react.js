import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './View.css';

const View = () => {
    const [sort, setSort] = useState({ name: true });

    const [searchfield, setSearchField] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        courses: ""
    });

    const [alluser, setAllUser] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('users')) || [];
        setAllUser(data);
        setFilteredUsers(data);
    }, []);

    useEffect(() => {
        let fdata = [...alluser];

        if (searchfield.name) {
            fdata = fdata.filter(item =>
                item.name.toLowerCase().includes(searchfield.name.toLowerCase())
            );
        }

        if (searchfield.email) {
            fdata = fdata.filter(item =>
                item.email.toLowerCase().includes(searchfield.email.toLowerCase())
            );
        }

        if (searchfield.gender) {
            fdata = fdata.filter(item =>
                item.gender.toLowerCase().includes(searchfield.gender.toLowerCase())
            );
        }

        if (searchfield.city) {
            fdata = fdata.filter(item =>
                item.city.toLowerCase().includes(searchfield.city.toLowerCase())
            );
        }

        if (searchfield.courses) {
            fdata = fdata.filter(item =>
                item.courses.join(' ').toLowerCase().includes(searchfield.courses.toLowerCase())
            );
        }

        setFilteredUsers(fdata);
    }, [searchfield, alluser]);

    const handlename = () => {
        const sorted = [...filteredUsers].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return sort.name
                ? nameA.localeCompare(nameB)
                : nameB.localeCompare(nameA);
        });
        setSort({ name: !sort.name });
        setFilteredUsers(sorted);
    };

    const deleteuser = (id) => {
        const updated = alluser.filter(user => user.id !== id);
        setAllUser(updated);
        localStorage.setItem('users', JSON.stringify(updated));
        setFilteredUsers(updated);
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const searchinput = (e) => {
        const { name, value } = e.target;
        setSearchField(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="view-container">
            <h2>Student View Records</h2>
            <Link to="/add" className="add-link">+ Add Student</Link>

            <div className="search-bar">
                <input type="text" name="name" placeholder="Search Name" onChange={searchinput} />
                <input type="text" name="email" placeholder="Search Email" onChange={searchinput} />
                <input type="text" name="gender" placeholder="Search Gender" onChange={searchinput} />
                <input type="text" name="city" placeholder="Search City" onChange={searchinput} />
                <input type="text" name="courses" placeholder="Search Courses" onChange={searchinput} />
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th onClick={handlename} style={{ cursor: 'pointer' }}>Name ⬍</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>Courses</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map(({ id, name, email, password, gender, city, courses }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td>{gender}</td>
                                    <td>{city}</td>
                                    <td>{courses.join(', ')}</td>
                                    <td className="actions">
                                        <button onClick={() => deleteuser(id)}>Delete</button>
                                        <button onClick={() => handleEdit(id)}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            alluser.map(({ id, name, email, password, gender, city, courses }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td>{gender}</td>
                                    <td>{city}</td>
                                    <td>{courses.join(', ')}</td>
                                    <td className="actions">
                                        <button onClick={() => deleteuser(id)}>Delete</button>
                                        <button onClick={() => handleEdit(id)}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default View;

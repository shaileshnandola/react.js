import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './View.css';

const View = () => {
    const [sort, setSort] = useState({
        name: true
    });

    const [searchfield, setSearchField] = useState({
        name: '',
        courses: '',
        year: '',
        status: ''
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

        if (searchfield.courses) {
            fdata = fdata.filter(item =>
                item.courses.join(' ').toLowerCase().includes(searchfield.courses.toLowerCase())
            );
        }

        if (searchfield.year) {
            fdata = fdata.filter(item =>
                String(item.year).toLowerCase().includes(searchfield.year.toLowerCase())
            );
        }

        if (searchfield.status) {
            const statusFilter = searchfield.status.toLowerCase();
            fdata = fdata.filter(item => {
                const userStatus = item.status ? 'active' : 'inactive';
                return userStatus.includes(statusFilter);
            });
        }
        setFilteredUsers(fdata);
    }, [searchfield, alluser]);

    const handlename = () => {
        const sorted = [...filteredUsers].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) return sort.name ? -1 : 1;
            if (nameA > nameB) return sort.name ? 1 : -1;
            return 0;
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
        setSearchField({
            ...searchfield,
            [name]: value
        });
    };

    return (
        <div className="view-container">
            <h2>Student View Records</h2>
            <Link to="/add" className="add-link">+ Add Student</Link>

            <div className="search-bar">
                <input type="text" name="name" placeholder="Search Name" onChange={searchinput} />
                <input type="text" name="courses" placeholder="Search Courses" onChange={searchinput} />
                <input type="text" name="year" placeholder="Search Year" onChange={searchinput} />
                <input type="text" name="status" placeholder="Search Status (active/inactive)" onChange={searchinput} />
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th onClick={handlename} style={{ cursor: 'pointer' }}>Name ⬍</th>
                            <th>Courses</th>
                            <th>Year</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map(({ id, name, courses, year, status }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{courses.join(', ')}</td>
                                    <td>{year}</td>
                                    <td>{status ? "Active" : "Inactive"}</td>
                                    <td className="actions">
                                        <button onClick={() => deleteuser(id)}>Delete</button>
                                        <button onClick={() => handleEdit(id)}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            alluser.map(({ id, name, courses, year, status }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{courses.join(', ')}</td>
                                    <td>{year}</td>
                                    <td>{status ? "Active" : "Inactive"}</td>
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

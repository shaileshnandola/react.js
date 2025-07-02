import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../Firebase';
import './View.css';

const View = () => {
  const [allUsers, setAllUsers] = useState({});
  const db = getDatabase(app);

  const getUsers = () => {
    const allRecords = ref(db, `contacts`);
    onValue(allRecords, (snapshot) => {
      const data = snapshot.val();
      setAllUsers(data || {});
    });
  };

  const deleteUser = (id) => {
    const deleteRef = ref(db, `contacts/${id}`);
    remove(deleteRef)
      .then(() => {
        alert("Record deleted");
        getUsers();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="view-container">
      <h1>View Contact</h1>
      <Link to="/add" className="add-btn">+ Add New</Link>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(allUsers).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value.name}</td>
                <td>{value.company}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.message}</td>
                <td>
                  <button className="btn delete" onClick={() => deleteUser(key)}>Delete</button>
                  <Link to="/edit" state={{ id: key, forminput: value }}>
                    <button className="btn edit">Edit</button>
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default View;

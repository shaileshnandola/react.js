import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { app } from '../Firebase';
import { getDatabase, ref, update } from 'firebase/database';
import './Form.css';

const Edit = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); 

  const [forminput, setForminput] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const db = getDatabase(app);

  useEffect(() => {
    if (state?.forminput) {
      setForminput(state.forminput);
    }
  }, [state]);

  const changeinput = (e) => {
    const { name, value } = e.target;
    setForminput({ ...forminput, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    update(ref(db, `contacts/${state.id}`), {
      ...forminput
    })
      .then(() => {
        alert("Record updated successfully");
        navigate('/');
      })
      .catch((err) => console.log(err));

    setForminput({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">Edit Contact</h1>
      <div className="contact-box">
        <div className="left-panel">
          <h2>Sample Company</h2>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div className="right-panel">
          <h3>Edit Details</h3>
          <form onSubmit={handlesubmit}>
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" name="name" value={forminput.name} onChange={changeinput}  />
              </div>
              <div className="input-group">
                <label>Company</label>
                <input type="text" name="company" value={forminput.company} onChange={changeinput} />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" name="email" value={forminput.email} onChange={changeinput} required />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="text" name="phone" value={forminput.phone} onChange={changeinput} />
              </div>
            </div>
            <div className="input-group full-width">
              <label>Message</label>
              <textarea name="message" rows="5" value={forminput.message} onChange={changeinput}></textarea>
            </div>
            <button type="submit">Update</button>
          </form>
          <Link to="/" style={{ marginTop: '10px', display: 'inline-block' }}>Back to View</Link>
        </div>
      </div>
    </div>
  );
};

export default Edit;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../Firebase';
import './Form.css';

const Add = () => {
  const navigate = useNavigate();
  const db = getDatabase(app);

  const [forminput, setForminput] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const changeinput = (e) => {
    const { name, value } = e.target;
    setForminput({ 
        ...forminput,
        [name]: value
     });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000000);

    set(ref(db, `contacts/${id}`), {
     name:forminput.name,
     company:forminput.company,
     email:forminput.email,
     phone:forminput.phone,
     message:forminput.message
    })
      .then(() => {
        alert("Record added successfully!");
        setForminput({ name: '', company: '', email: '', phone: '', message: '' });
        navigate('/');
      })
      .catch((err) =>
     console.error("Firebase Error:", err));
  };

  return (
    <div className="container">
      <h1 className="main-title">Title</h1>
      <div className="contact-box">
        <div className="left-panel">
          <h2>Add Contact</h2>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div className="right-panel">
          <h3>Email Us</h3>
          <form onSubmit={handlesubmit}>
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" name="name" value={forminput.name} onChange={changeinput} />
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
            <button type="submit">SUBMIT</button>
          </form>
          <Link to="/" style={{ marginTop: '10px', display: 'inline-block' }}>Back to View</Link>
        </div>
      </div>
    </div>
  );
};

export default Add;

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, deleterecord } from '../redux/note/noteaction';


const Keep = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.note.task);
    const [forminput, setFormInput] = useState({ task: "" });
    const [latestId, setLatestId] = useState(null);
    const bottomRef = useRef(null);

    const changeinput = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...forminput, [name]: value });
    };

    const deleteuser = (id) => {
        dispatch(deleterecord(id));
    };

    const submittask = (e) => {
        e.preventDefault();
        const newId = Math.floor(Math.random() * 10000);
        const obj = { id: newId, ...forminput };
        dispatch(adduser(obj));
        setLatestId(newId);
        setFormInput({ task: "" });
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [users]);

    return (
        <div className="app-wrapper">
            <section className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center gap-3 py-3">
                            <img
                                src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                                alt="logo"
                                height="40"
                            />
                            <h3 className="m-0">Google Keep</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center py-4">
                        <div className="card form-card">
                            <div className="card-body">
                                <h5 className="card-title text-dark fw-bold">Enter Task</h5>
                                <form onSubmit={submittask} className="d-flex gap-2">
                                    <input
                                        type="text"
                                        name="task"
                                        className="form-control"
                                        value={forminput.task}
                                        onChange={changeinput}
                                        placeholder="Enter note"
                                        required
                                    />
                                    <button type="submit" className="btn btn-add">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        {
                            users.map((val) => (
                                <div key={val.id} className="col-md-4 mb-4">
                                    <div className={`card note-card ${val.id === latestId ? 'blink' : ''}`}>
                                        <div className="card-body d-flex justify-content-between align-items-start">
                                            <p className="m-0 text-dark">{val.task}</p>
                                            <button className="btn btn-sm btn-delete" onClick={() => deleteuser(val.id)}>🗑</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div ref={bottomRef}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Keep;

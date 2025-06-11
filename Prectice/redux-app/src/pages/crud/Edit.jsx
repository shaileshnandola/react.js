import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateuser } from '../../redux/action/crudaction';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const single = useSelector((state) => state.crud.single);

    const [forminput, setFormInput] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    useEffect(()=>{
        if(single){    
            setFormInput(single);
        }
    },[single])
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...forminput,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const obj = {
        //     ...forminput,
        //     userid: Math.floor(Math.random() * 1000000)
        // };

        dispatch(updateuser(forminput));
        navigate('/view');
    };

    return (
        <div align="center">
            <h1>Edit User</h1>
            <Link to="/view">View Users</Link>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={forminput.name}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input
                                    type="text"
                                    name="email"
                                    value={forminput.email}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>
                                <input
                                    type="text"
                                    name="password"
                                    value={forminput.password}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" value="Update" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Edit;

import React, { useState } from 'react'

const Form = () => {

    const [editid, setEditId] = useState("")

    const [alluser, setAllUser] = useState(localStorage.getItem('user') ?
        JSON.parse(localStorage.getItem('user')) : []
    );

    const [forminput, setFormInput] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        courses: [],

    })
    const changeinput = (e) => {
        const { name, value, type, checked } = e.target;
        if (type == "checkbox") {
            if (checked) {
                setFormInput({
                    ...forminput,
                    courses: [...forminput.courses, value]
                })
            } else {
                setFormInput({
                    ...forminput,
                    courses: forminput.courses.filter(val =>
                        val != value
                    )
                })
            }
        } else {
            setFormInput({
                ...forminput,
                [name]: value,
            });
        }

    };
    const edituser = (id) => {
        const selected = alluser.find(user => user.userid === id);
        setFormInput({ ...selected });
        setEditId(id);
    };

    const handlesubmit = (e) => {
        e.preventDefault()
        if (editid == null) {
            const up = alluser.map(user => {
                if (user.userid == editid) {
                    return (
                        {
                            ...user,
                            name: forminput.name,
                            email: forminput.email,
                            password: forminput.password,
                            gender: forminput.gender,
                            city: forminput.city,
                            courses: forminput.courses
                        }

                    )
                }
                return user
            })
            setAllUser(up)
        } else {
            let obj = {
                userid: Math.floor(Math.random() * 100000),
                ...forminput,
            }
            const olduser = [...alluser, obj];
            localStorage.setItem('user', JSON.stringify(olduser));
            setAllUser(olduser);
        }

        setFormInput({
            name: "",
            email: "",
            password: "",
            gender: '',
            city: "",
            courses: [],
        })
    }

    const deletrecord = (id) => {
        const deletUsers = alluser.filter((val) => {
            return val.userid != id
        });
        setAllUser(deletUsers);
        localStorage.setItem('user', JSON.stringify(deletUsers));
    };

    return (
        <div align="center">
            <h1>Add user</h1>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name:-</td>
                            <td><input type="text" onChange={changeinput} name='name' placeholder='Enter name' value={forminput.name} /></td>
                        </tr>
                        <tr>
                            <td>Email:-</td>
                            <td><input type="text" onChange={changeinput} name='email' placeholder='Enter email' value={forminput.email} /></td>
                        </tr>
                        <tr>
                            <td>Password:-</td>
                            <td><input type="text" onChange={changeinput} name='password' placeholder='Enter password' value={forminput.password} /></td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>
                                <input type="radio" name="gender" value="male" checked={forminput.gender === "male"} onChange={changeinput} />Male
                                <input type="radio" name="gender" value="female" checked={forminput.gender === "female"} onChange={changeinput} />Female
                            </td>
                        </tr>
                        <tr>
                            <td>city:-</td>
                            <td>
                                <select name="city" value={forminput.city} onChange={changeinput}>
                                    <option value="">---select city---</option>
                                    <option value="surat">surat</option>
                                    <option value="vapi">vapi</option>
                                    <option value="daman">daman</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>courses:-</td>
                            <td>
                                <input type="checkbox" checked={forminput.courses.includes("html")} onChange={changeinput} name='courses' value="html" />HTML
                                <input type="checkbox" checked={forminput.courses.includes("c")} onChange={changeinput} name='courses' value="c" />C
                                <input type="checkbox" checked={forminput.courses.includes("c++")} onChange={changeinput} name='courses++' value="c++" />C++
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <h1>view record</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Courses</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((val, index) => {
                            const { userid, name, email, password, gender, city, courses } = val;
                            return (
                                <tr key={index}>
                                    <td>{userid}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td>{gender}</td>
                                    <td>{city}</td>
                                    <td>{courses.join(", ")}</td>
                                    <td>
                                        <button onClick={() => deletrecord(userid)}>delete</button>
                                        <button onClick={() => edituser(userid)}>Edit</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Form

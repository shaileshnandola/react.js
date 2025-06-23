import React, { useContext, useState } from "react";
import { UserContext } from "../context/usercontext";

const Edit = () => {
    const { form, setForm,adduser } = useContext(UserContext);

  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            userid: Math.floor(Math.random() * 100000),
            ...form,
        }
        
        adduser(obj)
        setForm({
            name: "",
            email: "",
            password: "",
            gender: "",
            city: "",
        });
    };

    return (
        <div align="center">
            <h1>edit User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1} cellPadding={5}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input
                                    name="name"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input
                                    name="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input
                                    name="password"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={form.gender === "male"}
                                        onChange={handleChange}
                                    />
                                    Male
                                </label>
                                {" "}
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={form.gender === "female"}
                                        onChange={handleChange}
                                    />
                                    Female
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <select name="city" value={form.city} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Vapi">Vapi</option>
                                    <option value="Daman">Daman</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align="center">
                               <input type="submit" />

                         
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

          
        </div>
    );
};

export default Edit;

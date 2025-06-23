
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
    });

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || []);
    const adduser = (obj) => {
        let alluser = [...user, obj]
        setUser(alluser)
        localStorage.setItem("user", JSON.stringify(alluser))
    }

    const deletdata = (id) => {
        let deletid = user.filter((val) => val.userid !== id)
        setUser(deletid)
        localStorage.setItem("user", JSON.stringify(deletid))
    }

    const editdata = (id) => {
        let editid = user.find((val) => val.userid === id)
        console.log(editid);
    }
    return (
        <UserContext.Provider value={{ form, setForm, adduser, user, deletdata, editdata }}>
            {children}
        </UserContext.Provider>
    );
};

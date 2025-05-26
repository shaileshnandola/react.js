import React, { useState } from 'react'
import Form from "./form/Form"
import View from "./view/View"

function App() {
  const [editid, setEditId] = useState("")

  const [forminput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    courses: [],

  })

  const [alluser, setAllUser] = useState(JSON.parse(localStorage.getItem("user")) || []
  );

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

  const deleterecord = (userid) => {
    const up = alluser.filter(record => record.userid !== userid);
    localStorage.setItem('user', JSON.stringify(up));
    setAllUser(up);
  };

  const edituser = (userid) => {
    const Edit = alluser.find((user) => user.userid === userid);
    setFormInput(Edit);
    setEditId(userid);
  };
  const handlesubmitFun = (forminput) => {
    const newUser = {
      userid: Math.floor(Math.random() * 100000),
      ...forminput,
    };
    if (editid !== "") {
      const updated = alluser.map((user) => {
        if (user.userid === editid) {
          return { ...forminput, userid: editid };
        } else {
          return user;
        }
      });
      setAllUser(updated);
      localStorage.setItem("user", JSON.stringify(updated));
      setEditId("");
    } else {
      const updatedUsers = [...alluser, newUser];
      setAllUser(updatedUsers);
      localStorage.setItem("user", JSON.stringify(updatedUsers));
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
  return (
    <>
      <Form
        handlesubmitFun={handlesubmitFun}
        changeinput={changeinput}
        forminput={forminput}
      />
      <View alluser={alluser} deleterecord={deleterecord} edituser={edituser} />
    </>
  )
}

export default App

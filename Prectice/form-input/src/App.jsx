import { useState } from "react";

function App() {
  const [forminput, setFormInput] = useState({
    username: "",
    useremail: "",
    password: "",
    gender: "",
    courses: [],
    city: "",
  });

  const [formerror, setFormError] = useState({
    username: "",
    useremail: "",
    password: "",
    courses: "",
  });

  const handleChange = (e) => {
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

  const formValidation = () => {
    let check = true
    const errors = ({
      username: "",
      useremail: "",
      password: "",
      courses: [],
    })
    if (!forminput.username) {
      errors.username = "username is required"
      check = false
    }
    if (!forminput.useremail) {
      errors.useremail = "useremail is required"
      check = false
    }
    if (!forminput.password) {
      errors.password = "password is required"
      check = false
    }
    if (forminput.courses.length === 0) {
      errors.courses = " one course is required";
      check = false;
    }
    setFormError(errors)
    return check
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      console.log(forminput);
      alert("Form is submitted");
      setFormInput({
        username: "",
        useremail: "",
        password: "",
        gender: "",
        courses: [],
        city: "",
      });
    };
  }

  return (
    <div align="center">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input type="text" name="username" onChange={handleChange} value={forminput.username} placeholder="Enter Your Name" />
                {
                  formerror.username && (
                    <span style={{ color: "red" }}>{formerror.username}</span>
                  )
                }
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input type="email" name="useremail" onChange={handleChange} value={forminput.useremail} placeholder="Enter Your email" />
                {
                  formerror.useremail && (
                    <span style={{ color: "red" }}>{formerror.useremail}</span>
                  )
                }
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input type="text" name="password" onChange={handleChange} value={forminput.password} placeholder="Enter Your password" />
                {
                  formerror.password && (
                    <span style={{ color: "red" }}>{formerror.password}</span>
                  )
                }
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>
                <input type="radio" checked={forminput.gender === "male"} name="gender" onChange={handleChange} value="male" />Male
                <input type="radio" checked={forminput.gender === "female"} name="gender" onChange={handleChange} value="female" />Female
              </td>
            </tr>
            <tr>
              <td>courses:</td>
              <td>
                <input type="checkbox" name="courses" onChange={handleChange} value="c" checked={forminput.courses.includes("c")} />c
                <input type="checkbox" name="courses" onChange={handleChange} value="c++" checked={forminput.courses.includes("c++")} />c++
                <input type="checkbox" name="courses" onChange={handleChange} value="js" checked={forminput.courses.includes("js")} />js
                <input type="checkbox" name="courses" onChange={handleChange} value="react" checked={forminput.courses.includes("react")} />react
                {
                  formerror.courses && (
                    <span style={{ color: "red" }}>{formerror.courses}</span>
                  )
                }
              </td>
            </tr>
            <tr>
              <td>city:-</td>
              <td>
                <select name="city" onChange={handleChange} >
                  <option value="">----select city---</option>
                  <option value="surat">surat</option>
                  <option value="vapi">vapi</option>
                  <option value="vadodra">vadodra</option>
                </select>

              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit"/>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;

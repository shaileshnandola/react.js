import React, { useState } from 'react'

const Form = ({handlesubmitFun,changeinput,forminput}) => {
 
    const handlesubmit = () => {
       handlesubmitFun(forminput)
    }
    return (
        <div align="center">
            <h1>Add user</h1>
            <form>
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
                            <td><input onClick={()=>handlesubmit()} type="button" value="submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Form

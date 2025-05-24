import React from 'react'

const View = ({alluser,deleterecord,edituser}) => {
  return (
    <div align="center">
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
                                        <button onClick={() => deleterecord(userid)}>delete</button>
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

export default View

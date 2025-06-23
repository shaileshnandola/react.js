import React, { useContext } from 'react'
import { UserContext } from '../context/usercontext'

const View = () => {
    const { user, deletdata, editdata } = useContext(UserContext)
    return (
        <div align="center">
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>city</th>
                        <th>gender</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((val, index) => {
                            const { userid, name, password, email, city, gender } = val
                            return (
                                <tr key={index}>
                                    <td>{userid}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td>{city}</td>
                                    <td>{gender}</td>
                                    <td>
                                        <button onClick={() => deletdata(userid)}>delet</button>
                                        <button onClick={() => editdata(userid)}>edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default View

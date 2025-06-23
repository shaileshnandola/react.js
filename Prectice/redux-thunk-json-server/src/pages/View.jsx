import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DELETE_USER, EDIT_USER, GET_USER } from '../redux/action/crudaction'

const View = () => {
    const dispatch = useDispatch()
    const navigat = useNavigate()

    const users = useSelector(state => state.crud.users)

    const edituser = (id) => {
        navigat(`/edit/${id}`)
    }

    const deleteuser = (id) => {
        dispatch(DELETE_USER(id))
    }
    useEffect(() => {
        dispatch(GET_USER())
    }, [])

    return (
        <div align="center">
            <h2>view user</h2>
            <Link to={"/add"}>Add</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u) => {
                            return (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.password}</td>
                                    <td>
                                        <button onClick={() => deleteuser(u.id)}>Delete</button>
                                        <button onClick={() => edituser(u.id)}>Edit</button>
                                    </td>
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

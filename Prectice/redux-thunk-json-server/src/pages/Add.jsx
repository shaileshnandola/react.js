import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ADD_USER } from '../redux/action/crudaction'

const Add = () => {

    const dispatch = useDispatch()

    const navigat = useNavigate()
    const [forminput, setForminput] = useState({
        name: '',
        password: '',
    })

    const changeinput = (e) => {
        let { name, value } = e.target;
        setForminput({
            ...forminput,
            [name]: value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(ADD_USER(forminput))
        navigat("/")
    }
    return (
        <div align="center">
            <h2>Add user</h2>
            <Link to={"/"}>View</Link>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <tr>
                        <td>Name:-</td>
                        <td><input type="text" placeholder='Enter Name' name='name' onChange={changeinput} /></td>
                    </tr>
                    <tr>
                        <td>password:-</td>
                        <td><input type="text" placeholder='Enter password' name='password' onChange={changeinput} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>

                </table>
            </form>

        </div>
    )
}

export default Add

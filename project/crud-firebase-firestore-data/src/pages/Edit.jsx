import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { app } from '../../firebaseConfig'

const Edit = () => {
    const navigate = useNavigate()

    const location = useLocation()

    const [forminput, setForminput] = useState({
        name: '',
        age: ''
    })
    useEffect(() => {
        setForminput({
            ...forminput,
            name: location?.state?.name,
            age: location?.state?.age
        })
    }, [location?.state])

    const changeinput = (e) => {
        const { name, value } = e.target;
        setForminput({
            ...forminput,
            [name]: value
        })
    }

    const db = getFirestore(app)

    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const updaterecord = doc(db, `users/${location?.state?.id}`)
            await updateDoc(updaterecord,{
                name: forminput.name,
                age: forminput.age
            })
            alert("record updated")
            navigate("/")
        } catch (err) {
            console.log(err);

        }
    }

    return (
        <div align="center">
            <h1>Edit user</h1>
            <Link to={"/"}>View</Link>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <tr>
                        <td>Name:-</td>
                        <td><input type="text" name='name' onChange={changeinput} value={forminput.name} /></td>
                    </tr>
                    <tr>
                        <td>age:-</td>
                        <td><input type="text" name='age' onChange={changeinput} value={forminput.age} /></td>
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

export default Edit

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { app } from '../../firebaseConfig'

const Add = () => {
    const navigate=useNavigate()

    const [forminput, setForminput] = useState({
        name: '',
        age: ''
    })

    const changeinput = (e) => {
        const { name, value } = e.target;
        setForminput({
            ...forminput,
            [name]: value
        })
    }

    const db = getFirestore(app)

    const handlesubmit = async(e) => {
        e.preventDefault()
        try{
            const addrecord=await addDoc(collection(db,`users`),{
                userid:Math.floor(Math.random()*10000),
                name:forminput.name,
                age:forminput.age
            })
            alert("record add")
            navigate("/")

        }catch(err){
            console.log(err);
            
        }


    }

    return (
        <div align="center">
            <h1>Add user</h1>
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

export default Add

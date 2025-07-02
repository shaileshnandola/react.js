import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { app } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

const View = () => {
    const navigate = useNavigate()

    const [alluser, setAlluser] = useState([])

    const db = getFirestore(app)

    const getUser = async () => {
        try {
            const data = collection(db, 'users');
            const allRecord = await getDocs(data);
            const records = allRecord.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setAlluser(records);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const deleteUser = async (id) => {
        try {
            let deletedat = doc(db, `users/${id}`);
            await deleteDoc(deletedat);
            alert("record delete")
            getUser()
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div align="center">
            <h1>View user</h1>
            <Link to={"/add"}>Add</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((val) => {
                            return (
                                <tr key={val}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>
                                        <button onClick={() => deleteUser(val.id)}>Delete</button>
                                        <button onClick={() => navigate(`/edit`,{state:val}) }>Edit</button>
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

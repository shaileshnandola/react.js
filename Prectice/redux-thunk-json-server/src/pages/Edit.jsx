import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { EDIT_USER, UPDATE_USER } from '../redux/action/crudaction'

const Add = () => {
  const [forminput, setForminput] = useState({
        name: '',
        password: '',
    })
const navigat = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams();
    const single=useSelector(state=>state.crud.single)

  
    
useEffect(()=>{
    if(id){
        dispatch(EDIT_USER(id))
    }
},[id])
 
useEffect(()=>{
if(single){
    setForminput(single)
    
}
},[single])
   

    
  
    const changeinput = (e) => {
        let { name, value } = e.target;
        setForminput({
            ...forminput,
            [name]: value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(UPDATE_USER({...forminput,id}))
        navigat("/")
    }
    return (
        <div align="center">
            <h2>Edit user</h2>
            <Link to={"/"}>View</Link>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <tr>
                        <td>Name:-</td>
                        <td><input type="text" placeholder='Enter Name' name='name' onChange={changeinput} value={forminput.name} /></td>
                    </tr>
                    <tr>
                        <td>password:-</td>
                        <td><input type="text" placeholder='Enter password' name='password' onChange={changeinput} value={forminput.password} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="update" /></td>
                    </tr>

                </table>
            </form>

        </div>
    )
}

export default Add

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteuser } from '../../redux/action/crudaction';
import {edituser} from '../../redux/action/crudaction';
const View = () => {
  const users = useSelector((state) => state.crud.users);  
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const updateuser = (id) => {
   navigate(`/edit/${id}`); 
   dispatch(edituser(id))
  };

  return (
    <div align="center">
      <h2>View Users</h2>
      <Link to="/add">Add User</Link>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item) => (
              <tr key={item.userid}>
                <td>{item.userid}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={() => dispatch(deleteuser(item.userid))}>Delete</button>
                  <button onClick={() => updateuser(item.userid)}>Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default View;

import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {userDeleted} from './userSlice'
function UserList() {
    //!Accessing store data using useSelector
    const users = useSelector(state=>state.users.users)
    console.log(users)

    const dispatch = useDispatch()

    const handleDelete = (id)=>{
       dispatch(userDeleted({id}))
    }
  return (
    <div className="container">
      <div className="row u-pull-right">
        <Link to={'/add-user'}>
            <button className="button-primary">Add User</button>
        </Link>
        
      </div>
      <div className="row">
        <h4>User List </h4>
      </div>

      <div className="row">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user) => {
              return  <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/edit-user/${user.id}`}>
                        <button>Edit</button> 
                    </Link>
                  <button onClick={()=>handleDelete(user.id)}>Delete</button></td>
                </tr> 
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;

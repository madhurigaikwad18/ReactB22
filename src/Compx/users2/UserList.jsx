import React from "react";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
function UserList() {
    //!Accessing store data using useSelector
    const users = useSelector(state=>state.users.users)
    console.log(users)
  return (
    <div className="container">
      <div className="row u-pull-right">
        <Link to={'/add-user'}>
            <button class="button-primary">Add User</button>
        </Link>
        
      </div>
      <div className="row">
        <h4>User List </h4>
      </div>

      <div className="row">
        <table class="u-full-width">
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
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><button>Edit</button> <button>Delete</button></td>
                </tr>;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;

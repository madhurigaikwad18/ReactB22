import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {userAdded} from './userSlice';
import { useNavigate } from "react-router-dom";
const AddedUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')


    const handleClick =(e) => {
        alert(`Name :${name} email : ${email}`);
        dispatch(userAdded({
            id:1,name,email
        }))
        e.preventDefault();
        navigate('/');
    }

  return (
    <div className="container">
      <h4>Add user</h4>

      <div className="row">
        <form onSubmit={handleClick}>
          <div class="row">
            <div class="six columns">
              <label for="exampleEmailInput">Name</label>
              <input
                class="u-full-width"
                type="text"
                placeholder="enter name here"
                id="exampleEmailInput"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div class="six columns">
              <label for="exampleEmailInput">Email</label>
              <input
                class="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                id="exampleEmailInput"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <input class="button-primary" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddedUser;

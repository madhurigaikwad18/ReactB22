import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {userAdded} from './userSlice';
import { useNavigate } from "react-router-dom";
const AddedUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [error,setError] = useState(null)

    const userId = useSelector((state)=>state.users.users.length)
    const handleClick =(e) => {
        // alert(`Name :${name} email : ${email}`);
        if(name && email){
            dispatch(userAdded({
                id:userId+1,
                name,email
            }))
          
            navigate('/');
        }else{
            setError('Fill in all fields');
        }
        e.preventDefault();
    }

  return (
    <div className="container">
      <h4>Add user</h4>

      <div className="row">
        <form onSubmit={handleClick}>
          <div className="row">
            <div className="six columns">
              <label for="exampleEmailInput">Name</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="enter name here"
                id="exampleEmailInput"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="six columns">
              <label for="exampleEmailInput">Email</label>
              <input
                className="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                id="exampleEmailInput"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
            <div className="row">
                {error}
            </div>
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddedUser;

import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {userUpdated} from './userSlice'

const EditUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { pathname } = useLocation()
  console.log(pathname)
  const userId = parseInt(pathname.replace("/edit-user/", "") );
  console.log(userId)

  const user = useSelector((state)=>
      state.users.users.find((user)=>user.id === userId)
  )

  console.log(user)

  const [name,setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [error,setError] = useState(null)

  const handleUpdate =()=>{
    if(name && email){
      dispatch(
        userUpdated( {id:userId, name,email} )
      )
      navigate('/');
    }else{
      setError("Please enter a name and email for the user")
    }
  }


  return (
     <div className="container">
      <h4>Edit user</h4>

      <div className="row">
        <form onSubmit={handleUpdate}>
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
          <input className="button-primary" type="submit" value="Update" />
        </form>
      </div>
    </div>
  )
}

export default EditUser
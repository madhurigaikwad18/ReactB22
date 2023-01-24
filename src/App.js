import './App.css';
import './skeleton.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
 } from 'react-router-dom';

import UserList from './Components/users/UserList'
import AddedUser from './Components/users/AddedUser'
import EditUser from './Components/users/EditUser'

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<UserList/>}></Route>
        <Route exact path='/add-user' element={<AddedUser/>}></Route>
        <Route exact path='/edit-user/:id' element={<EditUser/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;

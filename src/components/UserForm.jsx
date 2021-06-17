import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addUser } from "../modules/users";
import RenderOnRole from "./RenderOnRole";
import UserService from "../services/UserService";

const UserForm = () => {
  const [Id, setId] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Picture, setPicture] = useState('');
  const [Email, setEmail] = useState('');
  // const [IsAdmin, setIsAdmin] = useState('');


  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!FirstName || !LastName) {
      return;
    }
    dispatch(addUser({ FirstName: FirstName, LastName: LastName, Picture: Picture, Email:Email, Id }))
      .then(() => history.push("/"))
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Add New User:</h1>
          {/* <div className="form-group">
            <label htmlFor="id">id</label>
            <input type="text" className="form-control" placeholder="id"
                   value={Id} onChange={(e) => setId(e.target.value)}/>
          </div> */}
          <div className="form-group">
            <label htmlFor="id">id</label>
            <input type="text" className="form-control" placeholder="id"
                   value={Id} onChange={(e) => setId(UserService.getUsername())}/>
          </div>
          <div className="form-group">
            <label htmlFor="FirstName">First name</label>
            <input type="text" className="form-control" placeholder="First name"
                   value={FirstName} onChange={(e) => setFirstName(UserService.getGivenName())}/>
          </div>
          <div className="form-group">
            <label htmlFor="setLastName">Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name"
                   value={LastName} onChange={(e) => setLastName(UserService.getGivenFName())}/>
          </div>
          {/* <div className="form-group">
            <label htmlFor="Picture">Picture</label>
            <input type="text" className="form-control" placeholder="Picture"
                   value={Picture} onChange={(e) => setPicture(e.target.value)}/>
          </div> */}
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="text" className="form-control" placeholder="Email"
                   value={Email} onChange={(e) => setEmail(UserService.email())}/>
          </div>

          <div className="form-group">
            <label htmlFor="Picture">Picture</label>
            <input type="text" className="form-control" placeholder="Picture"
                   value={Picture} onChange={(e) => setPicture(e.target.value)}/>
          </div>
          {/* <div className="form-group">
            <label htmlFor="IsAdmin">IsAdmin</label>
            <input type="text" className="form-control" placeholder="IsAdmin"
                   value={IsAdmin} onChange={(e) => setIsAdmin(e.target.value)}/>
          </div> */}
          <RenderOnRole roles={['user']}>
            <button type="submit" className="btn btn-primary">Add book</button>
          </RenderOnRole>
        </form>
        <h1>{UserService.admin()}</h1>
      </div>
    </div>
  );
}

export default UserForm

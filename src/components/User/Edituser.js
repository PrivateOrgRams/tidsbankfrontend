import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { editUser } from "../../modules/users";
import RenderOnRole from "../RenderOnRole";
import UserService from "../../services/UserService";

const UserForm = (user) => {
  const [Id, setId] = useState('');
  const [FirstName, setFirstName] = useState(user.user.firstName);
  const [LastName, setLastName] = useState(user.user.lastName);
  const [Email, setEmail] = useState(user.user.email);
  //const [Picture, setPicture] = useState(user.user.email);

 // const [IsAdmin, setIsAdmin] = useState('false');

 //console.log(dataParentToChild)
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {

    event.preventDefault();
    if (FirstName) {
      return;
    }
    dispatch(editUser({ FirstName: FirstName, LastName: LastName, Email:Email, Id:UserService.getUsername() }))
      .then(() => history.push("/"))

  };

  return (
    <div className="row">

      <div className="col-sm-6">

        { <form onSubmit={handleSubmit}>
          <h1>Edit User:</h1>

          <div className="form-group">
            <label htmlFor="FirstName">First name</label>
            <input type="text" className="form-control" placeholder="First name"
                   value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="setLastName">Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name"
                   value={LastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="text" className="form-control" placeholder="Email"
                   value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>
            <button type="submit" className="btn btn-primary" >Edit Profile</button>
        </form> }
        {/* { UserService.hasRole(["admin"]) && <h1>I'm an Admin</h1> } */}
      </div>
    </div>
  );
}

export default UserForm

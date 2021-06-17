import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allUsers, deleteUser } from "../modules/users";


const UserList = () => {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allUsers())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>TidsBanken</h1>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>id</th>
            <th>FirstName</th>
            <th>Last Name</th>
            <th>isAdmin</th>
            <th>Email</th>
            <th>Picture</th>
            


          </tr>
          </thead>
          <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {/*<Link to={`/users/${user.id}`}>{user.firstName}</Link>*/}
                <Link to={`/users/${user.id}`}>{user.firstName} {user.Name}</Link>
              </td>            
              <td>
              <Link to={`/users/${user.id}`}>{`${user.lastName}`}</Link>
              </td>
              <td>
              <Link to={`/users/${user.id}`}>{`${user.isAdmin}`}</Link>
              </td>
              <td>
              <Link to={`/users/${user.id}`}>{`${user.email}`}</Link>
              </td>
              <td>
              <Link to={`/users/${user.id}`}>{`${user.picture}`}</Link>
              <button  className="btn btn-xs btn-danger" onClick={() => dispatch(deleteUser(user))}>
                  Delete User
                </button>

              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList

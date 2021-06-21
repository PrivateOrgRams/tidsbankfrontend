import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allUsers, editUser } from "../../modules/users";
import Edituser from './Edituser'

const UserDetails = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const [user, setUser] = useState();

  useEffect(() => {
    dispatch(allUsers());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setUser(users.find((user) => user.id === userId));
    // setBook(books.find(user => book.id === parseInt(bookId, 10)))
  }, [userId, users]);

  const handleSubmit = async (newuser) => {
    dispatch(editUser(newuser));
  };

  //   const ChangeStatue = async ( id , state) => {
  //     fetch("https://localhost:5001/api/Status/Status/",
  //    {  method: "POST",
  //    headers: {"Content-type": "application/json"},
  //     body: JSON.stringify({id : id, State: state })})
  //    //  .then(response =>
  //    //   {console.log(response.status);  return response.json();}).then(data => console.log(data));
  //    //   console.log(dates)
  //  };

  return user ? (
    <div className="row">
      <div className="col-sm-12">
        <h1>Details for user ID {user.id}</h1>
        <hr />
        <h3>Empolyee</h3>
        <p className="lead">{user.firstName}</p>
        <h3>Title</h3>
        <p className="lead">{user.lastName}</p>
        <hr />
        <p>
          <Link to="/">&laquo; back to list</Link>
        </p>
      </div>
      <button
        className="btn btn-xs btn-danger"
        onClick={() => handleSubmit({ id: user.id, email: "Reject" })}
      >
        Delete Request
      </button>
      <Edituser/>
    </div>
  ) : null;
};

export default UserDetails;

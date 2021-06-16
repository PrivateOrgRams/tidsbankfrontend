import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allUsers } from '../modules/users';

const UserDetails = () => {

  const { userId } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const [user, setUser] = useState();

  useEffect(() => {
    dispatch(allUsers())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setUser(users.find(user => user.id === userId))
    // setBook(books.find(user => book.id === parseInt(bookId, 10)))
  }, [userId, users]);

  return user ? (
    <div className="row">
      <div className="col-sm-12">
        <h1>Details for user ID {user.id}</h1>
        <hr/>
        <h3>Empolyee</h3>
        <p className="lead">{user.firstName}</p>
        <h3>Title</h3>
        <p className="lead">{user.lastName}</p>
        <hr/>
        <p>
          <Link to="/">&laquo; back to list</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default UserDetails

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allComments, deleteComment } from "../../modules/comment";
import RolesRoute from "../RolesRoute";
import UserService from "../../services/UserService";
import AddComments from "./AddComments"

const CommentsforRequest = (  {dataParentToChild}) => {

  const dispatch = useDispatch();
  const { comment } = useSelector((state) => state);
 console.log(  {dataParentToChild})
  useEffect(() => {
    dispatch(allComments(dataParentToChild.id))
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
 console.log(comment)
  return (
    <div className="row">
      <div className="col-sm-12">
      <h6>{UserService.getUsername()}</h6>
        <h1>comments</h1>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Message</th>
            {/* <th>Action</th> */}
          </tr>
          </thead>
          <tbody>
          {comment.map((user) => (

            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
               {user.userName}
              </td>
              <td><p>{user.myMessage}</p></td>
              <td>
              {/* <h1>{UserService.getUsername()}
                <button  className="btn btn-xs btn-danger" onClick={() => dispatch(deleteComment(user))}>
                  Delete Comments
                </button>
                </h1> */}

              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <AddComments  comentsId = {dataParentToChild.id}/>
    </div>
  );
}

export default CommentsforRequest

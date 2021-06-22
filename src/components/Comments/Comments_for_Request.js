import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allComments, deleteComment } from "../../modules/comment";
import RolesRoute from "../RolesRoute";

const CommentsforRequest = (  {dataParentToChild}) => {

  const dispatch = useDispatch();
  const { comment } = useSelector((state) => state);
 console.log(  {dataParentToChild})
  useEffect(() => {
    dispatch(allComments(dataParentToChild))
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
 console.log(comment)
  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>comments</h1>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {comment.map((user) => (

            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
               {user.userId}
              </td>
              <td><p>{user.myMessage}</p></td>
              <td>
                <RolesRoute  roles={['user']}>
                <button  className="btn btn-xs btn-danger" onClick={() => dispatch(deleteComment(user))}>
                  Delete Comments
                </button>
                </RolesRoute>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CommentsforRequest

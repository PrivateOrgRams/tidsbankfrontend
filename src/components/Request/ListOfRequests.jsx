import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allRequests, deleteRequest } from "../../modules/requests";
import RolesRoute from "../RolesRoute";


const ListOfRequests = () => {

  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allRequests());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>List of Request</h1>
        <table className="table table-striped">
          <thead>
          <tr>
          <th>ID</th>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Requested By</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
            <td>{req.id}</td>
              <td>
                <Link to={`/requests/${req.id}`}>{req.title}</Link>
              </td>
              <td>{req.periodStart}</td>
              <td>{req.periodEnd}</td>
              <td>{req.ownerName}</td>
              <td>{req.state}</td>
              <td>

                <RolesRoute  roles={['admin']}>
                <button  className="btn btn-xs btn-danger" onClick={() => dispatch(deleteRequest(req))}>
                  Delete Request
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

export default ListOfRequests

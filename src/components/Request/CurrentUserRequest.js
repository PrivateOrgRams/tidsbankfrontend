import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allRequests, deleteRequest } from "../../modules/requests";
import Ineligibleperiod from "./Ineligibleperiod"
import RolesRoute from "../RolesRoute";

const CurrentUserRequest = () => {
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state);
  let request =   requests.filter(z=>z.state !== "Pending")

  useEffect(() => {
    dispatch(allRequests());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      <div style={{float: 'right'}}>
            <Ineligibleperiod/>
        </div>
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
          <tbody >
            {request.map( (req) => (
              <tr key={req.id}>
                <td >{req.id}</td>
                <td>
                  <Link to={`/requests/${req.id}`}>{req.title}</Link>
                </td>
                <td >{req.periodStart}</td>
                <td>{req.periodEnd}</td>
                <td>{req.ownerName}</td>
                <td style={{color: req.state === "Accept"  ? 'green' : req.state=== "Reject"? "red" : "black"}}>
                  {req.state}
                </td>
                <td>
                  <RolesRoute  roles={['admin']}>
                  <button
                    className="btn btn-xs btn-danger"
                    onClick={() => dispatch(deleteRequest(req))}
                  >
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
};

export default CurrentUserRequest;

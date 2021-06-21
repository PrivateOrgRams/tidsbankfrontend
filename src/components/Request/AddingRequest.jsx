import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addRequest } from "../../modules/requests";
import UserService from '../../services/UserService';
//import Ineligibleperiod from "./Ineligibleperiod"

const AddingRequest = () => {
  const [title, setTitle] = useState('');
  const [periodStart, setPeriodStart] = useState('');
  const [periodEnd, setPeriodEnd] = useState('');
  const [ownerId, setOwnerId] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!periodStart || !periodEnd) {
      return;
    }
    dispatch(addRequest({title: title, periodStart:periodStart, periodEnd: periodEnd , ownerId: ownerId}))
      .then(() => history.push("/"))
  };

  return (
    <div className="row">
        {/* <div style={{float: 'right'}}>
            <Ineligibleperiod/>
        </div> */}
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Request Vocation</h1>
          <div className="form-group">
            <input  type="text"  className="form-control" placeholder="title"
                   value={title} onChange={(e) => setTitle(UserService.getUsername())}/>
          </div>
          <div className="form-group">
            <label htmlFor="start">periodStart</label>
            <input visible="false" type="Date" className="form-control" placeholder="periodStart"
                   value={periodStart} onChange={(e) => setPeriodStart(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="end">end </label>
            <input type="Date" className="form-control" placeholder="periodEnd"
                   value={periodEnd} onChange={(e) => setPeriodEnd(e.target.value)}/>
          </div>
          <div className="form-group">
            <input  type="text" className="form-control" placeholder="Owner"
                   value={ownerId} onChange={(e) => setOwnerId(UserService.getGivenName())}/>
          </div>
            <button type="submit" className="btn btn-primary">Vocation Request</button>
        </form>
        {/* { UserService.hasRole(["admin"]) && <h1>I'm an Admin</h1> } */}
      </div>
    </div>
  );
}

export default AddingRequest

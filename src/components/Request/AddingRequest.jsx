import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addRequest } from "../../modules/requests";
import UserService from '../../services/UserService';

const AddingRequest = () => {
  const [title, setTitle] = useState('');
  const [start, setStrart] = useState('');
  const [end, setEnd] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!start || !end) {
      return;
    }
    dispatch(addRequest({title: title, start:start, end: end , userId: userId}))
      .then(() => history.push("/"))
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Add add Ineligible period</h1>
          <h1></h1>
          <div className="form-group">
            <input  type="text"  className="form-control" placeholder="start"
                   value={title} onChange={(e) => setTitle(UserService.getUsername())}/>
          </div>
          <div className="form-group">
            <input  type="text" className="form-control" placeholder="name"
                   value={userId} onChange={(e) => setUserId(UserService.getGivenName())}/>
          </div>
          <div className="form-group">
            <label htmlFor="start">start</label>
            <input visible="false" type="Date" className="form-control" placeholder="start"
                   value={start} onChange={(e) => setStrart(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="end">end </label>
            <input type="Date" className="form-control" placeholder="end"
                   value={end} onChange={(e) => setEnd(e.target.value)}/>
          </div>
            <button type="submit" className="btn btn-primary">Vocation Request</button>
        </form>
        {/* { UserService.hasRole(["admin"]) && <h1>I'm an Admin</h1> } */}
      </div>
    </div>
  );
}

export default AddingRequest

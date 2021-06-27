import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addSetting } from "../../modules/setting";

const AddSetting = () => {
  const [userid, setUserId] = useState('');
  const [maxvacationlength, setMaxVacationLength] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSetting({userid: userid, maxvacationlength:maxvacationlength}))
      .then(() => history.push("/settinglist"))
  };
  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Add Max Vacation Days</h1>

          <div className="form-group">
          <label htmlFor="start">UserId</label>
            <input visible="false" type="" className="form-control" placeholder="email"
                   value={userid} onChange={(e) => setUserId(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="start">MaxVacationLength</label>
            <input visible="false" type="number" min="1" max="90" className="form-control" placeholder="MaxVacationLength"
                   value={maxvacationlength} onChange={(e) => setMaxVacationLength(e.target.value)}/>
          </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>

      </div>
    </div>
  );
}
export default AddSetting

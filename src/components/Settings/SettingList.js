import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSettings, deleteSetting } from "../../modules/setting";
import AddSetting from "./AddSetting";

const SettingList = () => {

  const dispatch = useDispatch();
  const { setting } = useSelector((state) => state);
  console.log(setting)
  useEffect(() => {
    dispatch(allSettings())
  }, []);

  useEffect(() => {
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>List of All Users Max Vacation Length</h1>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>Id</th>
            <th>MaxVacationLength</th>
            <th>UserId</th>
          </tr>
          </thead>
          <tbody>
          {setting.map((st) => (
            <tr key={st.id}>
              <td>{st.id}</td>
              <td>{st.maxVacationLength}</td>
              <td>{st.userId}</td>
              <td>
                <button  className="btn btn-xs btn-danger" onClick={() => dispatch(deleteSetting(st))}>
                  Delete
                </button>

              </td>
            </tr>
          ))}
          </tbody>
        </table>

      </div>
      <AddSetting/>
    </div>
  );
}

export default SettingList

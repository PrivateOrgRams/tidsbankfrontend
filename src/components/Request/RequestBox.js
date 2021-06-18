import { Route, Switch } from "react-router-dom";
import Menu from "../Menu";
import NoMatch from "../NoMatch";
import RolesRoute from "../RolesRoute";
import ListOfRequests from "./ListOfRequests";
import RequestDetails from './RequestDetails';
import AddingRequest from './AddingRequest';
import Ineligibleperiod from './Ineligibleperiod';



const RequestBox = () => (
  <>
    <Menu/>
    <Switch>
      <Route exact path="/">
      <Ineligibleperiod/>
      <AddingRequest/>
      <ListOfRequests/>
      </Route>
      <Route path="/requests/:requestId">
      <RequestDetails/>
      </Route>
      <RolesRoute path="/secret" roles={['admin']}>

      </RolesRoute>
      <Route path="*">
        <NoMatch/>
      </Route>
    </Switch>
  </>
)

export default RequestBox

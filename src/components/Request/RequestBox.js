import { Route, Switch } from "react-router-dom";
import Menu from "../Menu";
import NoMatch from "../NoMatch";
import RolesRoute from "../RolesRoute";
import ListOfRequests from "./ListOfRequests";
import RequestDetail from './RequestDetails';


const RequestBox = () => (
  <>
    <Menu/>
    <Switch>
      <Route exact path="/">
      <ListOfRequests/>
      </Route>
      <Route path="/requests/:requestId">
      <RequestDetail/>
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

import { Route, Switch } from "react-router-dom";
import Menu from "../components/Menu";
import NoMatch from "../components/NoMatch";
import RolesRoute from "../components/RolesRoute";
import ListOfRequests from "../components/Request/ListOfRequests";
import RequestDetails from '../components/Request/RequestDetails';
import AddingRequest from '../components/Request/AddingRequest';
import AddInigiblP from "../components/IneligiblePeriod/AddInigiblP";
import ListOfRequestAdmin from "../components/Request/ListOfRequestAdmin";
import '../components/App.css';



const Routes = () => (
  <>
    <Menu/>
    <Switch>

      <Route exact path="/">
      <AddingRequest/>
      <ListOfRequests/>
      </Route>

      <Route path="/requests/:requestId">
      <RequestDetails/>
      </Route>

      <RolesRoute path="/AddInigiblP" roles={['admin']}>
      <Route >
      <AddInigiblP/>
      </Route>
      </RolesRoute>
      <RolesRoute path="/ListOfRequestAdmin" roles={['admin']}>
      <Route >
      <ListOfRequestAdmin/>
      </Route>
      </RolesRoute>

      <Route path="*">
        <NoMatch/>
      </Route>

    </Switch>
  </>
)

export default Routes

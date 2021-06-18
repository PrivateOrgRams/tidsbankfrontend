import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RequestBox from "./Request/RequestBox";
import StoreService from "../services/StoreService";
import RenderOnAnonymous from "./RenderOnAnonymous";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import Welcome from "./Welcome";
//import UserBox from "./User/UserBox";

const store = StoreService.setup();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <RenderOnAnonymous>
          <Welcome/>
        </RenderOnAnonymous>
         <RenderOnAuthenticated>
          <RequestBox/>
        </RenderOnAuthenticated>
        {/* <RenderOnAuthenticated>
          <UserBox/>
        </RenderOnAuthenticated> */}
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;

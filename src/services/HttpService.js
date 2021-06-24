import axios from "axios";
import UserService from "./UserService";

const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
};

const _axios = axios.create();

const configure = () => {
  _axios.interceptors.request.use((config) => {

    // Check the tokens
    console.log('Token: ', UserService.getToken());
    console.log('Access Token: ', UserService.getAccess());
    console.log('Parsed Token: ', UserService.getTokenParsed());
    console.log('Is User Logged In?: ', UserService.isLoggedIn());

    if (UserService.isLoggedIn()) {
      const cb = () => {
        config.headers.Authorization = `Bearer ${UserService.getAccess()}`;
        //config.headers.Authorization = `Bearer ${UserService.accessToken()}`;
        return Promise.resolve(config);
      };
      return UserService.updateToken(cb);
    }
  });
};


const getAxiosClient = () => _axios;

const HttpService = {
  HttpMethods,
  configure,
  getAxiosClient,
};

export default HttpService;

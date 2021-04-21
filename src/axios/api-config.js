import * as axios from 'axios';
import * as tokenService from "../services/TokenService";

const api = () => {
    // debugger;
    //Todo creationg token
    const token = tokenService.isTokenPresent()
    ? "" + tokenService.getToken()
    : "";
    const trelloAxios = axios.create({
        timeout: 10000,
        baseURL: "http://localhost:8080",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Authorization": token,
        },
    });

    trelloAxios.interceptors.request.use((request) => {
        console.log("Starting Request", request);
        return request;
    });

    trelloAxios.interceptors.response.use((response) => {
        console.log("Response:", response);
        return response;
    });

    return trelloAxios;
}

export default api;
import {environmentConfig} from "../environmentConfig";

export const RestApiUrl = {
    REGISTRATION: environmentConfig.API_URL + "/api/v1/registration",
    TRADITIONAL_LOGIN: environmentConfig.API_URL + "/api/v1/login",
    GOOGLE_LOGIN: environmentConfig.API_URL + "/api/v1/login/viaGoogle"
}
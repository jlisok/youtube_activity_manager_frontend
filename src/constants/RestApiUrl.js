import {environmentConfig} from "../environmentConfig";

export const RestApiUrl = {
    REGISTRATION: environmentConfig.API_URL + "/api/v1/registration",
    TRADITIONAL_LOGIN: environmentConfig.API_URL + "/api/v1/login",
    GOOGLE_LOGIN: environmentConfig.API_URL + "/api/v1/login/viaGoogle",
    GOOGLE_AUTHORIZATION: environmentConfig.API_URL + "/api/v1/login/authorize",
    SUBSCRIBED_CHANNELS: environmentConfig.API_URL + "/api/v1/youtube/channels",
    VIDEOS: environmentConfig.API_URL + "/api/v1/youtube/videos",
    STATS_BY_CATEGORY: environmentConfig.API_URL + "/api/v1/statistics/category",
    STATS_BY_CREATOR: environmentConfig.API_URL + "/api/v1/statistics/creator",
    SUCCESSFUL_SYNCHRONIZATION: environmentConfig.API_URL + "/api/v1/synchronization",
}
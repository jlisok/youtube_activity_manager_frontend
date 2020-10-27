import {UserHttpResponse} from "../constants/UserHttpResponse";

export const handleAxiosSynchronizationResponse = (response, state) => {
    if (response.data !== null) {
        state.lastSynchronization = response.data.substring(0, 10) + " " + response.data.substring(11, 16);
    } else {
        state["exception"] = UserHttpResponse.UNKNOWN_EVENT;
    }
    return state;
}

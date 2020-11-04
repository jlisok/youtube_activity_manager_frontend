import {UserHttpResponse} from "../constants/UserHttpResponse";
import moment from "moment";

export const handleAxiosSynchronizationResponse = (response, state) => {
    if (response.data !== null) {
        response.data.length > 0 ? state.lastSynchronization = moment(response.data) : state.lastSynchronization = response.data;
    } else {
        state["exception"] = UserHttpResponse.UNKNOWN_EVENT;
    }
    return state;
};

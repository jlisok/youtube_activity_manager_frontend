import {UserHttpResponse} from "../constants/UserHttpResponse";
import moment from "moment";

export const handleAxiosSynchronizationResponse = (response, state) => {
    if (response.data !== null) {
        state.lastSynchronization = moment(response.data).fromNow();
    } else {
        state["exception"] = UserHttpResponse.UNKNOWN_EVENT;
    }
    return state;
}

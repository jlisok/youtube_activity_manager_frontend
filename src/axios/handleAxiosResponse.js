import {UserHttpResponse} from "../constants/UserHttpResponse";
import {SynchronizationStatus} from "./SynchronizationStatus";
import moment from "moment";

export const handleAxiosResponse = (response, state, arrayName, jsonNames) => {
    if (response.data !== null) {
        state.arrays[arrayName] = response.data[jsonNames.LIST_NAME];
        state.arrays["status"] = response.data["state"];
        state.arrays["statusCreatedAt"] = moment(response.data["stateCreatedAt"]);
        if (state.arrays["status"] === SynchronizationStatus.SUCCESS) {
            state["lastSynchronization"] = state.arrays["statusCreatedAt"];
        }
    } else {
        state["exception"] = UserHttpResponse.UNKNOWN_EVENT;
    }

    return state;
}
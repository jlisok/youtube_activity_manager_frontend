import {UserHttpResponse} from "../constants/UserHttpResponse";

export const handleAxiosResponse = (response, state, arrayName, jsonNames) => {
    if (response.data !== null) {
        state.arrays[arrayName] = response.data[jsonNames.LIST_NAME];
        state.arrays["status"] = response.data["state"];
        state.arrays["statusCreatedAt"] = response.data["stateCreatedAt"];
    } else {
        state["exception"] = UserHttpResponse.UNKNOWN_EVENT;
    }
    return state;
}
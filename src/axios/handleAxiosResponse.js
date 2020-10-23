import {UserHttpResponse} from "../constants/UserHttpResponse";

export const handleAxiosResponse = (response, state, arrayName) => {
    if (response.data !== null) {
        state.arrays[arrayName] = response.data;
    } else {
        state["exception"] = UserHttpResponse.UNKNOWN_EVENT;
    }
    return state;
}
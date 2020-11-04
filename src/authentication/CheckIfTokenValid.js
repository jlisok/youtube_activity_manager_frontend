import {LocalStorageItemNames} from "../commons/LocalStorageItemNames";
import moment from "moment";
import {setCredentialsForUnauthenticatedUser} from "./setCredentialsForUnauthenticatedUser";

export function checkIfTokenValid(props) {

    const token = localStorage.getItem(LocalStorageItemNames.TOKEN_EXPIRATION_TIME);

    if (token) {
        const jwtExpiration = moment(token);
        if (jwtExpiration.diff(moment.now()) < 0) {
            setCredentialsForUnauthenticatedUser();
            props.history.push("/")
        }
    }
}
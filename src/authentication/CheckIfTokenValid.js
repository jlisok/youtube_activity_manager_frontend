import {LocalStorageItemNames} from "../commons/LocalStorageItemNames";
import moment from "moment";
import {setCredentialsForUnauthenticatedUser} from "./setCredentialsForUnauthenticatedUser";

export function checkIfTokenValid(props) {

    if (localStorage.getItem(LocalStorageItemNames.TOKEN_EXPIRATION_TIME) !== null) {
        const jwtExpiration = moment(localStorage.getItem(LocalStorageItemNames.TOKEN_EXPIRATION_TIME));
        if (jwtExpiration.diff(moment.now()) < 0) {
            setCredentialsForUnauthenticatedUser();
            props.history.push("/")
        }
    }
}
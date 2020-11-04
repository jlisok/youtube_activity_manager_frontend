import {LocalStorageItemNames} from "../commons/LocalStorageItemNames";

export function checkIfUserAuthenticated(props) {
    if (localStorage.getItem(LocalStorageItemNames.AUTHENTICATED) !== "true") {
        props.history.push("/");
    }
}
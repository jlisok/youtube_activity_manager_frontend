import {LocalStorageItemNames} from "../commons/LocalStorageItemNames";

export function checkIfUserAuthorized(props) {
    if (localStorage.getItem(LocalStorageItemNames.IF_EVER_AUTHORIZED) !== "true") {
        props.history.goBack();
    }
}
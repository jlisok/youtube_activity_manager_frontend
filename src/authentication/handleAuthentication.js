import {LocalStorageItemNames} from "../commons/LocalStorageItemNames";

export function handleAuthentication(token, ifAuthenticated, ifAuthorized) {
    localStorage.setItem(LocalStorageItemNames.TOKEN, token);
    localStorage.setItem(LocalStorageItemNames.AUTHENTICATED, ifAuthenticated);
    localStorage.setItem(LocalStorageItemNames.AUTHORIZED, ifAuthorized); // TODO: authorization granting from backend
}
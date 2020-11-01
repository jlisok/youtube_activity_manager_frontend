import {LocalStorageItemNames} from "../commons/LocalStorageItemNames";

export function handleAuthentication(token, tokenExpirationTime, ifAuthenticated, ifEverAuthorized) {
    localStorage.setItem(LocalStorageItemNames.TOKEN, token);
    localStorage.setItem(LocalStorageItemNames.TOKEN_EXPIRATION_TIME, tokenExpirationTime);
    localStorage.setItem(LocalStorageItemNames.AUTHENTICATED, ifAuthenticated);
    localStorage.setItem(LocalStorageItemNames.IF_EVER_AUTHORIZED, ifEverAuthorized);
}
import {handleAuthentication} from "./handleAuthentication";

export function setCredentialsForUnauthenticatedUser() {
    handleAuthentication(null, null, false, null);
}
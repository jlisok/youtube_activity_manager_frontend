import {LocalStorageItemNames} from "../commons/LocalStorageItemNames";
import moment from "moment";
import React from "react";
import {setCredentialsForUnauthenticatedUser} from "./setCredentialsForUnauthenticatedUser";

export function IfUserStillAuthenticated(props) {

    if (localStorage.getItem(LocalStorageItemNames.TOKEN_EXPIRATION_TIME).length > 0) {
        const jwtExpiration = moment(localStorage.getItem(LocalStorageItemNames.TOKEN_EXPIRATION_TIME));
        if (jwtExpiration.diff(moment.now()) < 0) {
            setCredentialsForUnauthenticatedUser();
            props.history.push("/")
        }
    }
}
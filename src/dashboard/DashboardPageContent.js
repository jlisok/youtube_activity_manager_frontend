import {AuthorizedPageContent} from "./AuthorizedPageContent";
import {UnauthorizedPageContent} from "./UnauthorizedPageContent";
import React from "react";
import {LocalStorageItemNames} from "../commons/LocalStorageItemNames";

export function DashboardPageContent() {
    const isAuthorized = localStorage.getItem(LocalStorageItemNames.AUTHORIZED);
    return isAuthorized === "true" ? <AuthorizedPageContent/> : <UnauthorizedPageContent/>;
}
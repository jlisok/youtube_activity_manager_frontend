import {AuthorizedPageContent} from "./AuthorizedPageContent";
import {UnauthorizedPageContent} from "./UnauthorizedPageContent";
import React from "react";

export function DashboardPageContent() {
    const isAuthorized = localStorage.getItem("authorized");
    return isAuthorized === "true" ? <AuthorizedPageContent/> : <UnauthorizedPageContent/>;
}
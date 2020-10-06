export function handleAuthentication(token, ifAuthenticated, ifAuthorized) {
    localStorage.setItem("token", token);
    localStorage.setItem("authenticated", ifAuthenticated);
    localStorage.setItem("authorized", ifAuthorized); // TODO: authorization granting from backend
}
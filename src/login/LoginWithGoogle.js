import React from 'react'
import GoogleLogin from 'react-google-login';
import {useHistory} from "react-router-dom";
import axios from "axios";


export function LoginWithGoogle() {

    const history = useHistory();

    function signup(res) {

        const googleResponse = {
            name: res.profileObj.givenName,
            email: res.profileObj.email,
            googleIdToken: res.tokenObj.id_token,
            accessToken: res.tokenObj.access_token,
            scopes: res.getGrantedScopes(),
            providerId: 'Google'
        };

        const url = "http://localhost:8080/api/v1/login/viaGoogle";
        let badRequest = null;
        axios
            .post(url, googleResponse)
            .then(response => {
                //TODO: handling valid response after writing the functionality on the back-end side
                localStorage.setItem("token", response.data);
                localStorage.setItem("authenticated", "true");
                localStorage.setItem("authorized", "true");
            })
            .catch(error => {
                //TODO: handling errors after writing the functionality on the back-end side
                badRequest = "Login or password is incorrect. Please, try again."
            })
            .finally(() => {
                    if (badRequest !== null) {
                        return;
                    }
                    if (localStorage.getItem("authenticated") === "true") {
                        history.push("/dashboard");
                    }
                }
            )
    }


    const responseGoogle = (response) => {
        signup(response);
    }


    return (
        <GoogleLogin
            clientId="845161221251-8qcjjnqm3a568p0m9alajv2kaa514jot.apps.googleusercontent.com"
            discoveryDocs="https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
            scope="https://www.googleapis.com/auth/youtube.readonly"
            accessType="offline"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}/>
    )
}

export default LoginWithGoogle;

import React, {useState} from 'react'
import GoogleLogin from 'react-google-login';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {UserHttpResponse} from "../constants/UserHttpResponse";
import {RestApiUrl} from "../constants/RestApiUrl";
import {handleAuthentication} from "../authentication/handleAuthentication";
import {handleErrors} from "../utils/handleErrors";
import {GoogleConstants} from "../constants/GoogleConstants";
import {Time} from "../constants/Time";

//TODO: remove unexpected button shifting while on click (<DIV>) or centering (<Container>)
export function LoginWithGoogle() {

    const [badRequest, setBadRequest] = useState(undefined);

    const history = useHistory();

    const responseGoogle = (response) => {
        signUp(response);
    }

    function signUp(res) {

        const googleResponse = {
            name: res.profileObj.givenName,
            email: res.profileObj.email,
            googleIdToken: res.tokenObj.id_token,
            accessToken: res.tokenObj.access_token,
            scopes: res.getGrantedScopes(),
            providerId: 'Google'
        };

        axios
            .post(RestApiUrl.GOOGLE_LOGIN, googleResponse)
            .then(response => {
                if (response.data !== null) {
                    handleAuthentication(response.data, true, false);
                } else {
                    handleAuthentication(null, false, false);
                    setBadRequest(UserHttpResponse.AUTHENTICATION_FAILED);
                }
            })
            .catch(error => {
                const exception = handleErrors(error, UserHttpResponse.AUTHENTICATION_FAILED, UserHttpResponse.UNKNOWN_EVENT);
                setBadRequest(exception);
            })
            .finally(() => {
                    handleRedirectionToDashboard();
                }
            )
    }

    function handleRedirectionToDashboard() {
        if (badRequest === undefined) {
            history.push("/dashboard");
        } else {
            setTimeout(function () {
                setBadRequest(null);
            }, Time.TIMEOUT);
        }
    }

    return (
        <div>
            <div className="text-danger text-center p-4">
                {badRequest}
            </div>
            <GoogleLogin
                clientId={GoogleConstants.CLIENT_ID}
                discoveryDocs={GoogleConstants.DISCOVERY_DOCS}
                scope={GoogleConstants.SCOPE}
                accessType={GoogleConstants.ACCESS_TYPE}
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}/>
        </div>
    )
}

export default LoginWithGoogle;

import React, {useState} from 'react'
import GoogleLogin from 'react-google-login';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {UserHttpResponse} from "../constants/UserHttpResponse";
import {RestApiUrl} from "../constants/RestApiUrl";
import {handleErrors} from "../axios/handleErrors";
import {GoogleConstants} from "../constants/GoogleConstants";
import {Time} from "../constants/Time";
import {JwtDecodingAndAuthentication} from "../axios/JwtDecodingAndAuthentication";
import {setCredentialsForUnauthenticatedUser} from "../authentication/setCredentialsForUnauthenticatedUser";
import {LocalStorageItemNames} from "../commons/LocalStorageItemNames";
import {Labels} from "../constants/Labels";
import styled from "styled-components";

function AuthorizeWithGoogle(props) {

    const [badRequest, setBadRequest] = useState(undefined);
    const [syncInProgress, setSyncInProgress] = useState(undefined);

    const history = useHistory();

    const responseGoogle = (response) => {
        signUp(response);
    };

    function signUp(res) {

        const googleResponse = {
            googleIdToken: res.tokenObj.id_token,
            accessToken: res.tokenObj.access_token,
            scopes: res.getGrantedScopes(),
            providerId: 'Google'
        };

        let config;
        if (props.endPointUrl === RestApiUrl.GOOGLE_AUTHORIZATION) {
            config = {
                headers: {
                    Authorization: "Bearer: " + localStorage.getItem(LocalStorageItemNames.TOKEN),
                }
            }
        } else {
            config = "";
        }

        let exception;
        axios
            .post(props.endPointUrl, googleResponse, config)
            .then(response => {
                if (response.data !== null) {
                    JwtDecodingAndAuthentication(response.data);
                } else {
                    setCredentialsForUnauthenticatedUser();
                    exception = UserHttpResponse.AUTHENTICATION_FAILED;
                }
            })
            .catch(error => {
                exception = handleErrors(error, UserHttpResponse.AUTHENTICATION_FAILED, UserHttpResponse.UNKNOWN_EVENT);
            })
            .finally(() => {
                handleRedirection(exception);
                }
            )
    }

    const handleClick = (event) => {
        event.preventDefault();
    };

    function handleRedirection(exception) {
        if (exception === undefined) {
            if (props.endPointUrl === RestApiUrl.GOOGLE_LOGIN) {
                history.push("/dashboard");
            } else {
                setSyncInProgress(Labels.SYNC_TRIGGERED);
                setTimeout(function () {
                    setSyncInProgress(undefined);
                }, Time.TIMEOUT);
            }
        } else {
            setBadRequest(exception);
            setTimeout(function () {
                setBadRequest(undefined);
            }, Time.TIMEOUT);
        }
    }

    return (
        <Styles>
            {badRequest !== undefined ?
                <div className={"text-danger text-" + props.textJustify + " mb-2"}>
                    {badRequest}
                </div> : ""
            }

            <div className={"d-flex " + props.buttonJustify}>
                <GoogleLogin
                    clientId={GoogleConstants.CLIENT_ID}
                    discoveryDocs={GoogleConstants.DISCOVERY_DOCS}
                    scope={GoogleConstants.SCOPE}
                    accessType={GoogleConstants.ACCESS_TYPE}
                    buttonText={props.googleButtonText}
                    onClick={handleClick}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>
            {syncInProgress !== undefined && badRequest === undefined ?
                <div id="sync" className="text">
                    {syncInProgress}
                </div> : ""
            }
        </Styles>
    )
}

const Styles = styled.div`
#sync.text {
    width: 100%;
    font-weight: normal;
    font-size: 13px;
    text-align: right;
}
`;

export default AuthorizeWithGoogle;

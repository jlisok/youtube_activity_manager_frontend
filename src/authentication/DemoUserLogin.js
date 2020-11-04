import axios from "axios";
import {RestApiUrl} from "../constants/RestApiUrl";
import {JwtDecodingAndAuthentication} from "../axios/JwtDecodingAndAuthentication";
import {setCredentialsForUnauthenticatedUser} from "./setCredentialsForUnauthenticatedUser";
import {UserHttpResponse} from "../constants/UserHttpResponse";
import {handleErrors} from "../axios/handleErrors";
import {Row} from "react-bootstrap";
import React, {useState} from "react";
import {useHistory} from "react-router";
import styled from "styled-components";

export function DemoUserLogin(props) {

    let [badRequest, setBadRequest] = useState(undefined);

    const history = useHistory();

    const handleDemoAuthentication = event => {
        event.preventDefault();
        axios
            .post(RestApiUrl.DEMO_USER_LOGIN)
            .then(response => {
                if (response.data !== null) {
                    JwtDecodingAndAuthentication(response.data);
                } else {
                    setCredentialsForUnauthenticatedUser();
                    badRequest = UserHttpResponse.AUTHENTICATION_FAILED;
                }
            })
            .catch(error => {
                badRequest = handleErrors(error, UserHttpResponse.AUTHENTICATION_FAILED, UserHttpResponse.UNKNOWN_EVENT);
            })
            .finally(() => {
                    setBadRequest(badRequest);
                    if (badRequest === undefined) {
                        history.push("/dashboard")
                    }
                }
            )
    };

    return (
        <Styles>
            <div>
                <div className="text-danger text-center p-3">
                    {badRequest}
                </div>
                <Row id="demoHelp">
                    <small id="demoHelp" className="form-text text-danger form-text-center">
                        {props.helperText.split('\n').map((str, index) => <p key={index} className="text">{str}</p>)}
                    </small>
                </Row>
                <Row>
                    <button
                        id="demo"
                        type="submit"
                        className="btn btn-outline-danger"
                        onClick={handleDemoAuthentication}
                    > Login as demo
                        user
                    </button>
                </Row>
            </div>
        </Styles>
    )
}

const Styles = styled.div`
#demoHelp.row {
    justify-content: center;
    margin: auto;
}

.text {
    margin: auto;
}

#demo.btn  {
    margin-top: 5px;
    margin-bottom: 20px;
}
`;

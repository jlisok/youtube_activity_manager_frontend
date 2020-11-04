import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import styled from "styled-components";
import React from "react";
import AuthorizeWithGoogle from "../login/AuthorizeWithGoogle";
import {RestApiUrl} from "../constants/RestApiUrl";


export function UnauthorizedPageContent() {

    return (
        <Styles>
            <Container>
                <Row>
                    <label htmlFor="GoogleLoginNotAuthorized"
                           className="text"
                           id="notAuthorizedYetInfo"
                    >Seems like you haven't connected Your manager to Google account yet. <p/>
                        Feel free to do it anytime to experience more functionalities in
                        YouTube Activity Manager!
                    </label>
                </Row>
                <Row id="google" className="d-flex flex-column-reverse">
                    <AuthorizeWithGoogle
                        endPointUrl={RestApiUrl.GOOGLE_AUTHORIZATION}
                        googleButtonText={"Synchronize now!"}
                    />
                </Row>
            </Container>
        </Styles>
    );
}

const Styles = styled.div`
#notAuthorizedYetInfo.text {
    margin-top: 60px;
    margin-bottom: 5px;
    font-size: 15px;
}

.row {
    width: 100%;
    text-align: center;
    justify-content: center;
 }
 
 #google.row {
    width: 100%;
    margin-top: 45px;
    padding-right: 23%;
 }
 
 .col {
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
}

.btn {
    bottom: 10px;
    margin-top:20px;
    margin-bottom: 30px;
    min-width: 300px;
    min-height: 300px;
 }
`;

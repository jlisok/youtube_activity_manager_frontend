import {Row} from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import moment from "moment";
import AuthorizeWithGoogle from "../login/AuthorizeWithGoogle";
import {RestApiUrl} from "../constants/RestApiUrl";

export function LastSynchronizationObject(props) {

    const handleSynchronizationDateStamp = (props) => {
        if (props.state.lastSynchronization instanceof moment) {
            return props.state.lastSynchronization.fromNow();
        } else {
            return "never";
        }
    }

    return (
        <Styles>
            <Row className="mt-1">
                <p id="sync" className="text"><b>Last synchronization:</b> {handleSynchronizationDateStamp(props)} </p>
            </Row>
            <Row>
                <p id="sync" className="text">
                    Old data?<br/>
                </p>
            </Row>
            <Row className="justify-content-end">
                <AuthorizeWithGoogle
                    endPointUrl={RestApiUrl.GOOGLE_AUTHORIZATION}
                />
            </Row>
        </Styles>
    )
}

const Styles = styled.div`
.row {
    width: 100%;
    text-align: right;
    margin: auto;
    line-height: 20px;
}

#sync.text {
    width: 100%;
    font-weight: normal;
    font-size: 13px;
    text-align: right;
    padding: 0px;
    margin: auto;
}
`;
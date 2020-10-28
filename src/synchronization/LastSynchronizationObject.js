import {Row} from "react-bootstrap";
import React from "react";
import styled from "styled-components";

export function LastSynchronizationObject(props) {

    const handleSynchronizationDateStamp = (props) => {
        if (props.state.lastSynchronization.length > 0) {
            return props.state.lastSynchronization + " UTC";
        } else {
            return "never";
        }
    }

    return (
        <Styles>
            <Row className="mt-1">
                <p id="sync" className="text"><b>Last synchronization:</b> {handleSynchronizationDateStamp(props)} </p>
            </Row>
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
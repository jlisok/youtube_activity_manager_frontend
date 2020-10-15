import styled from "styled-components";
import React from "react";
import {useHistory} from "react-router";
import {Col, Container, Row} from "react-bootstrap";


export function AuthorizedPageContent() {

    const history = useHistory();

    function handleRedirection(destination) {
        history.push(destination);
    }

    return (
        <Styles>
            <Container>
                <Row>
                    <Col>
                        <button
                            id="activity"
                            type="activity"
                            className="btn btn-outline-info"
                            onClick={() => handleRedirection("/youtube_activity")}
                        >Show me my activity details
                        </button>
                    </Col>
                    <Col>
                        <button
                            id="statistics"
                            type="statistics"
                            className=" btn btn-outline-info"
                            onClick={() => handleRedirection("/statistics")}

                        >Let's talk statistics
                        </button>
                    </Col>
                    <Col>
                        <button
                            id="suggestions"
                            type="suggestions"
                            className=" btn btn-outline-info"
                            onClick={() => handleRedirection("/suggestions")}
                        >Hit me with suggestions <p/> of some cool videos
                        </button>
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
}

const Styles = styled.div`
.row {
    width: 100%;
    text-align: center;
    justify-content: center;
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

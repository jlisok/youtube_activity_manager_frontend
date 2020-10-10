import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {WelcomePage} from "../commons/WelcomePage";
import styled from "styled-components";
import LoginTraditionally from "../login/LoginTraditionally";

export function HomeWithLogin() {

    return (
        <Styles>
            <Container>
                <Row>
                    <Col className="main-section" lg={7}>
                        <WelcomePage/>
                    </Col>
                    <Col className="side-section" lg={5}>
                        <LoginTraditionally/>
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
}

const Styles = styled.div`
.main-section {
  border-right: 1px dashed #222;
}

.container {
  min-height: 100%;  
  min-height: 100vh;
}
`;

export default HomeWithLogin;

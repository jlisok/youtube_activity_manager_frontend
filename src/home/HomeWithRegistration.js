import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {WelcomePage} from "../commons/WelcomePage";
import SignUpTraditionally from "../signup-traditionally/SignUpTraditionally";
import styled from "styled-components";
import {NavigationBar} from "../commons/NavigationBar";

class HomeWithRegistration extends Component {


    render() {
        return (
            <Styles>
                <NavigationBar/>
                <Container>
                    <Row>
                        <Col className="main-section" lg={7}>
                            <WelcomePage/>
                        </Col>
                        <Col className="side-section" lg={5}>
                            <SignUpTraditionally/>
                        </Col>
                    </Row>
                </Container>
            </Styles>
        );
    }
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

export default HomeWithRegistration;

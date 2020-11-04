import React from 'react'
import styled from "styled-components";
import {Container, Image, Row} from "react-bootstrap";
import {environmentConfig} from "../environmentConfig";


export const WelcomePage = () => (
    <Styles>
        <Container>
            <Row>
                <Image src={environmentConfig.STATIC_RESOURCE_URL + "/hopping-alpaca.gif"} roundedCircle
                       width="150"/>
            </Row>
            <Row>
                <h2 className="d-inline-block">Welcome to</h2>
                <h1>YouTube Activity Manager</h1>
            </Row>
            <Row>
                <p>YouTube Activity Manager is an App that opens
                    up a new perspective to analyze your YouTube activity</p>
            </Row>
        </Container>
    </Styles>
)

const Styles = styled.div`
 .row {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 40px;
 }
`;

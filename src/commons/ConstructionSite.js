import React, {Component} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import styled from "styled-components";
import {NavigationBar} from "./NavigationBar";
import {environmentConfig} from "../environmentConfig";


class ConstructionSite extends Component {
    render() {
        return (
            <Styles>
                <NavigationBar/>
                <Container>
                    <Row>
                        <Col>
                            <Image src={environmentConfig.STATIC_RESOURCE_URL + "/hopping-alpaca.gif"} roundedCircle
                                   width="300"/>
                        </Col>
                        <Col>
                            <h2>Well,</h2>
                            <h2>this site is still under construction.</h2>
                        </Col>
                    </Row>
                </Container>
            </Styles>
        );
    }
}

const Styles = styled.div`
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  align-content: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
}

.row {
    width: 100%;
    height: 100%;
    margin-top: 180px;
    justify-content: center;
 }
 
 .col {
    height: 100%;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    align-items: center;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
`;

export default ConstructionSite;

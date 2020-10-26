import React, {Component} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import styled from "styled-components";
import {NavigationBar} from "./NavigationBar";


class OpsSomethingWentWrong extends Component {
    render() {
        return (
            <Styles>
                <NavigationBar/>
                <Container>
                    <Row>
                        <Col>
                            <Image
                                src="https://s3.eu-central-1.amazonaws.com/com.justyna.lisok.static/alpaca.gif"
                                roundedCircle width="300"/>
                        </Col>
                        <Col>
                            <h1>Oops!</h1>
                            <br/>
                            <h2>Something went wrong!</h2>
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

export default OpsSomethingWentWrong;

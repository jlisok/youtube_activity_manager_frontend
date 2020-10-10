import React, {Component} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import styled from "styled-components";


class OpsSomethingWentWrong extends Component {
    render() {
        return (

            <Styles>
                <Container>
                    <Row>
                        <Col>
                            <Image src="https://cdn.dribbble.com/users/1342631/screenshots/4576524/alpaca_animated_dribbble.gif" roundedCircle width="300"/>
                        </Col>
                        <Col>
                            <h1> Oops! </h1>
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
  height: 100;
  position: absolute;
  top: 35%;
}
`;

export default OpsSomethingWentWrong;

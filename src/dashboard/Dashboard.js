import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import styled from "styled-components";
import {DashboardPageContent} from "./DashboardPageContent";
import {NavigationBar} from "../commons/NavigationBar";
import {checkIfUserStillAuthenticated} from "../authentication/checkIfUserStillAuthenticated";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        checkIfUserStillAuthenticated();
    }

    render() {
        return (
            <Styles>
                <NavigationBar/>
                <Container>
                    <Row className="justify-content-center">
                        <label htmlFor="youtubeActivityList"
                               className="text"
                               id="title"
                        >Welcome to YouTube Activity Manager</label>
                    </Row>
                    <Row>
                        <label htmlFor="youtubeActivityList"
                               className="text"
                               id="info"
                        >What do you feel like doing today?</label>
                    </Row>
                    <DashboardPageContent/>
                </Container>
            </Styles>
        );
    }
}

const Styles = styled.div`
.text {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 25px;
}

#title.text {
    margin-top: 50px;
    font-weight: bold;
    font-size: 35px;
}

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
`;


export default Dashboard;

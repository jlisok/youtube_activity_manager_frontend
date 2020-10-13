import React, {Component} from 'react';
import {Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import styled from "styled-components";

class About extends Component {
    render() {
        return (
            <Styles>
                <Container>
                    <Row id="text">
                        <label htmlFor="aboutUs"
                               className="text"
                               id="aboutUsTitle"
                        >Clicked on `About us`, huh? Welcome!</label>
                    </Row>
                    <Row>
                        <label htmlFor="aboutUs"
                               className="text"
                               id="aboutUsAdd"
                        >Below a bunch of info about us and the project is tossed right at you. Sit tight and
                            enjoy!</label>
                    </Row>
                    <Row id="text">
                        <label htmlFor="aboutUs"
                               className="text"
                               id="aboutUsTitle"
                        >What does the application do?</label>
                    </Row>
                    <Row>
                        <label htmlFor="aboutUs"
                               id="text">
                            <p className="inline"
                               id="presentation">
                                YouTube Activity Manager is a web application that integrates with Google, YouTube and
                                AWS S3 APIs to present you with your Youtube activity. This includes the overall
                                information on channels that you are subscribed to and all videos that you happen to
                                like or dislike. The application is also able to show you some statistics on how much
                                you binge-watched particular categories of videos. Finally, here we present the inner
                                beauty of the application, hope you like it.

                                <Image id="schema" src={require("../resources/aws.jpg")}/>

                                Don't get us wrong, but we also collect some data on you behind your back and store them
                                on AWS S3 for selling purposes (aiming for personalized add providers). Relax, nothing
                                sensitive, we fear RODO too much. In case you want to make sure on your own what kind of
                                data we store, go see for yourself to hidden `/AWS` tab.
                                <p/>
                                Not feeling like registering today but still want to admire our work? Don't worry, here
                                is<Nav.Link id="RouterNavLink"
                                            className="d-inline-block"
                                            style={{color: 'grey'}}
                                            href="login: alpaca.lover@gmail.com password: AlpacaLover">login/password</Nav.Link>of
                                a user that loves alpacas / birds / raccoons and for some reason cars.
                            </p>
                        </label>
                    </Row>

                    <Row id="text">
                        <label htmlFor="aboutUs"
                               className="text"
                               id="aboutUsTitle"
                        >Meet the team!</label>
                    </Row>
                    <Row>
                        <Col id="left">
                            <Row>
                                <Image src={require("../resources/alpaca.jpg")} roundedCircle/>
                            </Row>
                            <Row id="labeling">
                                <label className="m-auto pt-2">Application</label>
                            </Row>
                        </Col>
                        <Col id="right">
                            <Row id="right">
                                <label htmlFor="aboutUs"
                                       id="text">
                                    <p className="inline"><b>Title:</b> YouTube Activity Manager </p>
                                    <p className="inline"><b>Target:</b> web browsers only (for now) </p>
                                    <p className="inline"><b>Request:</b> Be gentle to me, please. I run on a free tier
                                        AWS engine. I cannot withstand fame.</p>
                                    <p className="inline"><b>Technologies used:</b></p>
                                    <p className="inline" id="tab"><b><i>backend:</i></b> Java 14, Spring Boot, log4j2,
                                        REST, JWT,
                                        JPA/Hibernate,
                                        PostgreSQL, Liquibase, Docker, JUnit5, Mockito </p>
                                    <p className="inline" id="tab"><b><i>frontend:</i></b> React.js, Axios, Bootstrap
                                    </p>
                                    <p className="inline" id="tab"><b><i>cloud:</i></b> AWS S3, AWS EC2, AWS ECR </p>
                                </label>
                                <Navbar className="text-justify align-items-start p-0">
                                    <label className="m-auto"><b>Code and documentation: </b> </label>
                                    <Nav id="Router">
                                        <Nav.Item>
                                            <Nav.Link id="RouterNavLink"
                                                      href="https://github.com/jlisok/youtube_activity_manager_frontend">frontend</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item id="RouterNavItem">
                                            <Nav.Link id="RouterNavLink"
                                                      href="https://github.com/jlisok/youtube_activity_manager">backend</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col id="left">
                            <Row>
                                <Image src={require("../resources/JLisok.jpg")} roundedCircle/>
                            </Row>
                            <Row id="labeling">
                                <label className="m-auto pt-2">Justyna</label>
                            </Row>
                        </Col>
                        <Col id="right">
                            <Row id="right">
                                <label htmlFor="aboutUs"
                                       id="text">
                                    <p className="inline"><b>Role:</b> Designed, developed and deployed YouTube Activity
                                        Manager </p>
                                    <p className="inline"><b>Experience:</b> Apprentice Java Developer, Academic
                                        Researcher, Software Tester </p>
                                    <p className="inline"><b>Position I'm interested in:</b> Junior Java Developer </p>
                                    <p className="inline"><b>Request:</b> Like my code on GitHub? Endorse me on LinkedIn, please </p>
                                    <p className="inline"><b>Current address: </b> Warsaw, Poland </p>
                                </label>
                                <Navbar className="text-justify align-items-start p-0">
                                    <label className="m-auto"><b>Where to find me: </b> </label>
                                    <Nav id="Router">
                                        <Nav.Item>
                                            <Nav.Link id="RouterNavLink"
                                                      href="mailTo:justyna.lisok@gmail.com">Email</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link id="RouterNavLink"
                                                      href="https://www.linkedin.com/in/justyna-lisok/">LinkedIn</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item id="RouterNavItem">
                                            <Nav.Link id="RouterNavLink"
                                                      href="https://github.com/jlisok/">GitHub</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item id="RouterNavItem">
                                            <Nav.Link id="RouterNavLink"
                                                      href="https://www.researchgate.net/profile/Justyna_Lisok">ResearchGate</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col id="left">
                            <Row>
                                <Image src={require("../resources/PBurcon.jpg")} roundedCircle/>
                            </Row>
                            <Row id="labeling">
                                <label className="m-auto pt-2">Przemek</label>
                            </Row>
                        </Col>
                        <Col id="right">
                            <Row id="right">
                                <label htmlFor="aboutUs"
                                       id="text">
                                    <p className="inline"><b>Role:</b> Mentored, supervised the development and reviewed
                                        the code of YouTube
                                        Activity Manager </p>
                                    <p className="inline"><b>Experience:</b> Senior Java / Scala Developer </p>
                                    <p className="inline"><b>Current occupation:</b> Senior Scala Developer, Tutor </p>
                                    <p className="inline"><b>Current address: </b> Warsaw, Poland </p>
                                </label>
                                <Navbar className="text-justify align-items-start p-0">
                                    <label className="m-auto"><b>Where to find me: </b> </label>
                                    <Nav id="Router">
                                        <Nav.Item>
                                            <Nav.Link id="RouterNavLink"
                                                      href="mailTo:ardmoha@gmail.com">Email</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link id="RouterNavLink"
                                                      href="https://www.linkedin.com/in/przemyslaw-burcon/">LinkedIn</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar>
                            </Row>
                        </Col>
                    </Row>
                    <Row id="text">
                        <Navbar id="footnote" className="text-justify align-items-start p-0">
                            <label id="inline">We may have borrowed some art from the internet. Here are
                                credentials:

                                <Nav.Link id="RouterNavLink"
                                          className="d-inline-block"
                                          style={{color: 'grey'}}
                                          href="https://media1.giphy.com/media/9DrtQzeZcZm5gAwdM0/source.gif">hopping
                                    alpaca</Nav.Link>

                                <Nav.Link id="RouterNavLink"
                                          className="d-inline-block"
                                          style={{color: 'grey'}}
                                          href="https://cdn.dribbble.com/users/1342631/screenshots/4576524/alpaca_animated_dribbble.gif">chewing
                                    alpaca</Nav.Link>

                                <Nav.Link id="RouterNavLink"
                                          className="d-inline-block"
                                          style={{color: 'grey'}}
                                          href="https://slimages.macysassets.com/">black-white alpaca</Nav.Link>

                                <Nav.Link id="RouterNavLink"
                                          className="d-inline-block"
                                          style={{color: 'grey'}}
                                          href="https://image.flaticon.com/icons/svg/295/295128.svg">login
                                    icon</Nav.Link>

                                <Nav.Link id="RouterNavLink"
                                          className="d-inline-block"
                                          style={{color: 'grey'}}
                                          href="http://www.icls.com.my/files/editor_files/How%20to%20apply/register.png">register
                                    icon</Nav.Link>
                            </label>
                        </Navbar>
                    </Row>
                </Container>
            </Styles>
        );
    }
}


const Styles = styled.div`

.container {
    text-align: center;
}

#aboutUsAdd.text {
    margin: auto;
    margin-bottom: 20px;
    font-size: 20px;
}


#aboutUsTitle.text {
    margin: auto;
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 30px;
}


#text.row {
    width: 100%;
    height: auto;
    border-style: none none solid none;
    border-width: 1px;
    line-height: 40px;
 }
 
 .inline {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;
    text-align: justify;
 }
 
 #presentation.inline { 
    line-height: 30px; 
 }
 
 #tab.inline { 
    margin-left: 20px; 
 }
 
 .row {
    width: 100%;
    line-height: 20px;
    align-content: center;
    margin-top: 20px;
    margin-bottom: 5px;
 }
 
 #right.row {
    margin-top: 10px;
    margin-bottom: 22px;
 }
 
 #labeling.row {
    height: 10px;
    margin-top: 5px;
    margin-bottom: 25px;
 }
 
 #left.col {
    margin: auto;
    width: auto;
    justify-content: right;
}

#right.col {
    margin: auto;
    min-width: 70%;
    justify-content: left;
}

img {
    margin: auto;    
    display: block;
    width: 150px;
}

#schema {
    margin: auto;
    margin-top: 8px;
    margin-bottom: 8px;
    display: block;
    width: 98%;
}

#footnote {
    font-size: 14px;
}

`;

export default About;

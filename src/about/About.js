import React, {Component} from 'react';
import {Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import styled from "styled-components";

class About extends Component {
    render() {
        return (
            <Styles>
                <Container>
                    <Row className="topRow">
                        <Image
                            src="https://cdn.dribbble.com/users/1342631/screenshots/4576524/alpaca_animated_dribbble.gif"
                            roundedCircle width="300"/>
                    </Row>

                    <Row id="text">
                        <label className="text" id="aboutUsTitle">Clicked on `About`, huh? Welcome!</label>
                    </Row>
                    <Row>
                        <p className="inline font-weight-bold">Hi! I'm Justyna and I'm an aspiring Java developer!</p>
                        <p className="inline">This is an application that I have whipped up as a showcase of my
                            programming skills, using <span className="font-weight-bold">Java with Spring+Hibernate, React.js and AWS</span>.
                            Scroll down to see a more detailed tech breakdown, or check out the GitHub links.</p>
                        <p className="inline">You can use this app to view your favourite YouTube videos and some
                            associated stats. We also upload anonymized portions of this data to the cloud, to simulate
                            data gathering for BigData processing, but we don't actually process it any further, so you
                            don't have to worry about your privacy.</p>
                        <p className="inline">You can <span className="font-weight-bold">register an account</span> via
                            "Sign up with Google" button or the registration form, or even
                            quickly <span className="font-weight-bold">login as a demo user</span> if you don't trust us
                            or don't have a YouTube account.</p>
                        <p className="inline"><a href="/">Click here to go to the home page. Have fun and stay away from
                            the bugs!</a>
                        </p>
                    </Row>


                    <Row id="text">
                        <label
                            className="text"
                            id="aboutUsLinks"
                        >Useful links</label>
                    </Row>
                    <Row>
                        <a href="https://github.com/jlisok/youtube_activity_manager" target="_blank"
                           rel="noopener noreferrer">
                            <img className="icon" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="GitHub logo"/>
                            GitHub: YouTube Activity Manager - Backend
                        </a>
                    </Row>
                    <Row>
                        <a href="https://github.com/jlisok/youtube_activity_manager_frontend" target="_blank"
                           rel="noopener noreferrer">
                            <img className="icon" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="GitHub logo"/>
                            GitHub: YouTube Activity Manager - Frontend
                        </a>
                    </Row>
                    <Row>
                        <a href="https://github.com/jlisok/youtube_activity_manager_deployment" target="_blank"
                           rel="noopener noreferrer">
                            <img className="icon" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="GitHub logo"/>
                            GitHub: YouTube Activity Manager - Deployment
                        </a>
                    </Row>
                    <Row>
                        <a href="https://www.linkedin.com/in/justyna-lisok" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="LinkedIn logo"/>
                            LinkedIn: My Profile!
                        </a>
                    </Row>
                    <Row>
                        <a href="https://www.researchgate.net/profile/Justyna_Lisok" target="_blank"
                           rel="noopener noreferrer">
                            <img className="icon" src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1470150968/halqcskldv3ge9nkpjsq.png" alt="ResearchGate logo"/>
                            ResearchGate: My academic profile
                        </a>
                    </Row>

                    <Row id="text">
                        <label
                            className="text"
                            id="aboutUsTitle"
                        >What does the application do? # TODO app workflow</label>
                    </Row>
                    <Row>
                        <label
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
                        <label
                            className="text"
                            id="aboutUsTitle"
                        >How does it run on production?</label>
                    </Row>
                    <Row>
                        <Image id="schema" src={require("../resources/aws.jpg")}/>
                    </Row>

                    <Row>
                        <p className="inline">
                            The application code lives in three <span
                            className="font-weight-bold">GitHub</span> projects: <a
                            href="https://github.com/jlisok/youtube_activity_manager" target="_blank"
                            rel="noopener noreferrer">Backend</a>, <a
                            href="https://github.com/jlisok/youtube_activity_manager_frontend" target="_blank"
                            rel="noopener noreferrer">Frontend</a>, <a
                            href="https://github.com/jlisok/youtube_activity_manager_deployment" target="_blank"
                            rel="noopener noreferrer">Deployment</a>
                            .
                        </p>

                        <p className="inline">
                            <a href="https://github.com/jlisok/youtube_activity_manager" target="_blank"
                               rel="noopener noreferrer">Backend</a> and <a
                            href="https://github.com/jlisok/youtube_activity_manager_frontend" target="_blank"
                            rel="noopener noreferrer">Frontend</a> projects contain scripts that automatically,
                            via <span className="font-weight-bold">GitHub CI</span> jobs, build
                            <span className="font-weight-bold"> Docker</span> images from the master branch, and upload
                            them to the <span className="font-weight-bold">ECR</span>.
                        </p>

                        <p className="inline">
                            The <a href="https://github.com/jlisok/youtube_activity_manager" target="_blank"
                                   rel="noopener noreferrer">Backend</a> container image is built based on
                            production-optimised Spring Boot <span className="font-weight-bold">Paketo Buildpack</span>.
                        </p>

                        <p className="inline">
                            The <a
                            href="https://github.com/jlisok/youtube_activity_manager_frontend" target="_blank"
                            rel="noopener noreferrer">Frontend</a> container contains a <span
                            className="font-weight-bold">Nginx</span> deployment serving static, production-optimized
                            files built by <span className="font-weight-bold">NPM</span>.
                        </p>

                        <p className="inline">
                            The <a href="https://github.com/jlisok/youtube_activity_manager_deployment"
                                   target="_blank" rel="noopener noreferrer">Deployment</a> project contains <span
                            className="font-weight-bold">GitHub CI</span> jobs that start the above images on the target
                            <span className="font-weight-bold"> EC2</span> machine, using <span
                            className="font-weight-bold">docker-compose</span>. We have to host
                            both services on a single machine in order not to exceed the AWS Free Tier resource quotas.
                        </p>

                        <p className="inline">The backend service uses <span className="font-weight-bold">S3 and RDS (PostgreSQL)</span> to
                            store application data.
                        </p>

                        <p className="inline">
                            The <span className="font-weight-bold"> EC2</span> instance is exposed via two <span
                            className="font-weight-bold">Target Groups</span>, one for API requests, the other for
                            loading static frontend assets.
                        </p>

                        <p className="inline">
                            The <span className="font-weight-bold">ELB Application Load Balancer</span> routes incoming
                            requests to one of the above <span className="font-weight-bold">Target Groups</span> based
                            on their paths.
                        </p>

                        <p className="inline">
                            The <span className="font-weight-bold">ELB Application Load Balancer</span> also handles
                            HTTPS
                            termination, by means of a <span className="font-weight-bold">SSL</span> certificate managed
                            by <span className="font-weight-bold">AWS Certificate Manager</span>. All network traffic
                            inside the secure AWS network is unencrypted. ELB enforces HTTPS by redirecting all
                            incoming HTTP traffic to HTTPS on port 443.
                        </p>

                        <p className="inline">
                            <span className="font-weight-bold">DNS</span> mapping of the <a href="https://jlisok.pl"
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer">jlisok.pl</a> URL
                            to the <span
                            className="font-weight-bold">ELB</span> instance is handled by <span
                            className="font-weight-bold">Route53</span>.
                        </p>

                        <p className="inline">
                            The <span className="font-weight-bold">React.js</span> "almost single-page" web application
                            is served under the <a href="https://jlisok.pl" target="_blank"
                                                   rel="noopener noreferrer">jlisok.pl</a> URL by the
                            youtube_activity_manager_frontend container running in the EC2 instance.
                        </p>

                        <p className="inline">
                            All <span className="font-weight-bold">REST</span> API requests are handled by the
                            youtube_activity_manager container running in the EC2 instance.
                        </p>
                    </Row>

                    <Row id="text">
                        <label
                            className="text"
                            id="aboutUsTitle"
                        >Meet the team!</label>
                    </Row>
                    <Row>
                        <Col id="left">
                            <Row>
                                <Image className="portrait" src={require("../resources/alpaca.jpg")} roundedCircle/>
                            </Row>
                            <Row id="labeling">
                                <label className="m-auto pt-2">"The Application"</label>
                            </Row>
                        </Col>
                        <Col id="right">
                            <Row id="right">
                                <label
                                    id="text">
                                    <p className="inline"><b>Title:</b> YouTube Activity Manager </p>
                                    <p className="inline"><b>Target:</b> Web browsers only (for now) </p>
                                    <p className="inline"><b>Request:</b> Be gentle to me, please. I run on free tier
                                        AWS resources. I cannot withstand fame</p>
                                    <p className="inline"><b>Technologies used:</b></p>
                                    <p className="inline" id="tab"><b><i>backend:</i></b> Java 14, Spring Boot, log4j2,
                                        REST, JWT,
                                        JPA/Hibernate,
                                        PostgreSQL, Liquibase, Docker, JUnit5, Mockito </p>
                                    <p className="inline" id="tab"><b><i>frontend:</i></b> React.js, Axios, Bootstrap
                                    </p>
                                    <p className="inline" id="tab"><b><i>cloud:</i></b> AWS EC2, ECR, ELB, RDS, S3,
                                        Route53</p>
                                    <p className="inline" id="tab"><b><i>integrations:</i></b> Google OAuth2, YouTube
                                        Data API</p>
                                </label>
                                <Navbar className="text-justify align-items-start p-0">
                                    <label className="m-auto"><b>Code and documentation: </b> </label>
                                    <Nav id="Router">
                                        <Nav.Item id="RouterNavItem">
                                            <Nav.Link id="RouterNavLink"
                                                      href="https://github.com/jlisok/youtube_activity_manager">backend</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link id="RouterNavLink"
                                                      href="https://github.com/jlisok/youtube_activity_manager_frontend">frontend</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item id="RouterNavItem">
                                            <Nav.Link id="RouterNavLink"
                                                      href="https://github.com/jlisok/youtube_activity_manager_deployment">deployment</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col id="left">
                            <Row>
                                <Image className="portrait" src={require("../resources/JLisok.jpg")} roundedCircle/>
                            </Row>
                            <Row id="labeling">
                                <label className="m-auto pt-2">Justyna</label>
                            </Row>
                        </Col>
                        <Col id="right">
                            <Row id="right">
                                <label
                                    id="text">
                                    <p className="inline"><b>Role:</b> Designed, developed and deployed YouTube Activity
                                        Manager </p>
                                    <p className="inline"><b>Experience:</b> Apprentice Java Developer, Academic
                                        Researcher, Software Tester </p>
                                    <p className="inline"><b>Position I'm interested in:</b> Junior Java Developer </p>
                                    <p className="inline"><b>Request:</b> Like my code on GitHub? Endorse me on
                                        LinkedIn, please </p>
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
                                <Image className="portrait" src={require("../resources/PBurcon.jpg")} roundedCircle/>
                            </Row>
                            <Row id="labeling">
                                <label className="m-auto pt-2">Przemek</label>
                            </Row>
                        </Col>
                        <Col id="right">
                            <Row id="right">
                                <label
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

    label.text {
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
        margin-bottom: 50px;
    }

    .inline {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 16px;
        text-align: justify;
        line-height: 25px;
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

    img.icon {
        margin-right: 10px;
        width: 32px
    }

    img.portrait {
        margin: auto;
        display: block;
        width: 128px;
    }

    .topRow {
        margin-top: 50px;
        align-items: center;
        justify-content: center;
    }

`;

export default About;

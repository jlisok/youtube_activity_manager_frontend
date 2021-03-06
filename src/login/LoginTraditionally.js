import React, {Component} from 'react';
import axios from "axios";
import {Container, Image, Row} from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import AuthorizeWithGoogle from "./AuthorizeWithGoogle";
import {setDidBlur} from "../utils/setDidBlur";
import {countErrors} from "../utils/countErrors";
import {handleStylesChangeOnValidation} from "../utils/handleStylesChangeOnValidation";
import {withRouter} from "react-router-dom";
import {UserHttpResponse} from "../constants/UserHttpResponse";
import {handleErrors} from "../axios/handleErrors";
import {RestApiUrl} from "../constants/RestApiUrl";
import {Labels} from "../constants/Labels";
import {Time} from "../constants/Time";
import {JwtDecodingAndAuthentication} from "../axios/JwtDecodingAndAuthentication";
import {setCredentialsForUnauthenticatedUser} from "../authentication/setCredentialsForUnauthenticatedUser";
import {DemoUserLogin} from "../authentication/DemoUserLogin";
import {environmentConfig} from "../environmentConfig";


class LoginTraditionally extends Component {

    state = {
        email: '',
        password: '',

        errors: {
            email: '',
            password: '',
            submitButton: '',
            badRequest: ''
        },

        didBlur: {
            email: false,
            password: false
        },
    };


    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]: value});
    };


    handleValidation = () => {
        let errors = this.state.errors;
        let state = this.state;
        errors.email = !state.email ? Labels.EMPTY_EMAIL : "";
        errors.password = !state.password ? Labels.EMPTY_PASSWORD : "";
        return errors;
    };


    handleClick = e => {
        e.preventDefault();
        const didBlur = setDidBlur(this.state.didBlur);
        const errors = this.handleValidation(this.state);
        const nElem = countErrors(errors);
        if (nElem > 0) {
            errors.submitButton = Labels.FAILED_SUBMIT;
            this.setState({errors, didBlur})
        } else {
            errors.submitButton = "";
            this.handleAuthentication(errors, didBlur)
        }
    };


    handleAuthentication = (errors, didBlur) => {
        axios
            .post(RestApiUrl.TRADITIONAL_LOGIN, this.state)
            .then(response => {
                if (response.data !== null) {
                    JwtDecodingAndAuthentication(response.data);
                } else {
                    setCredentialsForUnauthenticatedUser();
                    errors.badRequest = UserHttpResponse.AUTHENTICATION_FAILED;
                }
            })
            .catch(error => {
                errors.badRequest = handleErrors(error, UserHttpResponse.AUTHENTICATION_FAILED, UserHttpResponse.UNKNOWN_EVENT);
            })
            .finally(() => {
                    this.handleRedirectionToDashboard(errors, didBlur);
                }
            )
    };


    handleRedirectionToDashboard = (errors, didBlur) => {
        if (errors.badRequest.length > 0) {
            this.setState({errors, didBlur});
            setTimeout(function () {
                errors.badRequest = "";
                this.setState({errors});
            }.bind(this), Time.TIMEOUT);
        } else {
            this.props.history.push("/dashboard");
        }
    };


    handleRedirectionToRegistration = e => {
        e.preventDefault();
        this.props.history.push("/signup")
    };


    render() {
        const {errors, didBlur} = this.state;
        return (
            <Styles>
                <Container>
                    <form noValidate>
                        <Row id="vertical-space">
                            <AuthorizeWithGoogle
                                endPointUrl={RestApiUrl.GOOGLE_LOGIN}
                                googleButtonText={"Sign in with Google"}
                                textJustify={"center"}
                                buttonJustify={"justify-content-center"}
                            />
                        </Row>
                        <div className="text-danger text-center p-3">
                            {errors.badRequest}
                        </div>
                        <Row id="vertical-space">
                            <Image src={environmentConfig.STATIC_RESOURCE_URL + "/login.svg"} width="100"/>
                        </Row>

                        <Row className="col-md-auto mb-1">
                            <label htmlFor="inputEmail">Email</label>
                            <input
                                className={handleStylesChangeOnValidation(errors.email, didBlur.email)}
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                required
                            />
                            <div className="invalid-feedback">
                                {errors.email}
                            </div>
                        </Row>

                        <Row className="col-md-auto mb-1">
                            <label htmlFor="inputPassword">Password</label>
                            <input
                                className={handleStylesChangeOnValidation(errors.password, didBlur.password)}
                                name={"password"}
                                type="password"
                                id="password"
                                placeholder="Enter the password"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                required
                            />
                            <div className="invalid-feedback">
                                {errors.password}
                            </div>
                        </Row>
                        <Row>
                            <div className="small text-danger text-left mt-4">
                                {errors.submitButton}
                            </div>
                            <button
                                id="login"
                                type="submit"
                                className="btn btn-outline-dark"
                                onClick={this.handleClick}
                            >Login
                            </button>
                        </Row>

                        <Row id="signUpHelp">
                            <small id="signUpHelp" className="form-text text-info">
                                Not registered?
                            </small>
                        </Row>
                        <Row>
                            <button
                                id="signUp"
                                type="submit"
                                className="btn btn-outline-info"
                                onClick={this.handleRedirectionToRegistration}
                            >Sign up
                            </button>
                        </Row>
                        <DemoUserLogin
                            helperText={`Don't trust us with your data? No YouTube account? \n Check out the demo user!`}
                        />
                    </form>
                </Container>
            </Styles>
        );
    }
}


const Styles = styled.div`
 .row {
    width: 100%;
    margin: auto;
    text-align: left;
    justify-content: left;
 }
 
 #signUpHelp.row {
     justify-content: center;
 }
 
 #vertical-space.row {
    justify-content: center;
    margin-top: 40px;
 }
 
 .btn {
    display: block;
    margin: auto;
 }
   
 #login.btn  {
    margin-top: 20px;
    margin-bottom: 50px;
 }
 
 #signUp.btn  {
    margin-top: 5px;
    margin-bottom: 20px;
 }
 
 .form-text-center {
   text-align: center;
 }
 
`;

export default withRouter(LoginTraditionally);

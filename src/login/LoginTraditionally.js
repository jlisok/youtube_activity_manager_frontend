import React, {Component} from 'react';
import axios from "axios";
import {Container, Image, Row} from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import LoginWithGoogle from "./LoginWithGoogle";
import {setDidBlur} from "../utils/setDidBlur";
import {countErrors} from "../utils/countErrors";
import {handleStylesChangeOnValidation} from "../utils/handleStylesChangeOnValidation";
import {withRouter} from "react-router-dom";


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

    }

    componentDidMount() {
        localStorage.clear();
    }


    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    handleValidation = () => {
        let errors = this.state.errors;
        let state = this.state;
        errors.email = !state.email ? "Email cannot be empty. Please enter correct email address." : "";
        errors.password = !state.password ? "Password cannot be empty. Please enter correct password." : "";
        return errors;
    }


    handleClick = e => {
        e.preventDefault();
        const didBlur = setDidBlur(this.state.didBlur);
        const errors = this.handleValidation(this.state);
        const nElem = countErrors(errors);

        if (nElem > 0) {
            errors.submitButton = "Some of required data are not filled. Please enter all fields before proceeding.";
            this.setState({errors, didBlur})
        } else {
            errors.submitButton = "";
            this.handleAuthentication(errors, didBlur)
        }
    }


    handleAuthentication = (errors, didBlur) => {
        const url = "http://localhost:8080/api/v1/login";
        axios
            .post(url, this.state)
            .then(response => {
                const token = response.data;
                if (token !== null) {
                    localStorage.setItem("token", response.data);
                    localStorage.setItem("authenticated", "true");
                    localStorage.setItem("authorized", "false"); // TODO: authorization granting from backend
                } else {
                    errors.badRequest = "Ops, something went wrong with your authentication, try again."
                }
            })
            .catch(error => {
                let responseCode;
                if (error.response.data.hasOwnProperty("responseCode")) {
                    responseCode = error.response.data.responseCode;
                }
                if (responseCode === "LOGIN_FAILED_PARAMETERS_DO_NOT_MATCH_DATABASE") {
                    errors.badRequest = "Login or password is incorrect. Please, try again."
                } else {
                    errors.badRequest = "Ops, something went wrong with your authentication, try again."
                }
            })
            .finally(() => {
                    this.handleRedirectionToDashboard(errors, didBlur);
                }
            )
    }


    handleRedirectionToDashboard = (errors, didBlur) => {
        if (errors.badRequest.length > 0) {
            this.setState({errors, didBlur});
            return;
        }
        if (localStorage.getItem("authenticated") === "true") {
            this.props.history.push("/dashboard");
        } else {
            errors.badRequest = "Ops, something went wrong with your authentication, try again.";
            this.setState({errors, didBlur});
        }
    }


    handleRedirectionToRegistration = e => {
        e.preventDefault();
        this.props.history.push("/signup")
    }


    render() {
        const {errors, didBlur} = this.state;
        return (
            <Styles>
                <Container>
                    <form noValidate>

                        <div className="text-danger text-center p-3">
                            {errors.badRequest}
                        </div>

                        <Row className="justify-content-center p-5">
                            <LoginWithGoogle/>
                        </Row>

                        <Row className="justify-content-center">
                            <Image src="https://image.flaticon.com/icons/svg/295/295128.svg" width="100"/>
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
                                required
                            />
                            <div className="invalid-feedback">
                                {errors.password}
                            </div>
                        </Row>

                        <div className="small text-danger text-center">
                            {errors.submitButton}
                        </div>
                        <button
                            id="login"
                            type="submit"
                            className="btn btn-outline-dark flex-center"
                            //style={style.button}
                            onClick={this.handleClick}
                        >Login
                        </button>

                        <small id="signUpHelp" className="form-text text-info">
                            Not registered?
                        </small>
                        <button
                            id="signUp"
                            type="submit"
                            className="btn btn-outline-info justify-content-center"
                            //style={style.buttonSignUp}
                            onClick={this.handleRedirectionToRegistration}
                        >Sign up
                        </button>

                    </form>
                </Container>
            </Styles>
        );
    }
}


const Styles = styled.div`
 .row {
    width: 100%;
    text-align: left;
    justify-content: left;
 }
 
 #login.btn  {
    margin-top: 20px;
    margin-bottom: 50px;
 }
 
 #signUp.btn  {
    margin-top: 5px;
    margin-bottom: 20px;
 }
`;

export default withRouter(LoginTraditionally);

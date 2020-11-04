import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import styled from "styled-components";
import {setDidBlur} from "../utils/setDidBlur";
import {countErrors} from "../utils/countErrors";
import {handleStylesChangeOnValidation} from "../utils/handleStylesChangeOnValidation";
import FormTextHelper from "../utils/FormTextHelper";
import AuthorizeWithGoogle from "../login/AuthorizeWithGoogle";
import {withRouter} from "react-router-dom";
import {validateSignUpFields} from "./validateSignUpFields";
import {RestApiUrl} from "../constants/RestApiUrl";
import {Labels} from "../constants/Labels";
import {Time} from "../constants/Time";
import axios from "axios";
import {UserHttpResponse} from "../constants/UserHttpResponse";
import {handleErrors} from "../axios/handleErrors";
import {JwtDecodingAndAuthentication} from "../axios/JwtDecodingAndAuthentication";
import {setCredentialsForUnauthenticatedUser} from "../authentication/setCredentialsForUnauthenticatedUser";

class SignUpTraditionally extends Component {

    state = {
        email: '',
        password: '',
        repeatPassword: '',
        country: '',
        birthYear: '',
        gender: '',
        firstName: '',
        phonePrefix: undefined,
        phoneNumber: undefined,


        errors: {
            email: '',
            password: '',
            repeatPassword: '',
            country: '',
            birthYear: '',
            gender: '',
            submitButton: '',
            phoneNumber: '',
            phonePrefix: '',
            badRequest: ''
        },

        didBlur: {
            email: false,
            password: false,
            repeatPassword: false,
            country: false,
            birthYear: false,
            gender: false,
            phoneNumber: false,
            phonePrefix: false
        },

    }


    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        const state = this.state;
        state[name] = value;
        const errors = validateSignUpFields(state);
        this.setState({[name]: value, errors});
    }


    handleBlur = event => {
        event.preventDefault();
        const didBlur = this.state.didBlur;
        didBlur[event.target.name] = true;
        const errors = validateSignUpFields(this.state);
        this.setState({errors, didBlur})
    }


    handleClick = e => {
        e.preventDefault();
        const didBlur = setDidBlur(this.state.didBlur);
        const errors = validateSignUpFields(this.state);
        const nElem = countErrors(errors);

        if (nElem > 0) {
            errors.submitButton = Labels.FAILED_SUBMIT;
        } else {
            this.handleAuthentication(errors, didBlur);
        }
    }


    handleAuthentication = (errors, didBlur) => {
        axios
            .post(RestApiUrl.REGISTRATION, this.state)
            .then(response => {
                if (response.data !== null) {
                    JwtDecodingAndAuthentication(response.data);
                } else {
                    setCredentialsForUnauthenticatedUser();
                    errors.badRequest = UserHttpResponse.REGISTRATION_FAILED_UNEXPECTED_ERROR;
                }
            })
            .catch(error => {
                errors.badRequest = handleErrors(error, UserHttpResponse.REGISTRATION_FAILED_UNEXPECTED_ERROR, UserHttpResponse.UNKNOWN_EVENT);
            })
            .finally(() => {
                    this.handleRedirectionToDashboard(errors, didBlur);
                }
            )
    }

    /*handleDemoAuthentication = (errors, didBlur) => {
        axios
            .post(RestApiUrl.TRADITIONAL_LOGIN, {email: 'alpaca.lover@gmail.com', password: 'AlpacaLover'})
            .then(response => {
                if (response.data !== null) {
                    handleAuthentication(response.data, true, false);
                } else {
                    handleAuthentication(null, false, false);
                    errors.badRequest = UserHttpResponse.REGISTRATION_FAILED_UNEXPECTED_ERROR;
                }
            })
            .catch(error => {
                errors.badRequest = handleErrors(error, UserHttpResponse.REGISTRATION_FAILED_UNEXPECTED_ERROR, UserHttpResponse.UNKNOWN_EVENT);
            })
            .finally(() => {
                    this.handleRedirectionToDashboard(errors, didBlur);
                }
            )
    }*/

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
    }

    render() {
        const {errors, didBlur} = this.state;
        return (
            <Styles>
                <Container>
                    <form noValidate>
                        <Row id="google" className="justify-content-center">
                            <AuthorizeWithGoogle
                                endPointUrl={RestApiUrl.GOOGLE_LOGIN}
                            />
                        </Row>
                        <div className="text-danger text-center p-3">
                            {errors.badRequest}
                        </div>
                        <Row className="justify-content-center p-1">
                            <Image src="http://www.icls.com.my/files/editor_files/How%20to%20apply/register.png"
                                   width="100"/>
                        </Row>

                        <h2 className="text-center">Registration Form</h2>

                        <Row className="col-md-auto mb-1">
                            <label htmlFor="email">Email address</label>
                            <input
                                id="email"
                                className={handleStylesChangeOnValidation(errors.email, didBlur.email)}
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                required
                            />
                            <FormTextHelper
                                textToDisplay={errors.email}
                            />
                        </Row>

                        <Row className="col-md-auto mb-1">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                className={handleStylesChangeOnValidation(errors.password, didBlur.password)}
                                name="password"
                                type="password"
                                placeholder="Enter the password"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                required
                            />
                            <FormTextHelper
                                textToDisplay={errors.password}
                            />
                        </Row>

                        <Row className="col-md-auto mb-1">
                            <label htmlFor="repeatPassword">Repeat Password</label>
                            <input
                                id="repeatPassword"
                                className={handleStylesChangeOnValidation(errors.repeatPassword, didBlur.repeatPassword)}
                                name="repeatPassword"
                                type="password"
                                placeholder="Repeat the password"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                required
                            />
                            <FormTextHelper
                                textToDisplay={errors.repeatPassword}
                            />
                        </Row>


                        <Row className="col-md-auto mb-1">
                            <label htmlFor="country">Country</label>
                            <input
                                id="country"
                                className={handleStylesChangeOnValidation(errors.country, didBlur.country)}
                                name="country"
                                type="text"
                                placeholder="Enter your country"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                required
                            />
                            <FormTextHelper
                                textToDisplay={errors.country}
                            />
                        </Row>

                        <Row className="row justify-content-between">
                            <Col sm={4}>
                                <label htmlFor="birthYear">Year of birth</label>
                                <input
                                    id="birthYear"
                                    className={handleStylesChangeOnValidation(errors.birthYear, didBlur.birthYear)}
                                    name="birthYear"
                                    type="number"
                                    placeholder="Enter year"
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    required
                                />
                                <FormTextHelper
                                    textToDisplay={errors.birthYear}
                                />
                            </Col>
                            <Col sm={8}>
                                <label htmlFor="gender">Gender</label>
                                <select
                                    id="gender"
                                    className={handleStylesChangeOnValidation(errors.gender, didBlur.gender)}
                                    name="gender"
                                    onClick={this.handleChange}
                                    onBlur={this.handleBlur}
                                    onKeyDown={this.handleBlur}
                                    onKeyUp={this.handleBlur}
                                    required
                                >
                                    <option defaultValue="" hidden>Open select menu</option>
                                    <option value="MALE">male</option>
                                    <option value="FEMALE">female</option>
                                    <option value="NOT_APPLICABLE">not applicable</option>
                                </select>
                                <FormTextHelper
                                    textToDisplay={errors.gender}
                                />
                            </Col>
                        </Row>


                        <Row className="row justify-content-between">
                            <Col sm={4}>
                                <label htmlFor="phonePrefix">Prefix</label>
                                <input
                                    id="phonePrefix"
                                    className={handleStylesChangeOnValidation(errors.phonePrefix, didBlur.phonePrefix)}
                                    name="phonePrefix"
                                    type="number"
                                    placeholder="e.g. 0048"
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                />
                                <FormTextHelper
                                    textToDisplay={errors.phonePrefix}
                                />
                            </Col>
                            <Col sm={8}>
                                <label htmlFor="phoneNumber">Phone number</label>
                                <input
                                    id="phoneNumber"
                                    className={handleStylesChangeOnValidation(errors.phoneNumber, didBlur.phoneNumber)}
                                    name="phoneNumber"
                                    type="number"
                                    placeholder="Enter your phone number"
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                />
                                <FormTextHelper
                                    textToDisplay={errors.phoneNumber}
                                />
                            </Col>
                        </Row>

                        <Row className="col-md-auto mb-1">
                            <label htmlFor="firstName">Fist Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                className="form-control"
                                placeholder="Enter your first name"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                            />
                        </Row>

                        <div className="small text-danger text-left mt-4">
                            {errors.submitButton}
                        </div>
                        <button
                            id="submitButton"
                            type="submit"
                            className="btn btn-dark"
                            onClick={this.handleClick}
                        >Submit
                        </button>

                        {/*<Row id="demoHelp">
                            <small id="demoHelp" className="form-text text-danger">
                                Too many fields to fill? Check out the demo user!
                            </small>
                        </Row>
                        <Row>
                            <button
                                id="demo"
                                type="submit"
                                className="btn btn-outline-danger"
                                onClick={this.handleDemoAuthentication}
                            >Login as demo user
                            </button>
                        </Row>*/}
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
    margin: auto;
 }
 
 .col {
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
}

.btn {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:20px;
    margin-bottom: 20px;
 }
 
 #google.row {
    margin-top: 30px;
 }
 
 #demoHelp.row {
     justify-content: center;
 }
 #demo.btn  {
    margin-top: 5px;
    margin-bottom: 20px;
 }
 
`;

export default withRouter(SignUpTraditionally);

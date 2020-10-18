import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import {RestApiUrl} from "../constants/RestApiUrl";
import {UserHttpResponse} from "../constants/UserHttpResponse";
import {handleErrors} from "../utils/handleErrors";
import {StatsTable} from "./StatsTable";

class Stats extends Component {

    state = {
        selectVariable: "",
        groupingVariable: "",
        exception: "",
        stats: {
            byCreator: "",
            byCategory: "",
        },
    }

    constructor(props) {
        super(props);
        if (localStorage.getItem("authenticated") === "false") {
            this.props.history.push("/")
        }
    }

    handleChange = event => {
        event.preventDefault();
        const state = this.state;
        const {name, value} = event.target;
        state[name] = value;
        if (state.groupingVariable.length > 0 && state.stats[state.groupingVariable].length === 0) {
            this.handleHttpRequest(state);
        } else {
            this.setState({state});
        }
    };


    handleHttpRequest = (state) => {
        const ApiUri = this.retrieveApiEndPointUri(state.groupingVariable);
        axios
            .get(ApiUri, {
                headers: {
                    Authorization: "Bearer: " + localStorage.getItem("token"),
                }
            })
            .then(response => {
                if (response.data !== null) {
                    const listName = state.groupingVariable;
                    state.stats[listName] = response.data;
                    this.setState({state});
                } else {
                    state["exception"] = UserHttpResponse.UNKNOWN_EVENT;
                }
            })
            .catch(error => {
                state["exception"] = handleErrors(error, UserHttpResponse.UNKNOWN_EVENT, UserHttpResponse.UNKNOWN_EVENT);
            })
            .finally(() => {
                    this.setState({state});
                }
            )
    }


    retrieveApiEndPointUri = (groupingVariable) => {
        return groupingVariable.includes("byCreator") ? RestApiUrl.STATS_BY_CREATOR : RestApiUrl.STATS_BY_CATEGORY;
    }


    render() {
        const {exception, selectVariable, groupingVariable} = this.state;
        return (
            <Styles>
                <Container>
                    <Row>
                        <p id="info" className="text-danger">
                            {exception}
                        </p>
                        <p className="text"
                        >Let's talk statistics</p>
                    </Row>
                    <Row>
                        <Col>
                            <p id="info" className="text"
                            >I want my:</p>
                        </Col>
                        <Col>
                            <p id="info" className="text"
                            >to be grouped by:</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <select
                                id="selectVariable"
                                className="form-control"
                                name="selectVariable"
                                onChange={this.handleChange}
                            >
                                <option value="" hidden>Open select menu</option>
                                <option value="numberVideos">number of videos</option>
                                <option value="averageTime">video's average time</option>
                                <option value="totalTime">total time</option>
                            </select>
                        </Col>
                        <Col>
                            <select
                                id="groupingVariable"
                                className="form-control"
                                name="groupingVariable"
                                onChange={this.handleChange}
                            >
                                <option value="" hidden>Open select menu</option>
                                <option value="byCreator">creator</option>
                                <option value="byCategory">category</option>
                            </select>
                        </Col>
                    </Row>

                    <Row>
                        {selectVariable.length > 0 && groupingVariable.length > 0 ?
                            <StatsTable
                                state={this.state}/> : ""}
                    </Row>

                </Container>
            </Styles>
        );
    }
}

const Styles = styled.div`
.row {
    width: 100%;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    line-height: 40px;
}
 
.text {
    font-weight: bold;
    font-size: 25px;
    margin-top: 25px;
}

#info.text {
    font-weight: normal;
    font-size: 18px;
    margin: auto;
}

.form-control {
    max-width: 450px;
    margin: auto;
    margin-bottom: 15px;
}
`;

export default Stats;
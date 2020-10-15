import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import {RestApiUrl} from "../constants/RestApiUrl";
import {UserHttpResponse} from "../constants/UserHttpResponse";
import {handleErrors} from "../utils/handleErrors";
import {YouTubeActivityTable} from "./YouTubeActivityTable";

class YouTubeActivity extends Component {

    state = {
        activityType: "",
        exception: "",
        youtube: {
            channels: "",
            like: "",
            dislike: "",
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
        if (value.length > 0 && state.youtube[value.toLowerCase()].length === 0) {
            this.handleHttpRequest(state);
        } else {
            this.setState({state});
        }
    };


    handleHttpRequest = (state) => {
        const ApiUri = this.retrieveApiEndPointUri(state.activityType);
        axios
            .get(ApiUri, {
                params: {rating: state.activityType},
                headers: {
                    Authorization: "Bearer: " + localStorage.getItem("token"),
                }
            })
            .then(response => {
                if (response.data !== null) {
                    const listName = state.activityType.toLowerCase();
                    state.youtube[listName] = response.data;
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


    retrieveApiEndPointUri = (stateValue) => {
        return stateValue.includes("channels") ? RestApiUrl.SUBSCRIBED_CHANNELS : RestApiUrl.VIDEOS;
    }


    render() {
        const {exception, activityType} = this.state;
        return (
            <Styles>
                <Container>
                    <Row>
                        <label id="info" className="text-danger">
                            {exception}
                        </label>
                        <label htmlFor="youtubeActivityList"
                               className="text"
                        >Show me my YouTube activity details</label>
                    </Row>

                    <Row>
                        <select
                            id="activityType"
                            className="form-control"
                            name="activityType"
                            onChange={this.handleChange}
                        >
                            <option value="" hidden>Open select menu</option>
                            <option value="channels">channels</option>
                            <option value="LIKE">liked videos</option>
                            <option value="DISLIKE">disliked videos</option>
                        </select>
                    </Row>
                    <Row>
                        {activityType.length > 0 ? <YouTubeActivityTable
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
    margin-top: 20px;
    margin-bottom: 5px;
 }

.text {
    width: 100%;
    height: auto;
    line-height: 40px;
    font-weight: bold;
    margin-top: 10px;
    font-size: 25px;
}

#info.text {
    line-height: 40px;
    font-weight: normal;
    font-size: 18px;
}

.form-control {
    max-width: 440px;
    margin-bottom: 15px;

}
`;

export default YouTubeActivity;
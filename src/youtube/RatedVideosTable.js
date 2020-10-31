import React from "react";
import {Table} from "react-bootstrap";
import {parseDuration} from "../utils/parseDuration";
import styled from "styled-components";

export const RatedVideosTable = (props) => {

    return (
        <Styles>
            <Table id="videos" bordered hover>
                <thead>
                <tr className="table-secondary">
                    <th id="record">No</th>
                    <th id="record">Video title</th>
                    <th id="record">Channel name</th>
                    <th id="record">Video category</th>
                    <th id="record">Duration</th>
                    <th id="record">Published at</th>
                </tr>
                </thead>
                <tbody>
                {props.state.arrays[props.state.activityType.toLowerCase()].map((video, index) =>
                    <tr key={index}>
                        <td id="record" className="text-center">{index + 1}</td>
                        <td id="record" className="text-left w-50">{video.title}</td>
                        <td id="record" className="text-left">{video.channelTitle}</td>
                        <td id="record" className="text-left">{video.videoCategory}</td>
                        <td id="record" className="text-center">{parseDuration(video.duration)}</td>
                        <td id="record" className="text-center">{video.publishedAt.substring(0, 10)}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Styles>
    )
};

const Styles = styled.div`
.table {
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    height: auto;
    border-style: solid none solid none;
    border-width: 5px;
    line-height: 20px;
    font-size: 17px;
 }
 
 #record {
    vertical-align: middle;
    border-style: solid solid solid solid;
    border-width: 1px;
    font-size: 15px;
 }
`;

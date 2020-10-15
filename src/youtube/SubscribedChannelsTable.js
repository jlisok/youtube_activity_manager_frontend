import {Table} from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import {addSpaces} from "../utils/addSpaces";

export const SubscribedChannelsTable = (props) => {

    return (
        <Styles>
            <Table id="channels" bordered hover>
                <thead>
                <tr className="table-secondary">
                    <th id="record">No</th>
                    <th id="record">Channel Name</th>
                    <th id="record">No. of views</th>
                    <th id="record">No. of subscribers</th>
                    <th id="record">No. of videos</th>
                    <th id="record">Active since</th>
                </tr>
                </thead>
                <tbody>
                {props.state.youtube[props.state.activityType.toLowerCase()].map((channel, index) =>
                    <tr key={index}>
                        <td id="record">{index + 1}</td>
                        <td id="record" className="text-left">{channel.title}</td>
                        <td id="record" className="text-right mr-3">{addSpaces(channel.viewNumber)}</td>
                        <td id="record" className="text-right mr-3">{addSpaces(channel.subscriberNumber)}</td>
                        <td id="record" className="text-right mr-3">{addSpaces(channel.videoNumber)}</td>
                        <td id="record" className="text-center">{channel.publishedAt.substring(0, 10)}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Styles>
    )
}
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

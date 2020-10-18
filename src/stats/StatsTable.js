import React from "react";
import {Table} from "react-bootstrap";
import styled from "styled-components";
import {SelectVariableColumnName} from "./SelectVariableColumnName";

export const StatsTable = (props) => {

    return (
        <Styles>
            <Table id="videos" bordered hover>
                <thead>
                <tr className="table-secondary">
                    <th id="record">No</th>
                    <th id="record">{SelectVariableColumnName(props.state)}
                    </th>
                    <th id="record">{
                        props.state.groupingVariable === "byCategory" ? "Video category" : "Channel creator"
                    }</th>
                </tr>
                </thead>
                <tbody>
                {props.state.stats[props.state.groupingVariable].map((statistics, index) =>
                    <tr key={index}>
                        <td id="record" className="text-center">{index + 1}</td>
                        <td id="record" className="text-center">{statistics[props.state.selectVariable]}</td>
                        <td id="record" className="text-left">{
                            props.state.groupingVariable === "byCreator" ? statistics["creatorName"] : statistics["categoryName"]
                        }</td>
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

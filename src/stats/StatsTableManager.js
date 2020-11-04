import React from "react";
import {Labels} from "../constants/Labels";
import {SynchronizationStatus} from "../axios/SynchronizationStatus";
import {StatsTableContent} from "./StatsTableContent";

export const StatsTableManager = (props) => {
    if (props.state.arrays.status === SynchronizationStatus.IN_PROGRESS) {
        return null;
    }
    if (props.state.arrays[props.state.groupingVariable].length === 0) {
        return <label id="info" className="text-dark">
            {Labels.EMPTY_YOUTUBE_LIST}
        </label>
    } else {
        return <StatsTableContent
            state={props.state}/>;
    }
};
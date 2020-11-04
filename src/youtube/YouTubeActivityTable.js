import {SubscribedChannelsTable} from "./SubscribedChannelsTable";
import {RatedVideosTable} from "./RatedVideosTable";
import React from "react";
import {Labels} from "../constants/Labels";
import {SynchronizationStatus} from "../axios/SynchronizationStatus";

export const YouTubeActivityTable = (props) => {
    if (props.state.arrays[props.state.activityType.toLowerCase()] === undefined || props.state.arrays.status === SynchronizationStatus.IN_PROGRESS) {
        return null;
    }
    if (props.state.arrays[props.state.activityType.toLowerCase()].length === 0) {
        return <label id="info" className="text-dark">
            {Labels.EMPTY_YOUTUBE_LIST}
        </label>
    } else {
        return props.state.activityType === "channels" ? <SubscribedChannelsTable state={props.state}/> :
            <RatedVideosTable state={props.state}/>;
    }
};
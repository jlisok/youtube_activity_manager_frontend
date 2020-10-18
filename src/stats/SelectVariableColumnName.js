import React from "react";

export let SelectVariableColumnName = (props) => {
    if (props.selectVariable === "numberVideos") {
        return "No of videos";
    } else if (props.selectVariable === "averageTime") {
        return "Mean video duration";
    } else {
        return "Total time spent watching";
    }
}
import {JsonGroupingVariableNames} from "./JsonGroupingVariableNames";
import {TableColumnNames} from "./TableColumnNames";

export let SelectVariableColumnName = (props) => {
    if (props.selectVariable === JsonGroupingVariableNames.JSON_NUMBER_VIDEOS) {
        return TableColumnNames.VIDEO_NUMBER;
    } else if (props.selectVariable === JsonGroupingVariableNames.JSON_AVERAGE_TIME) {
        return TableColumnNames.AVERAGE_TIME;
    } else {
        return TableColumnNames.TOTAL_TIME;
    }
}
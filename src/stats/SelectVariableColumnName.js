import {TableColumnNames} from "./TableColumnNames";
import {JsonSelectVariableNames} from "./JsonSelectVariableNames";

export let SelectVariableColumnName = (props) => {
    if (props.selectVariable === JsonSelectVariableNames.JSON_NUMBER_VIDEOS) {
        return TableColumnNames.VIDEO_NUMBER;
    } else if (props.selectVariable === JsonSelectVariableNames.JSON_AVERAGE_TIME) {
        return TableColumnNames.AVERAGE_TIME;
    } else {
        return TableColumnNames.TOTAL_TIME;
    }
}
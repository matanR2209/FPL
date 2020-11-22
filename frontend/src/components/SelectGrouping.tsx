import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {createStyles, InputLabel, Select, Theme} from "@material-ui/core";
import {GroupList} from "../types/Components";



interface IProps {
    classes: any;
    label: string;
    items: GroupList[];
    selectedValue:  string;
    onItemSelected: (selectedValue: string) => void;
}

const styles = (theme: Theme) => createStyles({
    root: {}
});


function SelectGrouping(props: IProps) {
    const {classes} = props;

    const renderOptions = () => {
        return props.items.map((group: GroupList) => {
                return <optgroup label={group.title}>
                    {group.items.map((item: string, index: number) => {
                        return <option key={index} value={item}>{item}</option>
                    })}
                </optgroup>
            }
        )
    }
    const handleChange = (selectedValue: any) => {
        props.onItemSelected(selectedValue.target.value);
    }

    return (
        <div className={classes.root}>
            <InputLabel htmlFor="grouped-native-select">{props.label}</InputLabel>
            <Select
                native
                onChange={handleChange}
                fullWidth={true}
                variant={"outlined"}>
                {renderOptions()}
            </Select>
        </div>
    );
}

export default withStyles(styles)(SelectGrouping);
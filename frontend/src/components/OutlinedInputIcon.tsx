import * as React from "react";
import {createStyles, InputAdornment, InputLabel, SvgIconProps, TextField, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

interface IProps {
    label: string;
    icon: React.ReactElement<SvgIconProps>;
    onSearchChange: (value: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inputContainer: {
        }
    }),
);


export default function OutlinedInputWithIcon(props: IProps){
    const classes = useStyles()

    const onChange = (e: any) => {
        props.onSearchChange(e.target.value)
    }
    return (
        <div className={classes.inputContainer}>
            <InputLabel htmlFor="grouped-native-select">{props.label}</InputLabel>
            <TextField
                onChange={onChange}
                fullWidth={true}
                variant={"outlined"}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position={"end"}>
                            {props.icon}
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
}
import {stores} from "../state";
import {createStyles, Paper, Theme, Dialog} from "@material-ui/core";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";


interface IProps {
    open: boolean;
    title: string;
    children: any;
    isFullWidth?: boolean
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            backgroundColor: theme.palette.primary.main,
            fontSize: 16,
            fontWeight: 600,
            padding: "1em 2em",
            color: "white"

},
        dialogBody: {
            padding: "2em"
        },
        fixedModal: {
            minHeight: "85vh",
            maxHeight: "85vh"
        }
    })
);


export default function FPLDialog(props: IProps){
    const classes = useStyles();
    const {open, title, children, isFullWidth} = props;
    return (
        <Dialog open={open}
                fullWidth={Boolean(isFullWidth)}
                classes={Boolean(isFullWidth) ? { paper: classes.fixedModal } : {}}
                maxWidth={"lg"}>
            <div className={classes.title}>{title.toUpperCase()}</div>
            <div className={classes.dialogBody}>{children}</div>
        </Dialog>
    );
}
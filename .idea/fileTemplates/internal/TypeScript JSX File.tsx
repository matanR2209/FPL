import * as React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";

interface IProps {
    classes: any
}

const styles = (theme: Theme) => createStyles({
    root: {}
});


class ComponentName extends React.Component<IProps & Partial<WithStyles<any>>> {
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>

            </div>
        );
    }
}

export default withStyles(styles)(ComponentName)
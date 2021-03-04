import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import TrendingSummary from "./TrendingSummary";

interface IProps {
    classes: any
}

const styles = (theme: Theme) => createStyles({
    root: {
        marginLeft: "1em"
    }
});


class TrendingSummaryContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <TrendingSummary/>
            </div>
        );
    }
}

export default withStyles(styles)(TrendingSummaryContainer)
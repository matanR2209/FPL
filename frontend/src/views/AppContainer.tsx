import * as React from "react";
import withStyles, {StyleRulesCallback, WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import SquadListContainer from "./SquadList/SquadListContainer";

interface IProps {
    classes: any
}

const styles = (theme: Theme) => createStyles({
    root: {}
});


class AppContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <SquadListContainer/>
            </div>
        );
    }
}

export default withStyles(styles)(AppContainer)
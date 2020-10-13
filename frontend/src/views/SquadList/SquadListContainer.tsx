import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import SquadList from "./SquadList";
import {IPlayer} from "../../types/Player";
import {data} from "../../dummy_data";

interface IProps {
    classes: any
}

const styles = (theme: Theme) => createStyles({
    root: {}
});


class SquadListContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public squad: IPlayer[] = data;
    public render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <SquadList squad={this.squad}/>
            </div>
        );
    }
}

export default withStyles(styles)(SquadListContainer)
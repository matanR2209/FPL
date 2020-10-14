import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SquadList from "./SquadList";
import {IPlayer} from "../../types/Player";
import {playersData} from "../../dummy_data/players_dummy_data";


interface IProps {
    classes: any
}

const styles = (theme: Theme) => createStyles({
    root: {
        width: "40%"
    }
});


class SquadListContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public squad: IPlayer[] = playersData;
    public render() {
        const {classes} = this.props;
        return (
            <Paper elevation={3} className={classes.root} >
                <SquadList squad={this.squad}/>
            </Paper>
        );
    }
}

export default withStyles(styles)(SquadListContainer)
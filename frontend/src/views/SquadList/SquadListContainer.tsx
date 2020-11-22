import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {IPlayer, PlayerPosition} from "../../types/IPlayer";
import PlayersList from "../../components/PlayersList";
import {HeadCell} from "../../components/SortableTable/types";
import {createStyles, Theme} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";

interface IProps {
    onAddPlayerClicked: (listToAddPlayersTo: string, playersToAdd: number) => void;
    onPlayerRemovalFromSquad: (playerToRemove: number) => void
    squad: IPlayer[]
    classes: any;
}

interface ILocalState {
    numbersOfPlayersToAdd: number
}

const HEAD_CELLS: HeadCell[] = [
    { id: 'web_name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'now_cost', numeric: true, disablePadding: true, label: 'Price (M)' },
    { id: 'selected_by_percent', numeric: true, disablePadding: true, label: '% selected by' },
    { id: 'value_season', numeric: true, disablePadding: true, label: 'Value' },
    { id: 'total_points', numeric: true, disablePadding: true, label: 'Total points'},
];

const styles = (theme: Theme) => createStyles({
    squadListContainer: {
      border: "1px solid"
    },
    golHeader: {
        padding: ".5em 1em",
        fontWeight: 600,
        backgroundColor: "#ebff00"
    },
    defHeader: {
        padding: ".5em 1em",
        fontWeight: 600,
        backgroundColor: "#00ff87"
    },
    midHeader: {
        padding: ".5em 1em",
        fontWeight: 600,
        backgroundColor: "#05f0ff"
    },
    forHeader: {
        padding: ".5em 1em",
        fontWeight: 600,
        color: "white",
        backgroundColor: "#e90052"
    }
});

class SquadListContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public state: ILocalState = {
        numbersOfPlayersToAdd: 0,
    }
    public render() {
        const { classes } = this.props
        return (
            <Paper elevation={3} className={classes.playerListContainer} >
                <div className={classes.golHeader}>Goalkeepers</div>
                <PlayersList
                    showPagination={false}
                    players={this.props.squad.filter((player: IPlayer) => {return player.element_type === PlayerPosition.Goalkeeper})} headCells={HEAD_CELLS}/>
                <div className={classes.defHeader}>Defenders</div>
                <PlayersList
                    showPagination={false}
                    players={this.props.squad.filter((player: IPlayer) => {return player.element_type === PlayerPosition.Defender})} headCells={HEAD_CELLS}/>
                <div className={classes.midHeader}>Midlifers</div>
                <PlayersList
                    showPagination={false}
                    players={this.props.squad.filter((player: IPlayer) => {return player.element_type === PlayerPosition.Midilfer})} headCells={HEAD_CELLS}/>
                <div className={classes.forHeader}>Forwards</div>
                <PlayersList
                    showPagination={false}
                    players={this.props.squad.filter((player: IPlayer) => {return player.element_type === PlayerPosition.Forward})} headCells={HEAD_CELLS}/>
            </Paper>
    );
    }
}

export default withStyles(styles)(SquadListContainer)
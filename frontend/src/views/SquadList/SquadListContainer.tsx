import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {Button, createStyles, Theme} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SquadList from "./SquadList";
import {IPlayer} from "../../types/Player";
import AddIcon from '@material-ui/icons/Add';

interface IProps {
    classes: any;
    onAddPlayerClicked: (playersToAdd: number) => void;
    onPlayerRemovalFromSquad: (playerToRemove: number) => void
    squad: IPlayer[]
}

interface ILocalState {
    numbersOfPlayersToAdd: number
}

const styles = (theme: Theme) => createStyles({
    root: {
        maxWidth: "40%"
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "1em"

    },
    header: {
        fontWeight: 600,
        fontSize: 24,
        color: "#305cc6"
    },
    addPlayerContainer: {
    }
});


class SquadListContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public state: ILocalState = {
        numbersOfPlayersToAdd: 0,
    }
    public render() {
        const {classes} = this.props;
        return (
            <>
                <Paper elevation={3} className={classes.root} >
                    <div className={classes.headerContainer}>
                    <div className={classes.header}>My Team</div>
                    <div className={classes.addPlayerContainer}>
                        <Button
                            onClick={this.onAddPlayerToSquadClick}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<AddIcon />}
                        >
                            Add player
                        </Button>
                    </div>
                    </div>
                    <SquadList
                        onPlayerRemove={this.removePlayerFormSquadList}
                        squad={this.props.squad}/>
                </Paper>
            </>
        );
    }

    private onAddPlayerToSquadClick  = () => {
        this.props.onAddPlayerClicked(this.state.numbersOfPlayersToAdd);
    }

    private removePlayerFormSquadList = (playerId: number) => {
        const { onPlayerRemovalFromSquad } = this.props;
        onPlayerRemovalFromSquad(playerId);
        const newState = this.state;
        newState.numbersOfPlayersToAdd++;
        this.setState(newState);

    }
}

export default withStyles(styles)(SquadListContainer)
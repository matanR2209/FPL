import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Dialog, Theme} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";
import {IPlayer} from "../../types/Player";
import {ITeam} from "../../types/Team";
import {playersData} from "../../dummy_data/players_dummy_data";
import {teamsData} from "../../dummy_data/teams_dummy_data";
import SelectPlayer from "./SelectPlayer";

interface IProps {
    classes: any
    isOpen: boolean;
    closeSelectPlayerWindow: () => void;
    numberOfPlayersAllowedToAdd?: number;
    addPlayers: (selectedPlayers: IPlayer[]) => void;
    listToAddTo: string;
}

interface ILocalState {
    teamPlayersList: IPlayer[];
    playersToAddList: IPlayer[];
    teams: ITeam[];
}

const styles = (theme: Theme) => createStyles({
    root: {}
});


class SelectPlayerContainer extends React.Component<
    IProps & Partial<WithStyles<any>>,
    ILocalState
    > {

    public state: ILocalState = {
        teamPlayersList: [],
        playersToAddList: [],
        teams: teamsData
    }

    public render() {
        return (
            <div>
                <Dialog  open={this.props.isOpen} fullWidth={true}>
                    <DialogTitle>
                        <div>Select Player</div>
                        {this.renderSubHeader()}
                    </DialogTitle>
                    <DialogContent dividers>
                        <SelectPlayer
                            availablePlayersOnSelectedTeam={ this.state.teamPlayersList}
                            playersToAddToWIshList={ this.state.playersToAddList}
                            availableTeams={this.state.teams}
                            onPlayerSelect={this.addSelectedPlayerToList}
                            onTeamChange={this.updatePlayerForSelectedTeam}/>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={this.savePlayers} color="primary">
                            Add players
                        </Button>
                        <Button autoFocus onClick={this.props.closeSelectPlayerWindow} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    private renderSubHeader = () => {
        const { numberOfPlayersAllowedToAdd } = this.props;
        const { playersToAddList } = this.state;
        return Boolean(numberOfPlayersAllowedToAdd)?
            <div>{`Add ${numberOfPlayersAllowedToAdd! - playersToAddList.length} more players`}</div> : null
    }

    private updatePlayerForSelectedTeam = (teamId: number) => {
        const result = playersData.filter(player => player.team === teamId);
        const newState = this.state;
        newState.teamPlayersList = result;
        this.setState(newState);
    };

    private addSelectedPlayerToList = (playerId: number) => {
        const { numberOfPlayersAllowedToAdd, listToAddTo  } = this.props;
        const { playersToAddList } = this.state;
        const player = playersData.filter(player => player.id === playerId)[0];
        const newState = this.state;
        if(playersToAddList.filter(player => player.id === playerId).length === 0) {
            if(listToAddTo === "squad") {
                if(numberOfPlayersAllowedToAdd! - playersToAddList.length > 0) {
                    newState.playersToAddList.push(player);
                }
            } else if (listToAddTo === "watchList") {
                newState.playersToAddList.push(player);
            }
        }
        this.setState(newState);
    };

    private savePlayers = () => {
        this.props.closeSelectPlayerWindow();
        this.props.addPlayers(this.state.playersToAddList);
    };
}

export default withStyles(styles)(SelectPlayerContainer)
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
}

interface ILocalState {
    teamPlayersList: IPlayer[];
    playersToAdd: IPlayer[];
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
        playersToAdd: [],
        teams: teamsData
    }

    public render() {
        return (
            <div>
                <Dialog  open={this.props.isOpen} fullWidth={true}>
                    <DialogTitle>
                        Select Player
                    </DialogTitle>
                    <DialogContent dividers>
                        <SelectPlayer
                            availablePlayersOnSelectedTeam={ this.state.teamPlayersList}
                            playersToAddToWIshList={ this.state.playersToAdd}
                            availableTeams={this.state.teams}
                            onPlayerSelect={this.addSelectedPlayerToList}
                            onTeamChange={this.updatePlayerForSelectedTeam}/>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={this.savePlayers} color="primary">
                            Add players
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    private savePlayers = () => {
        console.log("Send email with the following players added to the wish list");
        console.log(this.state.playersToAdd);
        this.props.closeSelectPlayerWindow()
    }

    private updatePlayerForSelectedTeam = (teamId: number) => {
        const result = playersData.filter(player => player.team === teamId);
        const newState = this.state;
        newState.teamPlayersList = result;
        this.setState(newState);
    }

    private addSelectedPlayerToList = (playerId: number) => {
        const player = playersData.filter(player => player.id === playerId)[0];
        if(this.state.playersToAdd.filter(player => player.id === playerId).length === 0 ) {
            const newState = this.state;
            newState.playersToAdd.push(player);
            this.setState(newState);
        }
    }
}

export default withStyles(styles)(SelectPlayerContainer)
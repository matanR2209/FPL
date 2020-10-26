import * as React from "react";
import {WithStyles} from "@material-ui/core/styles/withStyles";
import {IPlayer} from "../../types/Player";
import PlayersList from "../../components/PlayersList";

interface IProps {
    onAddPlayerClicked: (listToAddPlayersTo: string, playersToAdd: number) => void;
    onPlayerRemovalFromSquad: (playerToRemove: number) => void
    squad: IPlayer[]
}

interface ILocalState {
    numbersOfPlayersToAdd: number
}

export default class SquadListContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public state: ILocalState = {
        numbersOfPlayersToAdd: 0,
    }
    public render() {
        return (<PlayersList listHeader={"My Team"} players={this.props.squad} openAddPlayersView={this.onAddPlayerToSquadClick} onPlayerRemove={this.removePlayerFormSquadList}/>);
    }

    private onAddPlayerToSquadClick  = () => {
        this.props.onAddPlayerClicked("squad" ,this.state.numbersOfPlayersToAdd);
    }

    private removePlayerFormSquadList = (playerId: number) => {
        const { onPlayerRemovalFromSquad } = this.props;
        onPlayerRemovalFromSquad(playerId);
        const newState = this.state;
        newState.numbersOfPlayersToAdd++;
        this.setState(newState);

    }
}
import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import SquadListContainer from "./SquadList/SquadListContainer";
import SelectPlayerContainer from "./SelectPlayer/SelectPlayerContainer";
import {stores} from "../state";
import {observer} from "mobx-react";
import {IPlayer} from "../types/Player";

interface IProps {
    classes: any
}

interface ILocalState {
    isAddPlayerOpen: boolean;
    numberOfPlayersAllowedToAdd?: number;
    listToAddPlayersTo: string
}

const playersListsStore = stores.playersListsStore;

const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        justifyContent: "space-between"
    }
});

@observer
class AppContainer extends React.Component<
    IProps & Partial<WithStyles<any>>,
    ILocalState
    > {
    public state: ILocalState = {
        isAddPlayerOpen: false,
        numberOfPlayersAllowedToAdd: undefined,
        listToAddPlayersTo: ''

    };

    public render() {
        return (
            <>
                <SquadListContainer
                    squad={playersListsStore.squadPlayersList}
                    onPlayerRemovalFromSquad={playersListsStore.removePlayerFromSquadList}
                    onAddPlayerClicked={this.openPlayerSelectionForSquad}/>
                <SelectPlayerContainer
                        numberOfPlayersAllowedToAdd={this.state.numberOfPlayersAllowedToAdd}
                        closeSelectPlayerWindow={this.closeSelectPlayer}
                        addPlayers={this.addPlayersToList}
                        isOpen={this.state.isAddPlayerOpen}/>
            </>
        );
    }

    private openPlayerSelectionForSquad = (numberOfPlayersAllowed: number) => {
        const newState = this.state;
        newState.isAddPlayerOpen = true;
        newState.listToAddPlayersTo = "squad";
        newState.numberOfPlayersAllowedToAdd = numberOfPlayersAllowed;
        this.setState(newState);
    }

    private closeSelectPlayer = () => {
        const newState = this.state;
        newState.isAddPlayerOpen = false;
        this.setState(newState);
    }

    private addPlayersToList = (selectedPlayers: IPlayer[]) => {
        if(this.state.listToAddPlayersTo === "squad") {
            playersListsStore.addPlayersToSquadList(selectedPlayers);
        } else {
            console.log(selectedPlayers);
        }
    }
}

export default withStyles(styles)(AppContainer)
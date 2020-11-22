import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import {stores} from "../state";
import {IPlayer} from "../types/IPlayer";
import Dashboard from "../layout/Dashboard";
import {AppComponent} from "../types/AppComponent";
import SelectPlayerContainer from "../views/SelectPlayer/SelectPlayerContainer";
import PlayerDialogContainer from "../views/PlayerDialog/PlayerDialogContainer";
import SquadListContainer from "../views/SquadList/SquadListContainer";
import WatchListContainer from "../views/WatchList/watchListContainer";

interface IProps {
    classes: any
}

interface ILocalState {
    isAddPlayerOpen: boolean;
    numberOfPlayersAllowedToAdd?: number;
    listToAddPlayersTo: string;
    currentComponent: AppComponent
}

const playersListsStore = stores.playersListsStore;
const authStore = stores.authStore;
const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        height: "100vh"
    }
});

class ApplicationView extends React.Component<
    IProps & Partial<WithStyles<any>>,
    ILocalState
    > {
    public state: ILocalState = {
        isAddPlayerOpen: true,
        numberOfPlayersAllowedToAdd: undefined,
        listToAddPlayersTo: '',
        currentComponent: AppComponent.myTeam

    };

    public render() {
        return (
            <>
                <Dashboard onLisItemSelect={this.onListItemSelect}>
                    {this.renderComponent()}
                </Dashboard>
                <SelectPlayerContainer
                    isOpen={this.state.isAddPlayerOpen}
                    numberOfPlayersAllowedToAdd={this.state.numberOfPlayersAllowedToAdd}
                    addPlayers={this.addPlayersToList}
                    listToAddTo={this.state.listToAddPlayersTo}
                    closeSelectPlayerWindow={this.closeSelectPlayer}/>
                <PlayerDialogContainer/>
            </>
        );
    }

    private renderComponent = () => {
        switch (this.state.currentComponent) {
            case AppComponent.myTeam: return(<SquadListContainer
                squad={playersListsStore.squadPlayersList}
                onAddPlayerClicked={this.openPlayerSelectionForSquad}
                onPlayerRemovalFromSquad={playersListsStore.removePlayerFromSquadList}/>);

            case AppComponent.myWatchList: return (<WatchListContainer
                watchList={playersListsStore.watchListPlayersList}
                onAddPlayerClicked={this.openPlayerSelectionForSquad}
            />);
            case AppComponent.trending: return <div>Trending</div>;
            case AppComponent.reports: return <div>Reports</div>;
            default: return <div>My team</div>
        }
    }

    private openPlayerSelectionForSquad = (listToAdd: string, numberOfPlayersAllowed?: number) => {
        const newState = this.state;
        newState.isAddPlayerOpen = true;
        newState.listToAddPlayersTo = listToAdd;
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
            playersListsStore.addPlayersToWatchList(selectedPlayers)
        }
    }

    private onSignUp = (firstName: string, lastName: string, email: string, password: string) => {
        authStore.signUp(firstName, lastName, email, password)
    }

    private onListItemSelect = (selectedComponent: AppComponent) => {
        const newState = this.state;
        newState.currentComponent = selectedComponent;
        this.setState(newState);
    }
}

export default withStyles(styles)(ApplicationView)
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
import {observer} from "mobx-react";
import TrendingContainer from "../views/Trending/TrendingContainer";

interface IProps {
    classes: any
}

interface ILocalState {
    currentComponent: AppComponent
}

const playersStore = stores.playersStore;

const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        height: "100vh"
    }
});

@observer
class ApplicationView extends React.Component<
    IProps & Partial<WithStyles<any>>,
    ILocalState
    > {
    public state: ILocalState = {
        currentComponent: AppComponent.trending

    };

    public componentDidMount = () =>  {
        playersStore.fetchPlayersInfo()
    }

    public render() {
        return (
            <>
                <Dashboard onLisItemSelect={this.onListItemSelect}>
                    {this.renderComponent()}
                </Dashboard>
                <SelectPlayerContainer
                    isOpen={stores.uiStore.showAddPlayersDialog}
                    addPlayers={this.addPlayersToList}
                    />
                <PlayerDialogContainer/>
            </>
        );
    }

    private renderComponent = () => {
        switch (this.state.currentComponent) {
            case AppComponent.myTeam: return<SquadListContainer squad={playersStore.squadPlayersList}/>;
            case AppComponent.myWatchList: return <WatchListContainer watchList={playersStore.watchListPlayersList}/>;
            case AppComponent.trending: return <TrendingContainer/>;
            case AppComponent.reports: return <div>Reports</div>;
            default: return <div>My team</div>
        }
    }

    private addPlayersToList = (selectedPlayers: IPlayer[]) => {
        console.log(selectedPlayers);
    }

    private onListItemSelect = (selectedComponent: AppComponent) => {
        const newState = this.state;
        newState.currentComponent = selectedComponent;
        this.setState(newState);
    }
}

export default withStyles(styles)(ApplicationView)
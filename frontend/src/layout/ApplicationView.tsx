import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {Backdrop, CircularProgress, createStyles, Theme} from "@material-ui/core";
import {stores} from "../state";
import {IPlayer} from "../types/IPlayer";
import Dashboard from "../layout/Dashboard";
import {AppComponent} from "../types/AppComponent";
import SelectPlayerContainer from "../views/SelectPlayer/SelectPlayerContainer";
import PlayerDialogContainer from "../views/PlayerDialog/PlayerDialogContainer";
import SquadListContainer from "../views/SquadList/SquadListContainer";
import WatchListContainer from "../views/WatchList/watchListContainer";
import {observer} from "mobx-react";
import NotificationBar from "../components/NotificationBar";
import ReportsContainer from "../views/Reports/ReportsContainer";
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

    public componentDidMount() {
        this.reloadData();
    }

    public reloadData = async () => {
        await stores.dataStore.getAllStats();
        stores.playersStore.getApplicationStats(stores.authStore.accessToken);
    }

    public render() {
                {return stores.dataStore.isDataLoaded?
                    <>
                        <NotificationBar/>
                    <Dashboard onLisItemSelect={this.onListItemSelect}>
                        {this.renderComponent()}
                    </Dashboard>
                    <SelectPlayerContainer
                        isOpen={stores.uiStore.showAddPlayersDialog}
                    />
                    <PlayerDialogContainer/>
                    </>
                    :
                    <Backdrop style={{zIndex: 10}} open={true} >
                        <CircularProgress color="primary" />
                    </Backdrop>
                }
    }

    private renderComponent = () => {
        switch (this.state.currentComponent) {
            case AppComponent.myTeam: return<SquadListContainer squad={playersStore.squadPlayersList}/>;
            case AppComponent.myWatchList: return <WatchListContainer watchList={playersStore.watchListPlayersList}/>;
            case AppComponent.trending: return <TrendingContainer/>;
            case AppComponent.reports: return <ReportsContainer/>
            default: return <div>My team</div>
        }
    }

    private onListItemSelect = (selectedComponent: AppComponent) => {
        const newState = this.state;
        newState.currentComponent = selectedComponent;
        this.setState(newState);
    }
}

export default withStyles(styles)(ApplicationView)
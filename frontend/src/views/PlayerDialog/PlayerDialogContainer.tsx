import * as React from "react";
import {WithStyles} from "@material-ui/core/styles/withStyles";
import PlayerDialog from "./PlayerDialog";
import {stores} from "../../state";
import {observer} from "mobx-react";

interface IProps {}


@observer
export default class PlayerDialogContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public render() {
        const { selectedPlayer } = stores.selectedPlayerStore;
        return (
                <PlayerDialog
                    onAddToMyTeam={this.addToMyTeam}
                    onAddToWishList={this.addToWishlist}
                    onClose={this.onClose} player={selectedPlayer} open={true}/>
        );
    }

    private onClose = () => {
        stores.selectedPlayerStore.setSelectedPlayer(undefined);
    }

    private addToMyTeam = () => {
        const { selectedPlayer } = stores.selectedPlayerStore;
        stores.playersStore.addToSquadPlayersList(selectedPlayer!)
        stores.uiStore.notificationMessage = `${selectedPlayer?.first_name} ${selectedPlayer?.second_name} was added to your team ✅`
    }
    private addToWishlist = () => {
        const { selectedPlayer } = stores.selectedPlayerStore;
        stores.playersStore.addToWatchListPlayersList(selectedPlayer!)
        stores.uiStore.notificationMessage = `${selectedPlayer?.first_name} ${selectedPlayer?.second_name} was added to your watchlist 👀`

    }
}
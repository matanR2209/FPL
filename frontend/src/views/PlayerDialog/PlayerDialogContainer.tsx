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
                <PlayerDialog onClose={this.onClose} player={selectedPlayer} open={true}/>
        );
    }

    private onClose = () => {
        stores.selectedPlayerStore.setSelectedPlayer(undefined);
    }
}
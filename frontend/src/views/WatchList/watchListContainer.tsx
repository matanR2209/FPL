import * as React from "react";
import {IPlayer} from "../../types/Player";
import PlayersList from "../../components/PlayersList";
import {observer} from "mobx-react";

interface IProps {
    watchList: IPlayer[];
    onAddPlayerClicked: (listToAddPlayersTo: string) => void;
}

@observer
export default class WatchListContainer extends React.Component<IProps> {
    public render() {
        return (<PlayersList listHeader={"My watch list"} players={this.props.watchList} openAddPlayersView={this.openSelectPlayer} onPlayerRemove={this.onPlayerRemoval}/>);
    }

    private openSelectPlayer = () => {
        const { onAddPlayerClicked } = this.props;
        onAddPlayerClicked("watchList");
    }

    private onPlayerRemoval = (playerId: number) => {
     console.log(playerId)
    }
}
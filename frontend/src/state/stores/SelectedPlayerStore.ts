import { observable } from "mobx";
import {IPlayer} from "../../types/IPlayer";
import {playersData} from "../../dummy_data/players_dummy_data";

export default class SelectedPlayerStore {
    @observable public selectedPlayer: IPlayer | undefined = undefined;
    // @observable public selectedPlayer: IPlayer | undefined = playersData[Math.floor(Math.random() * 10)];

    public setSelectedPlayer = (playerId?: number) => {
        if(playerId) {
            const player = playersData.filter(player => player.id === playerId)[0];
            this.selectedPlayer = player;
        } else {
            this.selectedPlayer = undefined;
        }
    }
}

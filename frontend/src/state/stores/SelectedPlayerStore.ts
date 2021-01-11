import { observable } from "mobx";
import {IPlayer} from "../../types/IPlayer";
import StatisticService from "../../services/StatisticService";

export default class SelectedPlayerStore {
    @observable public selectedPlayer: IPlayer | undefined = undefined;
    public setSelectedPlayer = (playerId?: number) => {
        if(playerId) {
            const player = StatisticService.getPlayerById(playerId);
            this.selectedPlayer = player;
        } else {
            this.selectedPlayer = undefined;
        }
    }
}

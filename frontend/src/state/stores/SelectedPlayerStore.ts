import { observable } from "mobx";
import {IPlayer} from "../../types/IPlayer";
import PlayersService from "../../services/PlayersService";

export default class SelectedPlayerStore {
    @observable public selectedPlayer: IPlayer | undefined = undefined;
    public setSelectedPlayer = (playerId?: number) => {
        if(playerId) {
            const player = PlayersService.getPlayerById(playerId);
            this.selectedPlayer = player;
        } else {
            this.selectedPlayer = undefined;
        }
    }
}

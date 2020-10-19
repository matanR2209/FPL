import { observable } from "mobx";
import {IPlayer} from "../../types/Player";
import {playersData} from "../../dummy_data/players_dummy_data";


export default class PlayersListsStore {
    @observable private _squadPlayersList: IPlayer[] = playersData;
    @observable private _watchListPlayersList: IPlayer[] = [];

    get squadPlayersList() {
        return this._squadPlayersList;
    }

    public addPlayersToSquadList = (playersToSquad: IPlayer[]) => {
        this._squadPlayersList = this._squadPlayersList.concat(playersToSquad);
    };

    public removePlayerFromSquadList = (playerToRemoveFromSquad: number) => {
        const newSquad = this._squadPlayersList.filter(( player: IPlayer) => {
            return player.id !== playerToRemoveFromSquad;
        });
        this._squadPlayersList = newSquad;
    }
}

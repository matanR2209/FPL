import { observable } from "mobx";
import {IPlayer} from "../../types/Player";
import {playersData} from "../../dummy_data/players_dummy_data";


export default class PlayersListsStore {
    @observable private _squadPlayersList: IPlayer[] = playersData;
    @observable private _watchListPlayersList: IPlayer[]  = [playersData[Math.floor(Math.random() * 10)], playersData[Math.floor(Math.random() * 10)], playersData[Math.floor(Math.random() * 10)]];

    get squadPlayersList() {
        return this._squadPlayersList;
    }

    get watchListPlayersList() {
        return this._watchListPlayersList;
    }

    public addPlayersToSquadList = (playersToSquad: IPlayer[]) => {
        this._squadPlayersList = this._squadPlayersList.concat(playersToSquad);
    };

    public addPlayersToWatchList = (playersToSquad: IPlayer[]) => {
        console.log("send email with the following players info");
        console.log("Save the following players info");
        console.log(playersToSquad);
        this._watchListPlayersList = this._watchListPlayersList.concat(playersToSquad);
    };

    public removePlayerFromSquadList = (playerToRemoveFromSquad: number) => {
        const newSquad = this._squadPlayersList.filter(( player: IPlayer) => {
            return player.id !== playerToRemoveFromSquad;
        });
        this._squadPlayersList = newSquad;
    }
}

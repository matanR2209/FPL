import { observable } from "mobx";
import * as _ from 'lodash';
import {IPlayer, PlayerPositionsByValue} from "../../types/IPlayer";
import {playersData} from "../../dummy_data/players_dummy_data";
import DynamoDBService from "../../services/DynamoDBService";
import StatisticService from "../../services/StatisticService";
import PlayersService from "../../services/PlayersService";


export default class PlayersStore {
    @observable private _squadPlayersList: IPlayer[] = [];
    @observable private _watchListPlayersList: IPlayer[]  = [];
    @observable private _mostTransferredIn: IPlayer[]  = [];
    @observable private _mostTransferredOut: IPlayer[]  = [];
    @observable private _mostSelected: IPlayer[]  = [];
    @observable private _watchlistStars: IPlayer[]  = [];

    get squadPlayersList() {
        return this._squadPlayersList;
    }

    get watchListPlayersList() {
        return this._watchListPlayersList;
    }

    public addToSquadPlayersList = (playerToAdd: IPlayer) => {
        this._squadPlayersList.push(playerToAdd);
    }

    public removeFromSquadPlayersList = (playerToRemove: IPlayer) => {
        const index = this._squadPlayersList.findIndex(player => player.id === playerToRemove.id );
        this._squadPlayersList.splice(index, 1);
    }

    public addToWatchListPlayersList = (playerToAdd: IPlayer) => {
        this._watchListPlayersList.push(playerToAdd);
    }

    public removeFromWatchListPlayersList = (playerToRemove: IPlayer) => {
        const index = this._watchListPlayersList.findIndex(player => player.id === playerToRemove.id );
        this._watchListPlayersList.splice(index, 1);
    }

    get mostTransferredIn() {
        return this._mostTransferredIn;
    }

    get mostSelected() {
        return this._mostSelected;
    }

    get mostTransferredOut() {
        return this._mostTransferredOut;
    }

    public removePlayerFromSquadList = (playerToRemoveFromSquad: number) => {
        const newSquad = this._squadPlayersList.filter(( player: IPlayer) => {
            return player.id !== playerToRemoveFromSquad;
        });
        this._squadPlayersList = newSquad;
    }

    public generateRandomSquad = () => {
        const playersArray = []
        playersArray.push(_.sampleSize(playersData.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Goalkeeper}), 2));
        playersArray.push(_.sampleSize(playersData.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Defender}), 5));
        playersArray.push(_.sampleSize(playersData.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Midilfer}), 5));
        playersArray.push(_.sampleSize(playersData.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Forward}), 3));
        this._squadPlayersList = playersArray.reduce((a,b) => [...a, ...b], []);
    }

    public getApplicationStats = (userAccessToken: string) => {
        this.getUserPlayersLists(userAccessToken);
        this.getTrendingLists();
    }

    private getTrendingLists = () => {
        this._mostTransferredIn = StatisticService.getMostTransferredInForCurrentGW();
        this._mostTransferredOut  = StatisticService.getMostTransferredOutForCurrentGW();
        this._mostSelected = StatisticService.getMostSelected();
    }

    private convertPlayerIdsToData = (team: number[]): IPlayer[] => {
        const playersInfo: IPlayer[] = [];
        team.forEach(playerId => {
           playersInfo.push(PlayersService.getPlayerById(playerId));
        })
        return playersInfo;
    }

    private getUserPlayersLists = async (userAccessToken: string) => {
        console.log(`fetch info for ${userAccessToken}`);
        const response = await DynamoDBService.getUserTeams(userAccessToken);
        if(response.data) {
            this._squadPlayersList = this.convertPlayerIdsToData(response.data.currentTeam);
            this._watchListPlayersList = this.convertPlayerIdsToData(response.data.currentWishlist);
        }
    }
}

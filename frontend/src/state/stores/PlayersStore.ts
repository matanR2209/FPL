import { observable } from "mobx";
import * as _ from 'lodash';
import {IPlayer, PlayerPositionsByValue} from "../../types/IPlayer";
import {playersData} from "../../dummy_data/players_dummy_data";
import DynamoDBService from "../../services/DynamoDBService";


export default class PlayersStore {
    @observable private _squadPlayersList: IPlayer[] = [];
    @observable private _watchListPlayersList: IPlayer[]  = [];

    get squadPlayersList() {
        return this._squadPlayersList;
    }

    get watchListPlayersList() {
        return this._watchListPlayersList;
    }

    public addPlayersToSquadList = (playersToSquad: IPlayer[]) => {
        this._squadPlayersList = this._squadPlayersList.concat(playersToSquad);
        console.log("Send email with  playersToSquad initial values added to the current team")
        //TODO: 1. create new API enpoint
        // 2. in this endpoint send email with the data regarding the new players in the team
        const playerIds = this._squadPlayersList.map((player: IPlayer) => {
            return player.id
        })
        const params = {
            team: playerIds,
            userId: "test_1"
        }
        DynamoDBService.updateCurrentTeamSquad(params)
    };

    public addPlayersToWatchList = (playersToSquad: IPlayer[]) => {
        console.log("Send email with  playersToSquad initial values added to the watch list")
        //TODO: 1. create new API enpoint
        // 2. in this endpoint send email with the data regarding the new players in the team
        this._watchListPlayersList = this._watchListPlayersList.concat(playersToSquad);
        const playerIds = this._watchListPlayersList.map((player: IPlayer) => {
            return player.id
        })
        const params = {
            watchList: playerIds,
            userId: "test_1"
        }
        DynamoDBService.updateWatchlist(params)

    };

    public removePlayerFromSquadList = (playerToRemoveFromSquad: number) => {
        const newSquad = this._squadPlayersList.filter(( player: IPlayer) => {
            return player.id !== playerToRemoveFromSquad;
        });
        this._squadPlayersList = newSquad;
    }

    public fetchPlayersInfo = () => {
        // https://fantasy.premierleague.com/api/bootstrap-static/
    }

    public generateRandomSquad = () => {
        const playersArray = []
        playersArray.push(_.sampleSize(playersData.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Goalkeeper}), 2));
        playersArray.push(_.sampleSize(playersData.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Defender}), 5));
        playersArray.push(_.sampleSize(playersData.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Midilfer}), 5));
        playersArray.push(_.sampleSize(playersData.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Forward}), 3));
        this._squadPlayersList = playersArray.reduce((a,b) => [...a, ...b], []);
    }
}

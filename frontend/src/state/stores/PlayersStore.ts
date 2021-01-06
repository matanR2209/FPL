import { observable } from "mobx";
import * as _ from 'lodash';
import {IPlayer, PlayerPositionsByValue} from "../../types/IPlayer";
import {playersData} from "../../dummy_data/players_dummy_data";
import DynamoDBService from "../../services/DynamoDBService";
import NetworkService from "../../services/NetworkService";
import axios from "axios";

const BOOTSTRAP_STATISTIC = "https://fantasy.premierleague.com/api/bootstrap-static/";

export default class PlayersStore {
    @observable private _squadPlayersList: IPlayer[] = [];
    @observable private _watchListPlayersList: IPlayer[]  = [];

    get squadPlayersList() {
        return this._squadPlayersList;
    }

    get watchListPlayersList() {
        return this._watchListPlayersList;
    }

    public getAllStats = async () => {
        console.log(1111);
        const currentStats = await axios.get(BOOTSTRAP_STATISTIC);
        console.log(2222);
        console.log(currentStats);
    }

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

    public getUserPlayersLists = async (userAccessToken: string) => {
        console.log(`fetch info for ${userAccessToken}`);
        const response = await DynamoDBService.getUserTeams(userAccessToken);
        console.log(response);
        this.convertPlayerIdsToData(response);
    }

    private convertPlayerIdsToData = (teams: any) => {
        console.log(teams);
    }
}

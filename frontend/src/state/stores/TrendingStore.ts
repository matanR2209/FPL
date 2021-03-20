import TrendingAPIService from "../../services/APIServices/TrendingAPIService";
import {observable} from "mobx";
import {ITrendingStats} from "../../types/ITrending";

export default class TrendingStore {
    @observable public selectedTeamPlayersTrending: ITrendingStats[] = [];

    public getPlayerTrendingStats = async (playerId: number) => {
        const response = await TrendingAPIService.getPlayerTrendingStats(playerId)
        return response;
    }

    public getTeamTrendingStats = async (teamId: number) => {
        console.log("getTeamTrendingStats");
        const response = await TrendingAPIService.getTeamTrendingStats(teamId);
        if(response.data) {
            this.selectedTeamPlayersTrending = response.data;
            console.log(this.selectedTeamPlayersTrending)
        }
    }
}

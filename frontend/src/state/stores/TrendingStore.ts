import TrendingAPIService from "../../services/APIServices/TrendingAPIService";

export default class TrendingStore {
    public getPlayerTrendingStats = async (playerId: number) => {
        const response = await TrendingAPIService.getPlayerTrendingStats(playerId)
        return response;
    }

    public getTeamTrendingStats = (teamId: number) => {
        const x =  TrendingAPIService.getTeamTrendingStats(teamId)
        console.log(x);
    }
}

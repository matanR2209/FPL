import TrendingAPIService from "../../services/APIServices/TrendingAPIService";

export default class TrendingStore {
    public getPlayerTrendingStats = (playerId: number) => {
        return TrendingAPIService.getPlayerTrendingStats(playerId)
    }
}

import DynamoDBService from "../DynamoDBService";

export default class TrendingAPIService {
    public static getPlayerTrendingStats = async (playerId: number) => {
        return DynamoDBService.getTrendingByPlayer(playerId)
    }

    public static getTeamTrendingStats = async (teamId: number) => {
        const response = await DynamoDBService.getTrendingByTeam(teamId);
        return response;
    }
}

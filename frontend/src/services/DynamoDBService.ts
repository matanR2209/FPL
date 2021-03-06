import NetworkService from "./NetworkService";
import {IUpdateTeamSquadRequest, IUpdateWatchlistRequest} from "../types/RequestParams";

// const UPDATE_TEAM = 'http://localhost:3000/dev/updateCurrentTeam';
const UPDATE_TEAM = 'https://1opk1jw2wd.execute-api.us-east-2.amazonaws.com/dev/update-team';
const UPDATE_WATCH_LIST = 'https://1opk1jw2wd.execute-api.us-east-2.amazonaws.com/dev/update-watch-list';

const TRENDING_TEAM_PREFIX = "http://localhost:3000/dev/teamTrending";
const TRENDING_PLAYER_PREFIX = "http://localhost:3000/dev/teamTrending";
const TRENDING_TEAM = "teamId";
const TRENDING_PLAYER = "teamId";

export default class DynamoDBService {

    public static updateCurrentTeamSquad(params: IUpdateTeamSquadRequest) {
        return NetworkService.post(
            UPDATE_TEAM,
            params
        );
    }

    public static updateWatchlist(params: IUpdateWatchlistRequest) {
        return NetworkService.post(
            UPDATE_WATCH_LIST,
            params
        );
    }

    public static getUserTeams = (userId: string): any  => {
        return NetworkService.get("http://localhost:3000/dev/user/?userId=user1")
    }

    public static getTrendingByTeam = (teamId: number): any  => {
        return NetworkService.get( `${TRENDING_TEAM_PREFIX}/?${TRENDING_TEAM}=${teamId}`)
    }

    public static getTrendingByPlayer = (playerId: number): any  => {
        return NetworkService.get( `${TRENDING_PLAYER_PREFIX}/?${TRENDING_PLAYER}=${playerId}`)
    }
}

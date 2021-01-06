import NetworkService from "./NetworkService";
import {IUpdateTeamSquadRequest, IUpdateWatchlistRequest} from "../types/RequestParams";
import {SLResponse} from "../types/shared/common";

// const UPDATE_TEAM = 'http://localhost:3000/dev/updateCurrentTeam';
const UPDATE_TEAM = 'https://1opk1jw2wd.execute-api.us-east-2.amazonaws.com/dev/update-team';
const UPDATE_WATCH_LIST = 'https://1opk1jw2wd.execute-api.us-east-2.amazonaws.com/dev/update-watch-list';
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

    public static getUserTeams = (playerId: string): any  => {
        console.log(playerId);
        return NetworkService.get("http://localhost:3000/dev/user/?userId=user1")
    }

    // public static retrieveData(token: string, accessToken: string, queryParam: string) {
    //     const url = `${COMPARE_YOURSELF_URL}/${queryParam}${ACCESS_TOKEN_QUERY_PARAM}${accessToken}`;
    //     return NetworkService.authenticatedGet( url, token );
    // }
    //
    // public static deleteUserData(token: string) {
    //     const url = `${COMPARE_YOURSELF_URL}`;
    //     return NetworkService.authenticatedDelete( url, token );
    // }
}

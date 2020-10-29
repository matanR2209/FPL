import NetworkService from "./NetworkService";
import {IUpdateTeamSquad, IUpdateWatchlist} from "../types/RequestParams";

const UPDATE_TEAM = 'https://1opk1jw2wd.execute-api.us-east-2.amazonaws.com/dev/update-team';
const UPDATE_WATCH_LIST = 'https://1opk1jw2wd.execute-api.us-east-2.amazonaws.com/dev/update-watch-list';
export default class DynamoDBService {

    public static updateCurrentTeamSquad(params: IUpdateTeamSquad) {
        return NetworkService.nonAuthenticatedPost(
            UPDATE_TEAM,
            params
        );
    }

    public static updateWatchlist(params: IUpdateWatchlist) {
        return NetworkService.nonAuthenticatedPost(
            UPDATE_WATCH_LIST,
            params
        );
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

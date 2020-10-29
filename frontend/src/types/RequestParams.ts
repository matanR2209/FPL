import {IPlayer} from "./Player";

export interface IUpdateTeamSquad {
    team: IPlayer[]
    userId: string,
}

export interface IUpdateWatchlist {
    watchList: IPlayer[]
    userId: string,
}
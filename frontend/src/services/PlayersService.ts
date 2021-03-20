import {stores} from "../state";
import {playersData} from "../dummy_data/players_dummy_data";
import {IPlayer} from "../types/IPlayer";

export default class PlayersService {
    public static getPlayerById = (playerId: number) => {
        return stores.dataStore.staticData!.elements.filter(player => player.id === playerId)[0];
    }

    public static getPlayersByTeam = async (teamId: number) => {
        return stores.dataStore.staticData!.elements.filter((player: IPlayer) => player.team === teamId);
    }
}

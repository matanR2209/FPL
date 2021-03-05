import {stores} from "../state";
import * as _ from 'lodash'

export default class StatisticService {
    public static getMostTransferredInForCurrentGW = () => {
        const playersList = stores.dataStore.staticData!.elements;
        return _.orderBy(playersList, ['transfers_in'],['desc']).slice(0, 5);
    }

    public static getMostTransferredOutForCurrentGW = () => {
        const playersList = stores.dataStore.staticData!.elements;
        return _.orderBy(playersList, ['transfers_out'],['desc']).slice(0, 5);
    }

    public static getMostSelected = () => {
        const playersList = stores.dataStore.staticData!.elements;
        return _.orderBy(playersList, ['selected_by_percent'],['desc']).slice(0, 5);
    }
}

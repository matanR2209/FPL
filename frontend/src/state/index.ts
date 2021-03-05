import AuthStore from "./stores/AuthStore";
import PlayersStore from "./stores/PlayersStore";
import SelectedPlayerStore from "./stores/SelectedPlayerStore";
import UIStore from "./stores/UIStore";
import DataStore from "./stores/DataStore";
import TrendingStore from "./stores/TrendingStore";


export const stores = {
    authStore: new AuthStore(),
    playersStore: new PlayersStore(),
    selectedPlayerStore: new SelectedPlayerStore(),
    uiStore: new UIStore(),
    dataStore: new DataStore(),
    trendingStore: new TrendingStore()
}
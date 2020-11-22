import AuthStore from "./stores/AuthStore";
import PlayersListsStore from "./stores/PlayersListsStore";
import SelectedPlayerStore from "./stores/SelectedPlayerStore";


export const stores = {
    authStore: new AuthStore(),
    playersListsStore: new PlayersListsStore(),
    selectedPlayerStore: new SelectedPlayerStore()
}
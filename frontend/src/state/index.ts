import AuthStore from "./stores/AuthStore";
import PlayersListsStore from "./stores/PlayersListsStore";
import SelectedPlayerStore from "./stores/SelectedPlayerStore";
import UIStore from "./stores/UIStore";


export const stores = {
    authStore: new AuthStore(),
    playersListsStore: new PlayersListsStore(),
    selectedPlayerStore: new SelectedPlayerStore(),
    uiStore: new UIStore()
}
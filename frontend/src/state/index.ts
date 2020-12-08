import AuthStore from "./stores/AuthStore";
import PlayersStore from "./stores/PlayersStore";
import SelectedPlayerStore from "./stores/SelectedPlayerStore";
import UIStore from "./stores/UIStore";


export const stores = {
    authStore: new AuthStore(),
    playersStore: new PlayersStore(),
    selectedPlayerStore: new SelectedPlayerStore(),
    uiStore: new UIStore()
}
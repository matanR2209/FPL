import AuthStore from "./stores/AuthStore";
import PlayersListsStore from "./stores/PlayersListsStore";


export const stores = {
    authStore: new AuthStore(),
    playersListsStore: new PlayersListsStore()
}
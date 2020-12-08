import { observable } from "mobx";
export default class UIStore {
    @observable private _showLoader: boolean = false;
    @observable private _showAddPlayersDialog: boolean = false;

    get showLoader() {
        return this._showLoader
    }

    set showLoader(value: boolean) {
        this._showLoader = value;
    }

    get showAddPlayersDialog() {
        return this._showAddPlayersDialog
    }

    set showAddPlayersDialog(value: boolean) {
        this._showAddPlayersDialog = value;
    }
}

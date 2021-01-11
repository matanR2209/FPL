import { observable } from "mobx";
export default class UIStore {
    @observable private _showLoader: boolean = false;
    @observable private _showAddPlayersDialog: boolean = false;
    @observable private _notificationMessage: string = '';

    get showLoader() {
        return this._showLoader
    }

    set showLoader(value: boolean) {
        this._showLoader = value;
    }

    get notificationMessage() {
        return this._notificationMessage;
    }

    set notificationMessage(message: string) {
        this._notificationMessage = message;
        setTimeout(() => {
            this._notificationMessage = '';
        }, 5000)
    }

    get showAddPlayersDialog() {
        return this._showAddPlayersDialog
    }

    set showAddPlayersDialog(value: boolean) {
        this._showAddPlayersDialog = value;
    }
}

import { observable } from "mobx";
export default class UIStore {
    @observable private _showLoader: boolean = false;

    get showLoader() {
        return this._showLoader
    }

    set showLoader(value: boolean) {
        this._showLoader = value;
    }
}

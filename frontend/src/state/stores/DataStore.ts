import {computed, observable} from "mobx";
import NetworkService from "../../services/NetworkService";
import {IStaticData} from "../../types/IStaticData";

const BOOTSTRAP_STATIC = "http://localhost:3000/dev/getFPLStats";

export default class DataStore {
    @observable private _staticData: IStaticData | undefined = undefined ;
    @observable public isDataLoaded: boolean = false;

    get staticData () {
        return this._staticData;
    }

    @computed
    get allAvailablePlayers () {
        return this._staticData?.elements || [];
    }

    public getAllStats = async () => {
        const response = await NetworkService.get(BOOTSTRAP_STATIC);
        if(response.data) {
            this._staticData = response.data;
            this.isDataLoaded = true;
        }
    }
}

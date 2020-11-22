import * as React from "react";
import {observer} from "mobx-react";
import {stores} from "../state";
import ApplicationView from "../layout/ApplicationView";
import AuthenticationView from "../layout/AuthenticationView";

interface IProps {}

const authStore = stores.authStore

@observer
export default class AppContainer extends React.Component<IProps> {
    public render() {
        return (
            authStore.isLogged? <ApplicationView/> : <AuthenticationView />
        );
    }
}
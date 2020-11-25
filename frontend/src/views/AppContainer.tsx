import * as React from "react";
import {observer} from "mobx-react";
import {stores} from "../state";
import ApplicationView from "../layout/ApplicationView";
import AuthenticationView from "../layout/AuthenticationView";
import {Backdrop, CircularProgress} from "@material-ui/core";

interface IProps {}

const authStore = stores.authStore

@observer
export default class AppContainer extends React.Component<IProps> {
    public render() {
        return (
            <>
                <Backdrop style={{zIndex: 10}} open={stores.uiStore.showLoader} >
                    <CircularProgress color="primary" />
                </Backdrop>
                {authStore.isLogged ? <ApplicationView/> : <AuthenticationView/>}
            </>
        );
    }
}
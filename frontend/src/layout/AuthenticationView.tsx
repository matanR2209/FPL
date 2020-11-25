import * as React from "react";
import SignUpContainer from "../views/SignUp/SignUpContainer";
import SignInContainer from "../views/SignIn/SignInContainer";
import {stores} from "../state";

interface IProps {}

export type CurrentView = 'signIn' | 'signUp';

interface ILocalState {
    currentView: CurrentView
}

const authStore = stores.authStore

export default class AuthenticationView extends React.Component<
    IProps,
    ILocalState
    > {

    public state: ILocalState = {
        currentView: "signIn"
    }

    public render() {
        return (
            <>
                {this.state.currentView === "signIn" ?
                    <SignInContainer
                        changeToSignUp={this.goToSignUp}
                        onSignIn={this.onSignIn}/> :
                    <SignUpContainer
                        changeToSignIn={this.goToSignIn}
                        onSignUp={this.onSignUp}/>}
            </>);
    }

    private onSignUp = (firstName: string, lastName: string, email: string, password: string) => {
        authStore.signUp(firstName, lastName, email, password)
    }

    private onSignIn = async (email: string, password: string) => {
        stores.uiStore.showLoader = true;
        await authStore.onUserLogin(email, password);
        stores.uiStore.showLoader = false;
    }

    private goToSignIn = () => {
        this.setState({...this.state, currentView: "signIn"})
    }

    private goToSignUp = () => {
        this.setState({...this.state, currentView: "signUp"})
    }
}
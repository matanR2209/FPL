import * as React from "react";
import SignUpContainer from "../views/SignUp/SignUpContainer";
import SignInContainer from "../views/SignIn/SignInContainer";
import {stores} from "../state";

interface IProps {}

export type CurrentView = 'signIn' | 'signUp';

interface ILocalState {
    currentView: CurrentView;
    errorMessage?: string;
}

const authStore = stores.authStore

export default class AuthenticationView extends React.Component<
    IProps,
    ILocalState
    > {

    public state: ILocalState = {
        currentView: "signIn",
        errorMessage: undefined
    }

    public render() {
        return (
            <>
                {this.state.currentView === "signIn" ?
                    <SignInContainer
                        errorMessage={this.state.errorMessage}
                        changeToSignUp={this.goToSignUp}
                        onSignIn={this.onSignIn}/> :
                    <SignUpContainer
                        errorMessage={this.state.errorMessage}
                        changeToSignIn={this.goToSignIn}
                        onSignUp={this.onSignUp}/>}
            </>);
    }

    private onSignUp = async (firstName: string, lastName: string, email: string, password: string) => {
        stores.uiStore.showLoader = true;
        const signUpResponse = await authStore.signUp(firstName, lastName, email, password);
        if(signUpResponse.code) {
            this.setState({...this.state, errorMessage: signUpResponse.message})
        } else {
            this.setState({...this.state, errorMessage: undefined})
            console.log(signUpResponse);
            console.log("Get user dara or set basic info for user in DB")
        }
        stores.uiStore.showLoader = false;

    }

    private onSignIn = async (email: string, password: string) => {
        stores.uiStore.showLoader = true;
        const response = await authStore.onUserLogin(email, password);
        console.log(response);
        stores.uiStore.showLoader = false;
    }

    private goToSignIn = () => {
        this.setState({...this.state, currentView: "signIn"})
    }

    private goToSignUp = () => {
        this.setState({...this.state, currentView: "signUp"})
    }
}
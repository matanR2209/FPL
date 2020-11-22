import { observable } from "mobx";
import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserAttribute,
    CognitoUserPool,
    CognitoUserSession
} from "amazon-cognito-identity-js";



const POOL_DATA = {
    UserPoolId: 'us-east-2_NrOtfrhV1',
    ClientId: '55527vl75s36h9oc7rtdk1e7r3'
}
const userPool = new CognitoUserPool(POOL_DATA);

export default class AuthStore {
    @observable public _isLogged: boolean = true;

    get isLogged() {
        return this._isLogged;
    }

    public registeredUser: CognitoUser | undefined = undefined;

    public signUp(firstName: string, lastName: string, email: string, password: string): void {
        const attributeList: CognitoUserAttribute[] = [];

        const firstNameAttribute = {
            Name: 'given_name',
            Value: firstName
        };

        const lastNameAttribute = {
            Name: 'family_name',
            Value: lastName
        }

        attributeList.push(new CognitoUserAttribute(firstNameAttribute), new CognitoUserAttribute(lastNameAttribute));

        userPool.signUp(email, password, attributeList, [], (err, result) => {
            if(err) {
                console.log(err);
                return;
            }else {
                if(result?.user) {
                    console.log(this);
                    this.registeredUser = result?.user;
                    this._isLogged = true;
                }
            }
        });
        return;
    }

    public  signIn(username: string, password: string): void {
        const authData = {
            Username: username,
            Password: password
        };
        const authDetails = new AuthenticationDetails(authData)
        const userData = {
            Username: username,
            Pool: userPool
        };

        const cognitoUser = new CognitoUser(userData);
        cognitoUser.authenticateUser(authDetails, {
            onSuccess: (result: CognitoUserSession) => {
                console.log(result);
                this._isLogged = true;
            },
            onFailure: (err) => {
                console.log(err);
                // this._isLogged = false;
            }
        });
        return;
    }

    public getAuthenticatedUser(): CognitoUser | null {
        return userPool.getCurrentUser();
    }

    public logout() {
        this.getAuthenticatedUser()?.signOut();
        this._isLogged = false
    }

    public  isAuthenticated() {
        const user = this.getAuthenticatedUser();
        if (!user) {
            return false;
        } else {
            user.getSession((err: Error, session: any) => {
                if(err) {
                    console.log(err);
                    return false
                } else {
                    this._isLogged = true;
                    return session.isValid();
                }
            });
        }
    }
}

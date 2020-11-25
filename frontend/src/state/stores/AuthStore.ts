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
const USER_POOL = new CognitoUserPool(POOL_DATA);

export default class AuthStore {
    @observable public _isLogged: boolean = false;

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

        USER_POOL.signUp(email, password, attributeList, [], (err, result) => {
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

    public loginUser = (username: string, password: string) : Promise<CognitoUserSession> => {
        const authData = {
            Username: username,
            Password: password
        };
        const authDetails = new AuthenticationDetails(authData)
        const userData = {
            Username: username,
            Pool: USER_POOL
        };
        const cognitoUser = new CognitoUser(userData);
        return new Promise(function(resolve, reject) {
            cognitoUser.authenticateUser(authDetails, {
                onSuccess: resolve,
                onFailure: reject,
            });
        });
    }

    public onUserLogin = async (username: string, password: string)=> {
        try {
            const output: CognitoUserSession = await this.loginUser(username, password);
            if(output.getAccessToken()) {
                this._isLogged = true;
                return output;
            } else {
                console.log(output);
                return false
            }
        } catch(e) {
            console.log(e);
        }
    }

    public getAuthenticatedUser(): CognitoUser | null {
        return USER_POOL.getCurrentUser();
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

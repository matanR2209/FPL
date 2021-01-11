import { observable } from "mobx";
import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserAttribute,
    CognitoUserPool,
    CognitoUserSession, ISignUpResult
} from "amazon-cognito-identity-js";



const POOL_DATA = {
    UserPoolId: 'us-east-2_NrOtfrhV1',
    ClientId: '55527vl75s36h9oc7rtdk1e7r3'
}
const USER_POOL = new CognitoUserPool(POOL_DATA);

export default class AuthStore {
    @observable public _isLogged: boolean = false;
    private _accessToken: string = '';
    private _username: string | undefined = undefined;

    get isLogged() {
        return this._isLogged;
    }

    get accessToken() {
        return this._accessToken;
    }

    get username() {
        return this._username;
    }

    public registeredUser: CognitoUser | undefined = undefined;

    public signUp = async (firstName: string, lastName: string, email: string, password: string): Promise<any> => {
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
        return await this.signUpUser(email, password, attributeList);
    }

    public onUserLogin = async (username: string, password: string)=> {
        try {
            const cognitoUserSession: CognitoUserSession = await this.loginUser(username, password);
            if(cognitoUserSession.getAccessToken()) {
                this._isLogged = true;
                this._accessToken = cognitoUserSession.getAccessToken().getJwtToken();
                return cognitoUserSession;

            } else {
                console.log(cognitoUserSession);
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

    private signUpUser = (email: string, password: string, attributeList: CognitoUserAttribute[]) => {
        try{
            return new Promise((resolve, reject) => {
                USER_POOL.signUp(email, password, attributeList, [], (err: Error | undefined, result: ISignUpResult | undefined) => {
                    if (err) {
                        console.log(err.message);
                        resolve(err);
                    } else {
                        this._isLogged = true;
                        console.log(result?.user);
                        this._username = result?.user.getUsername()
                        resolve(result?.user)
                    }
                });
            });
        } catch (e) {
            console.log(e)
        }
    }

    private loginUser = (username: string, password: string) : Promise<CognitoUserSession> => {
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
}

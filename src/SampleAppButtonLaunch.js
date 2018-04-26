import * as React from 'react';
import { AzureAD, LoginType } from 'react-aad-msal';

class SampleAppButtonLaunch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: null
        }

        this.userJustLoggedIn = this.userJustLoggedIn.bind(this);
    }

    unauthenticatedFunction(loginFunction) {
        return (
            <button onClick={loginFunction}>Login with popup</button>
        );
    }

    userJustLoggedIn(receivedUserInfo) {
        this.setState({ userInfo: receivedUserInfo })
    }

    render() {
        return (
            <AzureAD
                clientID={process.env.REACT_APP_AAD_APP_CLIENT_ID}
                graphScopes={[]}
                authority={process.env.REACT_APP_AUTHORITY}
                type={LoginType.Popup}
                unauthenticatedFunction={this.unauthenticatedFunction}
                userInfoCallback={this.userJustLoggedIn}>
                <div>
                    You're logged in!
                    <br />
                    {this.state.userInfo}
                </div>
            </AzureAD>
        );
    }
}

export default SampleAppButtonLaunch;
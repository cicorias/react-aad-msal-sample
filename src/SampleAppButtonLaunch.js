import * as React from 'react';
import { AzureAD, LoginType } from 'react-aad-msal';
import { basicReduxStore } from './reduxStore';

const buttonStyle = {
    backgroundColor: "#00a1f1",
    border: "none",
    color: "white",
    display: "inline-block",
    padding: "15px",
    fontSize: "15px",
    cursor: "pointer",
};

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
            <button style={buttonStyle} onClick={loginFunction}>Login</button>
        );
    }

    userJustLoggedIn(receivedUserInfo) {
        this.setState({ userInfo: receivedUserInfo })
    }

    render() {
        console.log("REDUX", basicReduxStore.getState())
        return (
            <AzureAD
                clientID={process.env.REACT_APP_AAD_APP_CLIENT_ID}
                graphScopes={[]}
                authority={process.env.REACT_APP_AUTHORITY}
                type={LoginType.Popup}
                unauthenticatedFunction={this.unauthenticatedFunction}
                userInfoCallback={this.userJustLoggedIn}
                reduxStore={basicReduxStore}>
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
import * as React from 'react';
import {AzureAD, LoginType} from 'react-aad-msal';

class SampleAppRedirectOnLaunch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        userInfo: null
    }
  }
  
  setUserInfo = userInfo => {
    this.setState({userInfo: userInfo});
  };

  redirect = login => {
    login();
    return (<div>Redirecting...</div>);
  };

  render() {
    return (
      <AzureAD
        clientID={process.env.REACT_APP_AAD_APP_CLIENT_ID}
        graphScopes={[]}
        authority={process.env.REACT_APP_AUTHORITY}
        type={LoginType.Redirect}
        unauthenticatedFunction={this.redirect}
        userInfoCallback={this.setUserInfo}>
        <div>
          You're logged in!
          <br />
          {this.state.userInfo}
        </div>
      </AzureAD>
      );
  }
}

export default SampleAppRedirectOnLaunch;
import * as React from 'react';
import * as AAD from 'react-aad-msal';

class SampleAppRedirectOnLaunch extends React.Component {

  setUserInfo = userInfo => {
    this.props.debugInfo = userInfo;
  };

  redirect = login => {
    login();
    return (<div>redirected!</div>);
  };

  render() {
    if (!this.props.enabled) {
      return (<div />);
    }

    return (
      <AAD.AzureAD
        clientId={process.env.REACT_APP_AAD_APP_CLIENT_ID}
        graphScopes={[]}
        authority={process.env.REACT_APP_AUTHORITY}
        type={AAD.LoginType.Redirect}
        unauthenticatedFunction={this.redirect}
        userInfoCallback={this.setUserInfo}>
        <div>logged in!</div>
      </AAD.AzureAD>
      );
  }
}

export default SampleAppRedirectOnLaunch;
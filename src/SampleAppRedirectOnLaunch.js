import * as React from 'react';
import * as AAD from 'react-aad-msal';

class SampleAppRedirectOnLaunch extends React.Component {

  setUserInfo = userInfo => {
    this.props.debugInfo = userInfo;
  };

  redirect = login => {
    login();
    return (<div />);
  };

  render() {
    return (
      <AAD.AzureAD
        clientId=""
        graphScopes=""
        authority=""
        type={AAD.LoginTypes.Redirect}
        unauthenticatedFunction={this.redirect}
        userInfoCallback={this.setUserInfo}>
        <div>logged in!</div>
      </AAD.AzureAD>
      );
  }
}

export default SampleAppRedirectOnLaunch;
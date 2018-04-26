import React, { Component } from 'react';
import './App.css';
import SampleAppButtonLaunch from './SampleAppButtonLaunch';
import SampleAppRedirectOnLaunch from './SampleAppRedirectOnLaunch';

class App extends Component {
  
  constructor(props) {
    super(props);
    var redirectOnLoad = localStorage.getItem("redirectOnLoad") || false;
    this.state ={
      redirectOnLoad: redirectOnLoad,
      redirectCheckbox: false
    };

    if (redirectOnLoad) {
      localStorage.removeItem("redirectOnLoad");
    }
  }

  handleCheck = () => {
    localStorage.setItem("redirectOnLoad", !this.state.redirectCheckbox);
    this.setState({redirectCheckbox: !this.state.redirectCheckbox});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to react-aad-msal-samples</h1>
        </header>
        <div className="SampleContainer">
          <div className="SampleBox">
            <h2 className="SampleHeader">Button Login</h2>
            <p>This example will launch a popup dialog to allow for authentication
              with Azure Active Directory</p>
            <SampleAppButtonLaunch />
          </div>
          <div className="SampleBox">
            <h2 className="SampleHeader">Automatic Redirect</h2>
            <p>This example shows how you can use the AzureAD component to redirect 
              the login screen automatically on page load. Click the checkbox below 
              to enable the redirect and refresh your browser window.
            </p>
            <input type="checkbox" defaultChecked={this.state.redirectCheckbox} onChange={this.handleCheck} /> Enable redirect
            <SampleAppRedirectOnLaunch enabled={this.state.redirectOnLoad}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

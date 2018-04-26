import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SampleAppButtonLaunch from './SampleAppButtonLaunch';
import SampleAppRedirectOnLaunch from './SampleAppRedirectOnLaunch';

class App extends Component {
  
  constructor(props) {
    super(props);
    var redirectOnLoad = localStorage.getItem("redirectOnLoad") || false;
    this.state ={
      redirectOnLoad: redirectOnLoad,
      redirectOnLaunchEnabled: false
    };

    if (redirectOnLoad) {
      localStorage.removeItem("redirectOnLoad");
    }
  }

  handleCheck = () => {
    localStorage.setItem("redirectOnLoad", !this.state.redirectOnLaunchEnabled);
    this.setState({redirectOnLaunchEnabled: !this.state.redirectOnLaunchEnabled});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to react-aad-msal-samples</h1>
        </header>
        <div>
          <p>Place instructions here</p>
        </div>
          <div>
            <SampleAppButtonLaunch />
          </div>
          <div>
            <input type="checkbox" defaultChecked={this.state.redirectOnLaunchEnabled} onChange={this.handleCheck} /> 
            Check this box and refresh the page to redirect to a login page on page load!
            <SampleAppRedirectOnLaunch enabled={this.state.redirectOnLoad}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

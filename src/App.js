import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SampleAppButtonLaunch from './SampleAppButtonLaunch';
import SampleAppRedirectOnLaunch from './SampleAppRedirectOnLaunch';

class App extends Component {
  
  state = {
    isAuthenticated: false
  };

  debugInfo = () => {
    this.setState({isAuthenticated:true});
  };

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
        { !this.state.isAuthenticated && <div>
          <div>
            <SampleAppButtonLaunch debugInfo={this.debugInfo}/>
          </div>
          <div>
            <SampleAppRedirectOnLaunch debugInfo={this.debugInfo}/>
          </div>
        </div>}
      </div>
    );
  }
}

export default App;

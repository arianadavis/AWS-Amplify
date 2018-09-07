import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from 'aws-amplify-react'
import { Analytics } from 'aws-amplify'

class App extends Component {

  recordEvent = () => {
      console.log('about to record event!')
      Analytics.record({
          name: 'Test Event 1',
          attributes: {
              username: 'yourmobilegeek'

          }
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.recordEvent}>
          Record Event
        </button>
      </div>
    );
  }
}

export default withAuthenticator (App);

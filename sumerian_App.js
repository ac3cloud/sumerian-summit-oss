import Amplify, { XR } from 'aws-amplify';
import aws_exports from './aws-exports';
import React, { Component } from 'react';
import './App.css';
import { SumerianScene } from 'aws-amplify-react';
import scene_config from './sumerian_exports';
import AWS from 'aws-sdk';

new AWS.Polly();

XR.configure({ // XR category configuration
  SumerianProvider: { // Sumerian-specific configuration
    region: 'ap-southeast-2', // Sumerian scene region
    scenes: {
      "SumerianAmplify": {   // Friendly scene name
          sceneConfig: scene_config // Scene JSON configuration
        },
    }
  }
});

Amplify.configure(aws_exports);

class App extends Component {

  sayhiChristine = () => {
    const { speechComponent: { speeches } } = window.host.context.entity;
    const speech = speeches.find(s => s.name === 'sayhi');
    speech.play('sayhi');
  }

  clapChristine = () => {
    const { id } = window.host.context.entity;
    const { SystemBus } = window.sumerian;

    SystemBus.emit(`${id}.emoteEvent`, 'applause');
  }

  render() {
    return (
      <div>
        <div style={{height: '600px'}} /* SumerianScene inherits its parent size */ >
          <SumerianScene sceneName='SumerianAmplify' />
        </div>
        <div>
          <button onClick={this.clapChristine}>
            Clap
          </button>
        </div>
        <div>
          <button onClick={this.sayhiChristine}>
            Say Hi
          </button>
        </div>
      </div>
    );
  }
}

export default App;

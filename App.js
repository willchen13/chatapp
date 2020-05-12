import React from 'react';

import Home from './src/components/Home.js';
import Chat from './src/components/Chat.js';

import {Router, Scene} from 'react-native-router-flux';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" />
      <Scene key="chat" component={Chat} title="Home" />
    </Scene>
  </Router>
);

export default App;

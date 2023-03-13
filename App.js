import {View, Text, Switch} from 'react-native';
import React from 'react';
import StaticScreen from './components/StaticScreen';
import {store} from './app/store';
import Darkmode from './components/Darkmode';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StaticScreen />
      <Darkmode />
    </Provider>
  );
};

export default App;

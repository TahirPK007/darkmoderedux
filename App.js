import {View, Text, Switch} from 'react-native';
import React from 'react';
import StaticScreen from './components/StaticScreen';
import {Provider} from 'react-redux';
import {store} from './app/store';
import Darkmode from './components/Darkmode';


const App = () => {

  
  return (
    <Provider store={store}>
      <StaticScreen />
      <Darkmode />
    </Provider>
  );
};

export default App;

import {View, Text, Switch} from 'react-native';
import React, {useState, useEffect} from 'react';

const Darkmode = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Text style={{color: 'white'}}>Darkmode</Text>
      <Switch
        style={{backgroundColor: 'white', color: 'white'}}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default Darkmode;

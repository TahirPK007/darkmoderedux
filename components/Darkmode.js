import {View, Text, Switch} from 'react-native';
import React, {useState, useEffect} from 'react';

const Darkmode = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{}}>
      <Text style={{color: 'white'}}>Darkmode</Text>
      <View>
        <Switch
          style={{height: 50, justifyContent: 'center', alignItems: 'center'}}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default Darkmode;

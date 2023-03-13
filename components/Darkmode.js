import {View, Text, Switch, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

const Darkmode = () => {
  return (
    <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
        <TouchableOpacity style={{backgroundColor: 'black'}}>
          <Text style={{color: 'white'}}>Light-Mode</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
        <TouchableOpacity style={{backgroundColor: 'black'}}>
          <Text style={{color: 'white'}}>Dark-Mode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Darkmode;

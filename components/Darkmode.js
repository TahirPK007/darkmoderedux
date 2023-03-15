import {View, Text, Switch, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {theme} from '../src/darkmodeSlice';
const Darkmode = () => {
  const dispatch = useDispatch();
  return (
    <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
        <TouchableOpacity
          style={{backgroundColor: 'black'}}
          onPress={() => {
            dispatch(theme({a: 'black', b: 'white'}));
          }}>
          <Text style={{color: 'white'}}>Light-Mode</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
        <TouchableOpacity
          style={{backgroundColor: 'black'}}
          onPress={() => {
            dispatch(theme({a: 'white', b: 'black'}));
          }}>
          <Text style={{color: 'white'}}>Dark-Mode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Darkmode;

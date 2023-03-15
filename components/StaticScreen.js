import {View, Text} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const StaticScreen = () => {
  const clr = useSelector(state => state.theme.clr);
  const bgclr = useSelector(state => state.theme.bgclr);
  console.log(clr, 'color');
  console.log(bgclr, 'bgclr');
  return (
    <View style={{backgroundColor: bgclr, height: '70%'}}>
      <Text style={{textAlign: 'center', fontSize: 50, color: clr}}>Essay</Text>
      <Text style={{color: clr,fontSize:20}}>
        A cow is a domestic animal. Cows are one of the most innocent animals
        who are very harmless. People keep cows at their homes for various
        benefits. Cows are four-footed and have a large body. It has two horns,
        two eyes plus two ears and one nose and a mouth. A cow is a domestic
        animal. Cows are one of the most innocent animals who are very harmless.
        People keep cows at their homes for various benefits. Cows are
        four-footed and have a large body. It has two horns, two eyes plus two
        ears and one nose and a mouth. A cow is a domestic animal. Cows are one
        of the most innocent animals who are very harmless. People keep cows at
        their homes for various benefits. Cows are four-footed and have a large
        body. It has two horns, two eyes plus two ears and one nose and a mouth.
      </Text>
    </View>
  );
};

export default StaticScreen;

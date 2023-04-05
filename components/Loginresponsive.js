import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useSelector, useDispatch} from 'react-redux';
import {toggletheme} from '../src/darkSlice';

const Loginresponsive = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.dark.theme);
  console.log(theme);
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme === 'dark' ? 'black' : 'white',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: responsiveFontSize(4),
            fontWeight: 'bold',
            marginTop: responsiveHeight(4),
            color: theme === 'dark' ? 'white' : 'black',
          }}>
          Dark Theme
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: responsiveFontSize(3),
            color: theme === 'dark' ? 'white' : 'black',
            marginTop: responsiveHeight(8),
            fontWeight: 'bold',
          }}>
          Login
        </Text>
        <TextInput
          style={{
            borderWidth: responsiveWidth(0.2),
            borderRadius: responsiveWidth(3),
            width: responsiveWidth(90),
            alignSelf: 'center',
            marginTop: responsiveHeight(8),
            paddingLeft: responsiveWidth(4),
            fontSize: responsiveFontSize(2),
            height: responsiveHeight(8),
            borderColor: theme === 'dark' ? 'white' : 'black',
          }}
          placeholder="Email Id"
          placeholderTextColor={theme === 'dark' ? 'white' : 'black'}
        />
        <TextInput
          style={{
            borderWidth: responsiveWidth(0.2),
            borderRadius: responsiveWidth(3),
            width: responsiveWidth(90),
            alignSelf: 'center',
            marginTop: responsiveHeight(3),
            paddingLeft: responsiveWidth(4),
            fontSize: responsiveFontSize(2),
            height: responsiveHeight(8),
            borderColor: theme === 'dark' ? 'white' : 'black',
          }}
          placeholder="Passowrd"
          placeholderTextColor={theme === 'dark' ? 'white' : 'black'}
        />
        <Text
          style={{
            color: theme === 'dark' ? 'white' : 'black',
            alignSelf: 'flex-end',
            fontSize: responsiveFontSize(2),
            marginTop: responsiveHeight(2),
            marginRight: responsiveHeight(3),
            fontWeight: '600',
          }}>
          Forgot Password?
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            height: responsiveHeight(8),
            width: responsiveWidth(90),
            alignSelf: 'center',
            borderRadius: responsiveWidth(4),
            marginTop: responsiveHeight(3),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: theme === 'dark' ? 'white' : 'black',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: responsiveFontSize(2.5),
              fontWeight: '600',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: responsiveHeight(3),
            fontSize: responsiveFontSize(2),
            fontWeight: '600',
            color: theme === 'dark' ? 'white' : 'black',
          }}>
          Create New Account
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            height: responsiveHeight(7),
            width: responsiveWidth(90),
            alignSelf: 'center',
            borderRadius: responsiveWidth(2),
            marginTop: responsiveHeight(2),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: theme === 'dark' ? 'white' : 'black',
          }}
          onPress={() => {
            if (theme === 'dark') {
              dispatch(toggletheme('light'));
            } else {
              dispatch(toggletheme('dark'));
            }
          }}>
          <Text
            style={{
              color: theme === 'dark' ? 'white' : 'black',
              fontSize: responsiveFontSize(2),
              fontWeight: '600',
            }}>
            {theme === 'dark' ? 'Apply Light Theme' : 'Apply Dark Theme'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            height: responsiveHeight(7),
            width: responsiveWidth(90),
            alignSelf: 'center',
            borderRadius: responsiveWidth(2),
            marginTop: responsiveHeight(2),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: theme === 'dark' ? 'white' : 'black',
          }}>
          <Text
            style={{
              color: theme === 'dark' ? 'white' : 'black',
              fontSize: responsiveFontSize(2),
              fontWeight: '600',
            }}>
            Change Language
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Loginresponsive;

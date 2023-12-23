import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {MainColor} from '../../Value/Color';
import {getTabBarHeight} from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';

const Textinput = ({lable, onChangeText}) => {
  return (
    <>
      <TextInput
        label={lable}
        style={{
          backgroundColor: 'white',
          borderBottomColor: MainColor,
          marginVertical: 10,
        }}
        underlineStyle={{backgroundColor: MainColor}}
        underlineColor={MainColor}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default Textinput;

const styles = StyleSheet.create({});

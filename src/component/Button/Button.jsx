import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({btntext, customstyle, customsTextstyle, onSubmit}) => {
  return (
    <TouchableOpacity
      onPress={() => onSubmit()}
      style={[
        {
          backgroundColor: '#F5E9D8',
          padding: 10,
          alignItems: 'center',
          borderRadius: 10,
        },
        customstyle,
      ]}>
      <Text
        style={[
          {
            color: 'black',
            fontSize: 14,
            fontWeight: '700',
            textTransform: 'uppercase',
          },
          customsTextstyle,
        ]}>
        {btntext}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});

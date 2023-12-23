import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MainColor} from '../../Value/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import {Profile} from '../../assets/image';
const Header = ({customComponent, title = 'title'}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          backgroundColor: MainColor,
          height: 60,
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        customComponent,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Pressable>
          <Entypo name="menu" size={28} color="white" />
        </Pressable>
        <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
      </View>
      <Pressable>
        <Image source={Profile} style={{width: 24, height: 24}} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import {Profile, logo} from '../../assets/image';
import HomeProfile from '../../component/HomeProfile';
import HomeGridSection from '../../component/HomeGrid';
import {Homegrid} from '../../Value/Homegrid';

const Dashbord = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={{flex: 1}}>
      <Header title="Dashbord" />
      <HomeProfile />
      <View style={{marginHorizontal: 10, marginVertical: 20}}>
        <HomeGridSection data={Homegrid} />
      </View>
    </View>
  );
};

export default Dashbord;

const styles = StyleSheet.create({});

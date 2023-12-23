import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {Profile, logo} from '../../assets/image';
import LinearGradient from 'react-native-linear-gradient';

const HomeProfile = ({
  Name = 'PRADEEP KUMAR SINGH CHAUHAN',
  Id = 'S27383H8883',
}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <ImageBackground source={logo} imageStyle={{resizeMode: 'cover'}}>
        <LinearGradient
          colors={['#000000b3', '#ef8e0185']}
          style={{
            width: '100%',
            height: height / 4.3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Profile} style={{width: 50, height: 50}} />
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <Text style={{color: 'white'}}>{Name}</Text>
            <Text style={{color: 'white'}}>{Id}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({});

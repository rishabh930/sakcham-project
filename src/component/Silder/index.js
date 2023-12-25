import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Megaphone} from '../../assets/image';
import {MainColor} from '../../Value/Color';
const Slider = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={{alignItems: 'center', marginVertical: 10}}>
      <Carousel
        loop
        width={width}
        height={90}
        style={{}}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'white',
              marginHorizontal: 10,
              elevation: 5,
              borderRadius: 8,
              marginVertical: 2,
            }}>
            <View
              style={{
                //   borderWidth: 1,

                width: 200,
              }}>
              <View
                style={{
                  backgroundColor: MainColor,
                  width: 80,
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                }}>
                <Image
                  source={Megaphone}
                  style={{width: 50, height: 50, resizeMode: 'contain'}}
                />
              </View>
              {/* <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text> */}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});

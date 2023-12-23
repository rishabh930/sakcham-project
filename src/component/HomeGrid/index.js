import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
const {hight, width} = Dimensions.get('window');
const HomeGridSection = ({data}) => {
  const getBorderRadius = index => {
    switch (index) {
      case 0:
        return {
          borderTopLeftRadius: 10,
        };
      case 2:
        return {
          borderTopRightRadius: 10,
        };
      case 6:
        return {
          borderBottomLeftRadius: 10,
        };
      case 8:
        return {
          borderBottomRightRadius: 10,
        };
      default:
        return {};
    }
  };
  const innerBorderStyles = {
    0: {borderWidth: 0.8, borderColor: 'grey'},
    1: {borderTopWidth: 0.8, borderBottomWidth: 0.8, borderColor: 'grey'},
    2: {borderWidth: 0.8, borderColor: 'grey'},
    3: {borderLeftWidth: 0.8, borderRightWidth: 0.8, borderColor: 'grey'},
    5: {borderLeftWidth: 0.8, borderRightWidth: 0.8, borderColor: 'grey'},
    6: {borderWidth: 0.8, borderColor: 'grey'},
    7: {borderTopWidth: 0.8, borderBottomWidth: 0.8, borderColor: 'grey'},
    8: {borderWidth: 0.8, borderColor: 'grey'},
  };
  return (
    <View
      style={[
        {justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'},
      ]}>
      {data?.map((el, index) => (
        <View
          style={[
            styles.container,
            getBorderRadius(index),
            innerBorderStyles[index],
          ]}>
          <Image source={el?.image} style={{width: 30, height: 30}} />
          <Text style={styles.gridText}>{el?.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default HomeGridSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width / 3.3,
    height: 120,
    gap: 10,

    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridText: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'black',
  },
});

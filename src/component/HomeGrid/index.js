import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {Grey} from '../../Value/Color';
import {useNavigation} from '@react-navigation/native';
const {hight, width} = Dimensions.get('window');
const HomeGridSection = ({data}) => {
  const navigation = useNavigation();
  const getBorderRadius = index => {
    switch (index) {
      case 0:
        return {
          borderTopLeftRadius: 8,
        };
      case 2:
        return {
          borderTopRightRadius: 8,
        };
      case 6:
        return {
          borderBottomLeftRadius: 8,
        };
      case 8:
        return {
          borderBottomRightRadius: 8,
        };
      default:
        return {};
    }
  };
  const innerBorderStyles = {
    0: {borderWidth: 0.6, borderColor: Grey},
    1: {borderTopWidth: 0.6, borderBottomWidth: 0.6, borderColor: Grey},
    2: {borderWidth: 0.6, borderColor: Grey},
    3: {borderLeftWidth: 0.6, borderRightWidth: 0.6, borderColor: Grey},
    5: {borderLeftWidth: 0.6, borderRightWidth: 0.6, borderColor: Grey},
    6: {borderWidth: 0.6, borderColor: Grey},
    7: {borderTopWidth: 0.6, borderBottomWidth: 0.6, borderColor: Grey},
    8: {borderWidth: 0.6, borderColor: Grey},
  };
  return (
    <View style={[{flexDirection: 'row', flexWrap: 'wrap', elevation: 3}]}>
      {data?.map((el, index) => (
        <Pressable
          style={[
            styles.container,
            getBorderRadius(index),
            innerBorderStyles[index],
          ]}
          onPress={() => {
            navigation.navigate(el?.landingPage);
          }}>
          <Image source={el?.image} style={{width: 30, height: 30}} />
          <Text style={styles.gridText}>{el?.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default HomeGridSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width / 3.3,
    height: 100,
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

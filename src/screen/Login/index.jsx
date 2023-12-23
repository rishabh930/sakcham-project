import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../component/Header';
import Textinput from '../../component/TextInput';
import CustomButton from '../../component/Button/Button';

const Login = ({navigation}) => {
  const [input, setInput] = useState({
    emailid: '',
    password: '',
  });
  const handleEmailInput = value => {
    setInput({emailid: value, password: input.emailid});
  };
  const handlePasswordInput = value => {
    setInput({emailid: input.emailid, password: value});
  };
  const onSubmit = () => {
    if (input.emailid.length > 3 && input.password.length > 3) {
      navigation.navigate('Dashbord');
    }
  };
  return (
    <View style={{marginHorizontal: 20, flex: 1}}>
      <View style={{marginVertical: 20}}>
        <Image
          source={require('../../assets/image/sakcham.jpeg')}
          style={styles.logoImges}
        />
        <Text style={styles?.textheding}>
          Welcome to Sakcham Infraventures Pvt. Ltd.
        </Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <Textinput lable={'Email LoginId'} onChangeText={handleEmailInput} />
        <Textinput lable={'password'} onChangeText={handlePasswordInput} />
      </View>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <CustomButton
          btntext={'Login now'}
          customstyle={{
            width: 200,
          }}
          onSubmit={onSubmit}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoImges: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 5,
    resizeMode: 'contain',
  },
  textheding: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    marginTop: 20,
  },
});

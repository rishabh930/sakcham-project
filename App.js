import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Dashbord from './src/screen/Dashbord';
import Login from './src/screen/Login';
import {MainColor} from './src/Value/Color';
import MyDirect from './src/screen/MyDirect';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={MainColor} />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashbord"
          component={Dashbord}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyDirect"
          component={MyDirect}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

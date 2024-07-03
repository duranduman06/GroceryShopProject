import { StyleSheet} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstIntroScreen, SecondIntroScreen,ThirdIntroScreen} from '../screens/IntroScreens';
import MainTabNavigator from '../screens/MainTabNavigator';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='FirstIntro' screenOptions={{headerShown: false}}>
      <Stack.Screen name="FirstIntro" component={FirstIntroScreen} />
      <Stack.Screen name="SecondIntro" component={SecondIntroScreen}/>
      <Stack.Screen name="ThirdIntro" component={ThirdIntroScreen}/>
      <Stack.Screen name="MainTab" component={MainTabNavigator}/>
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
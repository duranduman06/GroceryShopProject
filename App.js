import {SafeAreaView} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstIntroScreen, SecondIntroScreen, ThirdIntroScreen } from './screens/IntroScreens';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='FirstIntro' screenOptions={{headerShown: false}}>
            <Stack.Screen name="FirstIntro" component={FirstIntroScreen} />
            <Stack.Screen name="SecondIntro" component={SecondIntroScreen}/>
            <Stack.Screen name="ThirdIntro" component={ThirdIntroScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  )
}
export default App;
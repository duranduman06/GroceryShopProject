import {SafeAreaView} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from './components/Navigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator />
    </SafeAreaView>
  );
};
export default App;
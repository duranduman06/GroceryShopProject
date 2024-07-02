import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Tab.Navigator initialRouteName='HomePage' screenOptions={{
        tabBarActiveTintColor: '#fceebb',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: '15%',
          backgroundColor: '#fdbb5d',
          justifyContent: 'center',
          alignItems:'center',
          borderColor:'#fdbb5d',
        },
        tabBarLabelStyle: {
          color: 'white',
          fontSize: 16,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: '15%',
        },
      }}>
        <Tab.Screen
          name="HomePage" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
            <View style={styles.iconWrapper}>
              <AntDesign name="home" size={35} color={color} style={{textAlign:'center'}}/>
              <Text style={{ color }}>Home</Text>
            </View>
            ),
          }} 
        />
        <Tab.Screen
          name="FavoritePage"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
            <View>
              <Ionicons name="heart-outline" size={35} color={color} style={{textAlign:'center'}}/>
              <Text style={{ color }}>Favorite</Text>
            </View>
            ),
          }} 
        />
        <Tab.Screen 
          name="MyCartPage" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
            <View>
              <FontAwesome6 name="basket-shopping" size={35} color={color} style={{textAlign:'center'}}/>
              <Text style={{ color }}>My Cart</Text>
            </View>
            ),
          }} 
        />
        <Tab.Screen
          name="ProfilePage" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
            <View>
              <MaterialCommunityIcons name="account" size={35} color={color} style={{textAlign:'center'}}/>
              <Text style={{ color,}}>Profile</Text>
            </View>
            ),
          }} 
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
export default MainTabNavigator;

const styles = StyleSheet.create({
    iconWrapper : {
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center'
    },
});
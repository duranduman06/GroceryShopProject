import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PhoneHeight, PhoneWidth } from '../constants/config';
import IntroButton from '../components/IntroButton';
import IntroImageSlider from '../components/IntroImageSlider';

export const FirstIntroScreen = ({ navigation }) => (
  <LinearGradient style={styles.gradientBackGround}  colors={['#eff9d4','#f3f8e1','#fdf7e9', '#f9f1de']}>
  <SafeAreaView style={styles.container}>
    <IntroImageSlider/>
    <View style={styles.contentContainer}>
      <Text style={styles.introHeader}>Grocery Shop</Text>
      <Text style={styles.introText}>Explore the easiest way to shop for groceries.</Text>
      <IntroButton title="Continue" route="SecondIntro" navigation={navigation} />
    </View>
  </SafeAreaView>
  </LinearGradient>
);

export const SecondIntroScreen = ({ navigation }) => (
  <LinearGradient style={styles.gradientBackGround}  colors={['#eff9d4','#f3f8e1','#fdf7e9', '#f9f1de']}>
  <SafeAreaView style={styles.container}>
  <IntroImageSlider/>
    <View style={styles.contentContainer}>
      <Text style={styles.introHeader}>Grocery Shop</Text>
      <Text style={styles.introText}>Find everything you need for your grocery shopping</Text>
      <IntroButton title="Continue" route="ThirdIntro" navigation={navigation} />
    </View>
  </SafeAreaView>
  </LinearGradient>
);

export const ThirdIntroScreen = ({ navigation }) => (
  <LinearGradient style={styles.gradientBackGround}  colors={['#eff9d4','#f3f8e1','#fdf7e9', '#f9f1de']}>
  <SafeAreaView style={styles.container}>
    <IntroImageSlider/>
    <View style={styles.contentContainer}>
      <Text style={styles.introHeader}>Grocery Shop</Text>
      <Text style={styles.introText}>The easiest way to buy your grocery shopping</Text>
      <IntroButton title="Get Started" route="MainTab" navigation={navigation} />
    </View>
  </SafeAreaView>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: PhoneHeight * 0.08,
  },
  contentContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  gradientBackGround: {
    flex:1,
    width:'100%',
  },
  introHeader: {
    fontSize : 34,
    fontWeight: '700',
    color: 'black',
    textAlign:'center',
  },
  introText: {
    color:'grey',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 10,
    marginBottom: 10,
    paddingHorizontal: PhoneWidth * 0.15,
  },
})
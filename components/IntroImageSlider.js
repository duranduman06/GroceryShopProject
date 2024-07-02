import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import {FlatListSlider} from 'react-native-flatlist-slider';
import { PhoneHeight, PhoneWidth } from '../constants/config';

const images = [
   {
     image: require('../assets/580b57fcd9996e24bc43c181.png'),
   },
   {
     image: require('../assets/580b57fcd9996e24bc43c227.png'),
   },
   {
     image: require('../assets/580b57fcd9996e24bc43c1a7.png'),
   }
]

const IntroImageSlider = () => {
  return (
    <View style={styles.container}>
     <FlatListSlider
      data={images}
      imageKey={'image'}
      timer={3000}
      local
      indicatorActiveColor={'#636261'}
      indicatorActiveWidth={20}
      indicatorContainerStyle={{marginBottom: PhoneHeight * 0.03}}
      component={<Preview />}
      animation
     />
    </View>
  )
}
export default IntroImageSlider;

const Preview = ({ item }) => {
  return (
    <View style={styles.previewContainer}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: PhoneWidth,
    height: PhoneHeight * 0.5,
    backgroundColor: 'transparent',
    },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
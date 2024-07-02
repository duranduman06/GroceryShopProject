import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PhoneHeight, PhoneWidth } from '../constants/config';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Product = ({item}) => {
  return (
    <View style={styles.product}>
      <Image source={item.image} style={styles.image} resizeMode='contain'/>
      <View style={styles.textContainer}>
        <Text style={styles.productText}>{item.title}</Text>
      </View>
      <View style={styles.rateContainer}>
          <AntDesign name="star" size={25} style={styles.starUnselected} />
          <AntDesign name="star" size={25} style={styles.starUnselected} />
          <AntDesign name="star" size={25} style={styles.starUnselected} />
          <AntDesign name="star" size={25} style={styles.starUnselected} />
          <AntDesign name="star" size={25} style={styles.starUnselected} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productText}>{item.price+'/'+item.unit}</Text>
      </View>
    </View>
  );
};
export default Product;

const styles = StyleSheet.create({
  product: {
    alignItems:'center',
    borderWidth: 1,
    borderColor:'#faf8f2',
    backgroundColor:'#faf8f2',
    height: PhoneHeight * 0.3,
    width: PhoneHeight * 0.20,
    borderRadius: PhoneHeight * 0.03,
    margin: 10,
    paddingTop: 20,
    padding:5,
    elevation: 2,
  },
  image: {
    width: '90%',
    height: '50%',
    borderRadius: PhoneHeight * 0.03,
    marginBottom: 5,
  },
  textContainer:{
    flex: 1,
    width: '80%',
    height: '30%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  productText:{
    color:'black',
    fontSize: PhoneWidth * 0.045,
    fontWeight: '600',
    marginBottom: 5,
  },
  rateContainer:{
    width:'83%',
    height: '20%',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
  starUnselected: {
    color: '#ffd700',
    marginRight: 2,
  },
});
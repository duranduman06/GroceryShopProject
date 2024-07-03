import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PhoneHeight, PhoneWidth } from '../constants/config';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Product = ({item, data}) => {
  const navigation = useNavigation();
  const [isFavorited, setIsFavorited] = useState(false);

  const renderStars = (starCount)=>{
    let stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<AntDesign key={i} name="star" size={23} style={styles.starRate} />);
    }
    return stars;
  };
  
  const pressFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  
  const goToProductDetail = () => { // Detaylar Sayfasına İlerle.
    navigation.navigate('ProductDetail', { itemSent: item, dataSent: data });
  };

  return (
    <TouchableOpacity onPress={goToProductDetail}>
    <View style={styles.product}>
      <Image source={item.image} style={styles.image} resizeMode='contain'/>
      <View style={styles.textContainer}>
        <Text style={styles.productText}>{item.title}</Text>
      </View>
      <View style={styles.rateContainer}>
          {renderStars(parseInt(item.star))}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productText}>{item.price+'/'+item.unit}</Text>
      </View>

      {isFavorited ?
      <View style={styles.pressedFavContainer}>  
        <AntDesign name="heart" size={23} style={[styles.favoriteButton,styles.pressedFavorite]} onPress={pressFavorite}/>
      </View>
      :
      <View style={styles.unpressedFavContainer}> 
        <AntDesign name="heart" size={23} style={[styles.favoriteButton,styles.unpressedFavorite]} onPress={pressFavorite}/>
      </View>}
    </View>
    </TouchableOpacity>
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
    width: PhoneHeight * 0.21,
    borderRadius: PhoneHeight * 0.03,
    margin: 10,
    paddingTop: 20,
    padding:5,
    elevation: 1,
  },
  image: {
    width: '90%',
    height: '50%',
    borderRadius: PhoneHeight * 0.03,
    marginBottom: 5,
  },
  textContainer:{
    width: '90%',
    height: '10%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  productText:{
    color:'black',
    fontSize: PhoneWidth * 0.045,
    fontWeight: '600',
  },
  rateContainer:{
    width:'95%',
    height: '15%',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection: 'row',
    marginBottom: 2,
  },
  starRate: {
    color: '#ffd700',
    marginRight: 2,
  },
  pressedFavContainer:{
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding:10,
    borderBottomRightRadius: PhoneHeight * 0.03,
    backgroundColor: '#ffd700',
    elevation: 1,
  },
  pressedFavorite:{
    color:'white',
  },
  unpressedFavContainer:{
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding:10,
    borderBottomRightRadius: PhoneHeight * 0.03,
    backgroundColor: 'white',
  },
  unpressedFavorite:{
    color:'#ffd700',
  },
});
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { PhoneWidth, PhoneHeight } from '../constants/config';
import { useNavigation } from '@react-navigation/native';

const RelatedProducts = ({item, data}) => {
    const navigation = useNavigation();
    const goToProductDetail = () => {
        navigation.navigate('ProductDetail', { itemSent: item, dataSent:data});
    };

    return (
    <TouchableOpacity  onPress={goToProductDetail}>
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode='contain'/>
      <Text>{item.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default RelatedProducts

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height: PhoneHeight * 0.2,
        width: PhoneWidth * 0.25,
        borderWidth:1,
        marginRight: PhoneWidth * 0.05,

        borderColor:'#faf8f2',
        backgroundColor:'#faf8f4',
        borderRadius: PhoneHeight * 0.03,
        padding:5,  
    },
    image: {
        width: '90%',
        height: '50%',
        borderRadius: PhoneHeight * 0.03,
        marginBottom: 5,
      },
})
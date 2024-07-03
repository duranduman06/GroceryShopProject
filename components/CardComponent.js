import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { PhoneWidth } from '../constants/config';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CardComponent = ({item}) => {
    console.log(item);
  return (
    <View style={styles.cardSection}>
        <View style={styles.priceSection}>
            <Text style={styles.priceText}>price
                <Text style={styles.price}>{'\n'+ item.price +"/"+ item.unit}</Text>
            </Text>
        </View>
        <View style={styles.addToCardContainer}>
            <TouchableOpacity style={styles.addToCardButton}>
                <Text style={styles.addToCardText}>Add to Cart {' '}
                    <AntDesign name='doubleright' color={'#fdbb5d'}  size={25} style={{paddingTop:10}}/>
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({
    cardSection: {
        height:'12%',
        flexDirection:'row',
        backgroundColor:'#fdbb5d',
        borderColor:'#fdbb5d',
        paddingHorizontal: PhoneWidth * 0.08,
    },
    priceSection:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
    },
    priceText:{
        fontSize: PhoneWidth * 0.045,
        fontWeight:'400',
        color:'white',
    },
    price:{
        fontSize: PhoneWidth * 0.065,
        fontWeight:'700',
        color:'white',
    },
    addToCardContainer:{
        flex:1,
        padding:13,
        justifyContent:'center',
        alignItems:'center',
    },
    addToCardButton:{
        backgroundColor:'white',
        borderRadius: PhoneWidth * 0.1,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
    },
    addToCardText: {
        color: '#fdbb5d',
        fontSize: PhoneWidth * 0.05,
        fontWeight: '600',
        textAlign:'center',
    },
})

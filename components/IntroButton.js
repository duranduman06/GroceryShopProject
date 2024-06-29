import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {PhoneWidth } from '../constants/config'

const IntroButton = ({title, route, navigation}) => {
  return (
    <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={()=> navigation.navigate(route)} >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}
export default IntroButton;

const styles = StyleSheet.create({
    buttonWrapper:{
        marginTop: 15,
        paddingVertical: 15,
        paddingHorizontal: PhoneWidth * 0.32,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#fdbb5d',
        backgroundColor:'#fdbb5d',
    },
    buttonText: { 
        color:'white',
        fontSize: 20,
    },
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState}from 'react'
import { PhoneHeight, PhoneWidth } from '../constants/config';
import Feather from 'react-native-vector-icons/Feather';

const Counter = ({item}) => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0 ) {
        setCount(count - 1);
    }
  };

  
  return (
    <View style={styles.container}>

        <TouchableOpacity onPress={Decrement}>
            <View style={styles.counterButtonDec}>
                <Feather name='minus' size={30} color={'white'}/>
            </View>
        </TouchableOpacity>

        <Text style={styles.counterText}>{count + " " + item.unit}</Text>

        <TouchableOpacity onPress={Increment}>
            <View style={styles.counterButtonInc}>
                <Feather name='plus' size={30} color={'white'}/>
            </View>
        </TouchableOpacity>
    </View>
  );
};
export default Counter;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        //backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
    },
    counterText:{
        color:'black',
        fontSize: PhoneWidth * 0.045,
        fontWeight: '400',
        marginHorizontal: 10,
    },
    counterButtonDec:{
        width: PhoneWidth * 0.1,
        height: PhoneWidth * 0.1,
        borderWith:1,
        backgroundColor:'#ffd700',
        borderRadius:PhoneWidth * 0.1,
        elevation:1,
        justifyContent:'center',
        alignItems:'center',
    },
    counterButtonInc:{
        width: PhoneWidth * 0.1,
        height: PhoneWidth * 0.1,
        borderWith:1,
        backgroundColor:'#ffd700',
        borderRadius:PhoneWidth * 0.1,
        elevation:1,
        justifyContent:'center',
        alignItems:'center',
    },
})
import { StyleSheet, Text, View, FlatList, Touchable, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import { PhoneWidth, PhoneHeight } from '../constants/config';

const categories =  [
    {title: 'Fruits', id: '1'},
    {title: 'Vegetables', id:'2'},
    {title: 'Dried Fruits', id:'3'},
    {title: 'Greens', id:'4'},
];

const CategoryBar = ({selectedId, onSelect}) => {
  return (
    <View style={styles.categoryWrapper}>
      <FlatList
        data ={categories}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
            const backgroundColor = item.id == selectedId ? '#fdbb5d' : '#faf8f2';
            const color = item.id == selectedId ? 'white' : 'black'; 
            return(
                <View style={[styles.category,{backgroundColor}]}>
                    <TouchableOpacity onPress={()=>onSelect(item.id)}>
                        <Text style={[styles.categoryText,{color}]}>{item.title}</Text>
                    </TouchableOpacity>
                </View>
            );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
      </FlatList>
    </View>
  );
};
export default CategoryBar;

const styles = StyleSheet.create({
    categoryWrapper: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: PhoneHeight * 0.02,
    },
    category: {
        borderWidth:1,
        borderColor:'transparent',
        borderRadius: PhoneHeight * 0.08,
        paddingVertical: PhoneHeight * 0.01,
        paddingHorizontal: PhoneWidth * 0.05,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#faf8f2',
        marginHorizontal: PhoneWidth * 0.04,
    },
    categoryText: {
        fontSize : PhoneWidth * 0.05,
        fontWeight:'600',
    },
})
import { StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { PhoneWidth , PhoneHeight} from '../constants/config';
import Product from '../components/Product';
import CategoryBar from '../components/CategoryBar';

const products = {
  '1': [ //Fruits
      { id: '1', title: 'Passion Fruit', price: '$2.99', unit:'kg',star:'4',image: require('../assets/grocery/fruit-1.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '2', title: 'Pear', price: '$1.99', unit:'kg',star:'5', image: require('../assets/grocery/fruit-2.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '3', title: 'Watermelon', price: '$3.49', unit:'kg',star:'4', image: require('../assets/grocery/fruit-3.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '4', title: 'Strawberry', price: '$3.49', unit:'kg',star:'4', image: require('../assets/grocery/fruit-4.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '5', title: 'Melon', price: '$3.49', unit:'kg',star:'5',image: require('../assets/grocery/fruit-5.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
  ],
  '2': [ //Vegetables
      { id: '6', title: 'Tomato', price: '$0.99', unit:'kg',star:'5', image: require('../assets/grocery/veggie-1.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '7', title: 'Cucumber', price: '$1.49',  unit:'kg',star:'4', image: require('../assets/grocery/veggie-2.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '8', title: 'Onion', price: '$4.99', unit:'kg',star:'4', image: require('../assets/grocery/veggie-3.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '9', title: 'Potato', price: '$4.99',  unit:'kg',star:'3',image: require('../assets/grocery/veggie-4.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
  ],
  '3': [//Dried Fruits
      { id: '10', title: 'Dried Goji Berry', price: '$2.29', unit:'kg',star:'3', image: require('../assets/grocery/dried-1.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '11', title: 'Dried Apricot', price: '$1.79', unit:'kg',star:'4', image: require('../assets/grocery/dried-2.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '12', title: 'Dried Rhubarb', price: '$1.79', unit:'kg',star:'4', image: require('../assets/grocery/dried-3.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '13', title: 'Dried Seaweed', price: '$1.79', unit:'kg',star:'5', image: require('../assets/grocery/dried-4.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
  ],
  '4': [//Greens
      { id: '14', title: 'Lettuce', price: '$1.49', unit:'kg', star:'4', image: require('../assets/grocery/green-1.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '15', title: 'Cucumber', price: '$1.29', unit:'kg', star:'4', image: require('../assets/grocery/green-2.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
      { id: '16', title: 'Broccoli', price: '$2.99',  unit:'kg', star:'4', image: require('../assets/grocery/green-3.png')
        ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
  ],
};

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('1');

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };
   const renderProduct = ({item})=> {
    return(
      <Product item={item} data={products[selectedCategory]}/>
    );
   }
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient style={styles.gradientBackGround} colors={['#eff9d4', '#f3f8e1', '#fdf7e9', '#f9f1de']}>
        <View style={styles.screenContainer}>
          <View style={styles.headerSection}>
              <Text style={styles.headerText}>Daily{'\n'}Grocery Food</Text>
          </View>
          <View style={styles.categorySection}>
            <CategoryBar selectedId={selectedCategory} onSelect={handleCategoryChange}/>
          </View>
          <View style={styles.productSection}>
             <FlatList
             data={products[selectedCategory]}
             keyExtractor={(item)=>item.id}
             renderItem={renderProduct}
             showsVerticalScrollIndicator={false}
             numColumns={2}
             >
             </FlatList>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: '#fdbb5d',
  },
  gradientBackGround: {
    flex: 1,
    borderBottomLeftRadius: PhoneHeight * 0.08,
    borderBottomRightRadius: PhoneHeight * 0.08,
  },
  screenContainer: {
    flex: 1,
    borderColor:'#fdbb5d',
    paddingTop: PhoneHeight * 0.06, // ekranın üst tarafından padding verildi !!
  },
  headerSection:{
    height: PhoneHeight * 0.15,
    marginHorizontal: PhoneWidth * 0.04,
  },
  headerText:{
    textAlign : 'left',
    height: '100%',
    fontSize : PhoneHeight * 0.045,
    color: 'black',
    fontWeight: '700',
  },
  categorySection: {
    height: PhoneHeight * 0.1,
  },
  productSection: {
    flex:1,
    alignItems:'center',
    backgroundColor: 'transparent',
    borderBottomLeftRadius: PhoneHeight * 0.08,
    borderBottomRightRadius: PhoneHeight * 0.08,
    overflow:'hidden',
  },
});
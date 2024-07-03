import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import React, {useState, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { PhoneHeight, PhoneWidth } from '../constants/config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Counter from '../components/Counter';
import RelatedProducts from '../components/RelatedProducts';
import CardComponent from '../components/CardComponent';


const ProductDetailScreen = ({ route , navigation}) => {
  const { itemSent, dataSent = [] } = route.params || {};
  const [isFavorited, setIsFavorited] = useState(false);
  const pressFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const goBackToHome = ()=> {
    navigation.navigate('HomePage');
  };

  const renderStars = (starCount)=>{
    let stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<AntDesign key={i} name="star" size={25} style={styles.starRate} />);
    }
    return stars;
  };
  
  const renderProduct = ({item})=> {
    return(
      <RelatedProducts item={item} data={dataSent}/>
    );
   }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1, backgroundColor:'black'}}>
        <LinearGradient style={styles.gradientBackGround} colors={['#eff9d4', '#f3f8e1', '#fdf7e9', '#f9f1de']}>
          <View style={styles.screenContainer}>
            {/* HEADER SECTION START */}
            <LinearGradient style={styles.gradientBackGround} colors={['#eff9d4', '#f3f8e1', '#fdf7e9', '#f9f1de']}></LinearGradient>
            <View style={styles.headerSection}>
                  <TouchableOpacity style={styles.goBackButton} onPress={goBackToHome}>
                    <AntDesign name="arrowleft" size={25} color={'black'}/>
                  </TouchableOpacity>
                  <Text style={styles.headerText}>Details</Text>
                  {isFavorited ?
                  <View style={styles.pressedFavContainer}>  
                    <Ionicons name="heart" size={30} color={'black'} style={[styles.favoriteButton,styles.pressedFavorite]} onPress={pressFavorite}/>
                  </View>
                  :
                  <View style={styles.unpressedFavContainer}> 
                    <Ionicons name="heart-outline" size={30} color={'black'} style={[styles.favoriteButton,styles.unpressedFavorite]} onPress={pressFavorite}/>
                  </View>}
                </View>
                {/* HEADER SECTION END */}
                {/* PRODUCT DETAILS SECTION START */}
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.productDetailSection}>
                      <Image source={itemSent.image} style={styles.image} resizeMode='contain'/>
                      <View style={styles.subDetailContainer}>
                        <View style={styles.nameRateContainer}>                      
                          <Text style={styles.productText}>{itemSent.title}</Text>
                          <View style={styles.rateContainer}>
                            {renderStars(parseInt(itemSent.star))}
                          </View>
                        </View>
                        <View style={styles.counterContainer}>
                          <Counter item={itemSent}/>
                        </View>
                      </View>

                      <View>
                          <Text style={styles.descHeader}>Description</Text>
                          <Text style={styles.descText}>{itemSent.description}</Text>
                      </View>

                      <View style={styles.relatedProducts}>
                          <Text style={styles.descHeader}>Related Items</Text>
                          <FlatList
                          data={dataSent}
                          keyExtractor={(item)=>item.id}
                          renderItem={renderProduct}
                          horizontal
                          showsHorizontalScrollIndicator={false}>
                          </FlatList>
                      </View>
                    {/* PRODUCT DETAILS SECTION END */}
                  </View>
                </ScrollView>
          </View>
            <CardComponent item={itemSent}/>
        </LinearGradient>
        </View>
    </SafeAreaView>
  )
}
export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackGround: {
    flex: 1,
  },
  screenContainer:{
    flex: 1,
    borderColor:'#fdbb5d',
    paddingTop: PhoneHeight * 0.06,
    paddingHorizontal: PhoneWidth * 0.04,
    //borderWidth:5,
    overflow:'hidden',
    //borderBottomLeftRadius: PhoneHeight * 0.08,
    //borderBottomRightRadius: PhoneHeight * 0.08,
  },
  headerSection: {
    width: '100%',
    height:'10%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  headerText:{
    fontSize : PhoneHeight * 0.03,
    color: 'black',
    fontWeight: '700',
  },
  goBackButton:{
    height: '100%',
    width:'15%',
    borderWidth:5,
    borderColor:'white',
    borderRadius: PhoneWidth * 0.08,
    justifyContent:'center',
    alignItems:'center',
  },
  pressedFavContainer:{
    height: '100%',
    width:'15%',
    borderWidth:5,
    borderColor:'white',
    borderRadius: PhoneWidth * 0.08,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#ffd700',
    elevation: 1,
  },
  pressedFavorite:{
    color:'white',
  },
  unpressedFavContainer:{
    height: '100%',
    width:'15%',
    borderWidth:5,
    borderColor:'white',
    borderRadius: PhoneWidth * 0.08,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'transparent',
  },
  unpressedFavorite:{
    color:'black',
  },
  image: {
    height: PhoneHeight * 0.35,
    width:'100%',
  },
  productDetailSection: {
    height: '40%',
    width:'100%',
  },
  subDetailContainer:{
    width:'100%',
    height: '25%',
    flexDirection:'row',
  },
  productText:{
    color:'black',
    fontSize: PhoneWidth * 0.06,
    fontWeight: '700',
    marginBottom:5,
  },
   rateContainer:{
    justifyContent:'flex-start',
    flexDirection: 'row',
  },
  starRate: {
    color: '#ffd700',
    marginRight: 2,
  },
  counterContainer:{
    height:'100%',
    width:'50%',
  },
  nameRateContainer:{
    flexDirection:'column',
    justifyContent:'center',
    height:'100%',
    width: '50%',
  },
  descHeader:{
    color:'black',
    fontSize: PhoneWidth * 0.06,
    fontWeight: '700',
    marginBottom: 5,
    marginTop: 15,
  },
  descText:{
    color:'black',
    fontSize: PhoneWidth * 0.04,
    fontWeight: '300',
    marginBottom:20,
  },
  relatedProducts:{
    justifyContent:'center',
    marginBottom: PhoneHeight * 0.1,
  },
});
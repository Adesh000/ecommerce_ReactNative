import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useRoute } from '@react-navigation/native'
import CustomButton from '../components/CustomButton'
const ProductDetail = ({navigation}) => {
  const route = useRoute()
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require("../images/left-arrow.png")}
        rightIcon={require("../images/shopping-bag.png")}
        title="Product Detail"
        onClickLeftIcon={() => navigation.goBack()}
      />
      <Image source={{uri: route.params.data.image}} style={{width: '100%', height: 300, resizeMode: 'center'}}/>
      <Text style={styles.title}>{route.params.data.title}</Text>
      <Text style={styles.desc}>{route.params.data.description}</Text>
      <View style={{flexDirection: 'row', marginHorizontal: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Price:</Text>
        <Text style={{fontSize: 20, fontWeight: "bold", color: 'green'}}>  $ {route.params.data.price}</Text>
      </View>
      <CustomButton bg={"#FF9ABC"} title={"Add to cart"} color={"#fff"} onClick={() => }/>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 30,
    marginVertical: 10
  },
  desc: {
    fontSize: 15,
    marginHorizontal: 30,
    marginVertical: 10


  }
})
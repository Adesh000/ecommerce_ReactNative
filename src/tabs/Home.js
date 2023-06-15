import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/slices/ProductSlice";
const Home = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const dispatch                 = useDispatch()
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {setProducts(json)
      dispatch(addProducts(json))
      });
  }, []);
  return (
    <View>
      <Header
        leftIcon={require("../images/menu.png")}
        rightIcon={require("../images/shopping-bag.png")}
        title="Grocery App"
        onClickLeftIcon={() => navigation.openDrawer()}
      />
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ProductDetail', {data: item})}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>
                {item.title.length > 30
                  ? item.title.substring(0, 30) + "..."
                  : item.title}
              </Text>
              <Text style={styles.desc}>
                {item.description.length > 50
                  ? item.description.substring(0, 50) + "..."
                  : item.description}
              </Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get("window").width,
    height: 100,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  infoContainer: {
    marginHorizontal: 30
  },
  title: {
    fontSize: 15,
    fontWeight: '600'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5
  }
});

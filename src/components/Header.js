import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.btn} onPress={onClickLeftIcon}>
          <Image
            source={leftIcon}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.btn} >
          <Image
            source={rightIcon}
            style={styles.icon}
          />
        </TouchableOpacity>
        
      </View>
    
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get('window').width,
    height: 60,
    backgroundColor: "#ff5757",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 20
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    tintColor: '#fff'
  },
  btn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: "bold"
  }
});

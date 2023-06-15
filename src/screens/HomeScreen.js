import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Home from "../tabs/Home";
import Search from "../tabs/Search";
import Like from "../tabs/Like";
import Notification from "../tabs/Notifications";
import Profile from "../tabs/Profile";

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      {selectedTab === 0 ? (
        <Home />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Like />
      ) : selectedTab === 3 ? (
        <Notification />
      ) : (
        <Profile />
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(0)}
        >
          <Image
            source={require("../images/home.png")}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(1)}
        >
          <Image
            source={require("../images/search.png")}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(2)}
        >
          <Image
            source={require("../images/heart.png")}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(3)}
        >
          <Image
            source={require("../images/bell.png")}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(4)}
        >
          <Image
            source={require("../images/user.png")}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    width: Dimensions.get("window").width,
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  bottomTab: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTabIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    tintColor: "#ff5757",
  },
});

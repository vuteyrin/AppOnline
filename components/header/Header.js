import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { useStateValue } from "../../context/StateProvider";
const Header = ({ navigation, route }) => {
  const [{ language }] = useStateValue();
  return (
    <View style={styles.header}>
      <Entypo
        name="menu"
        size={35}
        color="#FFFF"
        onPress={() => navigation.openDrawer()}
      />
      <View>
        <Text style={styles.headerText}>
          {route.name === "Home" && language
            ? "Home"
            : !language && route.name === "Home"
            ? "ផ្ទះ"
            : route.name === "About" && language
            ? "About"
            : route.name === "About" && !language
            ? "ពត៍មានផ្ទាល់ខ្លួន"
            : route.name === "Setting" && language
            ? "Setting"
            : route.name === "Setting" && !language
            ? "ការកំណត់"
            : route.name === "Contact" && language
            ? "contact" 
            : route.name === "Contact" && !language
            ? "ទំនាកទំនង"
            : route.name}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: Platform.OS === "ios" ? screenWidth : "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: Platform.OS === "ios" ? 12 : -5,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFF",
    letterSpacing: 1,
    // paddingLeft: "32%",
  },
});
export default Header;

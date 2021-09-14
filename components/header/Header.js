import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { useStateValue } from "../../context/StateProvider";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Header = ({ navigation, route }) => {
  const [{ language }] = useStateValue();
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Entypo
          name="menu"
          size={35}
          color="#FFFF"
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.headerText}>SHS' Moblie</Text>
      </View>
      <View style={styles.title}>
      <Ionicons name="notifications-outline" size={24} color="#FFFF" />
        {/* <Text style={styles.headerText}>
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
        </Text> */}
        <View style={{paddingLeft: 10}}>
            <MaterialIcons name="phone-in-talk" size={24} color="#FFFF" />
        </View>
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
    paddingLeft:10,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  }
});
export default Header;

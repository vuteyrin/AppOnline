import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Carts = ({ name, url, id,price }) => {
  // console.log(price)
  return (
    <View key={id} style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.image} source={{ uri: url }} />
      <Text style={styles.price}>{price}$</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: screenWidth / 2,
    height: screenHeight / 3,
    backgroundColor: "#FFFF",
    margin: 20,

    ///
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 11,
    // },
    // shadowOpacity: 0.57,
    // shadowRadius: 15.19,
    elevation: 22,
  },
  image: {
    width: "100%",
    height: "80%",
    // resizeMode: "contain",
  },
  price: {
    backgroundColor: "green",
    width: "100%",
    padding: 5,
    color: "#FFFF"
  }
});

export default Carts;

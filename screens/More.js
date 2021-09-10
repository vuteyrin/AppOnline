import React from "react";
import { View, Text,TouchableWithoutFeedback,StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const More = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.createStore}>
        <TouchableWithoutFeedback onPress={()=> navigation.navigate("Store")}>
          <View style={styles.store}>
          <FontAwesome5 name="store-alt" size={40} color="#FF8C00" />
          <Text style={styles.text}>Create Store</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.createMethod}>
        <TouchableWithoutFeedback onPress={()=> navigation.navigate("PaymentMethod")}>
          <View style={styles.payment}>
          <FontAwesome name="cc-mastercard" size={40} color="#FF8C00" />
          <Text style={styles.text}>Create Payment Method</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  createStore: {
    // backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    paddingLeft:10,
  },
  store:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
  },
  createMethod: {
    // backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    paddingHorizontal:10
  },
  payment:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 12
  }
})

export default More;

import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { View, Text,StyleSheet } from "react-native";

const Payment = () => {
  return (
    <View style={styles.container}>
     <Text>Payments</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

  }

})
export default Payment;

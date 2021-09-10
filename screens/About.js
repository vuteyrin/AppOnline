import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useStateValue } from "../context/StateProvider";
const About = () => {
  const [{ language }] = useStateValue();
  return (
    <View style={styles.container}>
      <Text>{language ? "true" : "false"}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default About;

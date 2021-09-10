import React from "react";
import { View, Text, StyleSheet, Switch, Image } from "react-native";
import { useStateValue } from "../context/StateProvider";
const Setting = () => {
  const [{ language }, dispatch] = useStateValue();

  const handleEnglish = () => {
    dispatch({
      type: "LANGUAGE",
      language: !language,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.LabalLanguage}>
        <Text style={styles.textLanguage}>
          {!language ? "ភាសារ" : "Language"}
        </Text>
      </View>

      <View style={styles.language}>
        <Image
          style={styles.englishFlag}
          source={require("../assets/Image/englishFlag.jpg")}
        />
        <Text style={{ width: 55, fontSize: 16 }}>
          {!language ? "អង់គ្លេស" : "English"}
        </Text>
        <View style={{ width: 100 }}>
          <Switch
            onValueChange={() => handleEnglish()}
            value={language}
            onTintColor={"orange"}
            tintColor={"grey"}
          />
        </View>
      </View>
      {/* <View style={styles.language}>
        <Image
          style={styles.englishFlag}
          source={require("../assets/Image/khmerFlag.png")}
        />
        <Text style={{ width: 55, fontSize: 16 }}>
          {!language ? "ខ្មែរ" : "khmer"}
        </Text>
        <View style={{ width: 100 }}>
          <Switch
            onValueChange={() => handleEnglish()}
            value={!language}
            onTintColor={"orange"}
            tintColor={"grey"}
          />
        </View>
      </View> */}
      <View style={styles.language}>
        <Text style={{ padding: 10 }}>Version 10.1.12</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    // paddingHorizontal: 10,
  },
  language: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#EEEE",
    padding: 8,
  },
  LabalLanguage: {
    // backgroundColor: "red",
    borderBottomWidth: 1,
    borderColor: "#EEEE",
  },
  textLanguage: {
    fontSize: 18,
    padding: 20,
  },
  englishFlag: {
    width: 30,
    height: 15,
    marginHorizontal: 10,
  },
});
export default Setting;

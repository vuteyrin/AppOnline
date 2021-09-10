import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import Carts from "../components/Home/Carts";
import Video from "react-native-video";
import { data } from "../data/Data";
import { useStateValue } from "../context/StateProvider";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Home = () => {
  const [{ language }, dispatch] = useStateValue();
  // console.log(language);
  const renderItem = ({ item }) => (
    <Carts id={item.id} url={item.url} name={item.name} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
});

export default Home;
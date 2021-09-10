import React,{useState}   from "react";
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
import {db} from "../api/firebase"
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Home = () => {
  const [{ language }, dispatch] = useStateValue();
  const [products,setProducts] = useState([]);
  const getProducts = async() => {
    const pro = await db.collection('products').onSnapshot
   (querySnapshot => {
      const item = [];
      const id = []
      querySnapshot.forEach(doc => {
        item.push({...doc.data(), id: doc.id})
      });
      setProducts(item)
    });
    }

    React.useEffect(()=>{
      getProducts()
    },[])

  const renderItem = ({ item }) => (
    <Carts id={item.id} url={item.img} name={item.name} price={item.price} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
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
import React,{useState} from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useStateValue } from "../../context/StateProvider";
import { map } from "async";
import AddStore from "../model/store/addStore";
import UpdateStore from "../model/store/updateStore";
const Store = () => {
  const [{ store }, dispatch] = useStateValue();
  const [modalAddStore, setModalAddStore] = React.useState(false);
  const [modalUpdateStore, setModalUpdateStore] = React.useState(false);
  const [id,setId] = useState()
  var num = 0;
  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <Entypo name="shop" size={15} color="#FF8C00" />
        <View style={styles.home}>
          <FontAwesome5 name="store-alt" size={40} color="#FF8C00" />
        </View>
        <Entypo name="shop" size={15} color="#FF8C00" />
      </View>
      <View style={styles.body}>
        <TouchableWithoutFeedback
          onPress={() => setModalAddStore(!modalAddStore)}
        >
          <View style={styles.createStoreBtn}>
            <Text>create store</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.title}>
          <Text style={{ fontWeight: "bold", borderBottomWidth: 1 }}>
            STORE
          </Text>
        </View>
        <View style={styles.th}>
          <Text  style={styles.box}>id</Text>
          <Text  style={styles.box}>Store</Text>
          <Text  style={styles.box}>Address</Text>
        </View>
        {store?.map((item) => {
          num++
          return (
            <TouchableWithoutFeedback key={item.id} onPress={()=>{setId(item.id), setModalUpdateStore(!modalUpdateStore)}}>
              <View  style={styles.Store}>
                <Text style={styles.box}>{num}</Text>
                <Text  style={styles.box}>{item.title}</Text>
                <Text  style={styles.box}>{item.Address}</Text>
                {/* <Text>{item.remark}</Text> */}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      <AddStore
        modalAddStore={modalAddStore}
        setModalAddStore={setModalAddStore}
      />
      <UpdateStore
      modalUpdateStore={modalUpdateStore}
      setModalUpdateStore={setModalUpdateStore}
      id={id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 90,
    marginBottom: 12,
    borderBottomColor: "orange",
  },
  home: {
    borderBottomWidth: 1,
    height: 60,
  },
  body: {
    flex: 5,
    marginHorizontal: 5,
    // backgroundColor:"yellow"
  },
  createStoreBtn: {
    backgroundColor: "#FF8C00",
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  th: {
    marginVertical: 12,
    flexDirection: "row",
    padding: 5,
    // justifyContent: "space-between",
    // borderBottomWidth: 1,
    backgroundColor: "orange",
  },
  Store: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    // justifyContent: "space-between",
  },
  box: {
    width: "33%"
  }
});
export default Store;

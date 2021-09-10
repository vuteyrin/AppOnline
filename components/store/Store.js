import React,{useState} from "react";
import { StyleSheet } from "react-native";
import { View, Text,Image, TouchableWithoutFeedback } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useStateValue } from "../../context/StateProvider";
import { map } from "async";
import AddStore from "../model/store/addStore";
import UpdateStore from "../model/store/updateStore";
import {db} from "../../api/firebase"
const Store = () => {
  // const [{ store }, dispatch] = useStateValue();
  const [modalAddStore, setModalAddStore] = React.useState(false);
  const [modalUpdateStore, setModalUpdateStore] = React.useState(false);
  const [id,setId] = useState()
  const [store,setStore] = useState();
  const [dataUpdate,setDataUpdate] = useState({})
  var num = 0;
  const getStore = async() => {
    try{
      const pro = await db.collection('stores').onSnapshot
      (querySnapshot => {
         const item = [];
         const id = []
         querySnapshot.forEach(doc => {
           item.push({...doc.data(), id: doc.id})
         });
         setStore(item)
       });
    }catch(e){
      Alert.alert(e)
    }
    }

    React.useEffect(()=>{
      getStore()
    },[])
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
          <Text  style={{width: "10%"}}>id</Text>
          <Text  style={styles.box}>Store</Text>
          <Text  style={styles.box}>Address</Text>
          <Text  style={styles.box}>Remark</Text>
        </View>
        {store?.map((item) => {
          num++
          return (
            <TouchableWithoutFeedback key={item.id} onPress={()=>{setDataUpdate(item), setModalUpdateStore(!modalUpdateStore)}}>
              <View  style={styles.Store}>
                <Text style={{width: "10%"}}>{num}</Text>
                <View style={{width: "30%"}}>
                  <Text>{item.name}</Text>
                  <Image source={{ uri: item.img }} style={{ width: 20, height: 20 }} />
                </View>
                <Text  style={styles.box}>{item.address}</Text>
                <Text  style={styles.box}>{item.remark}</Text>
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
      dataUpdate={dataUpdate}
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
    width: "30%"
  }
});
export default Store;

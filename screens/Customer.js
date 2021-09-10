import React, { useState } from "react";
import { TextInput, Keyboard } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { useStateValue } from "../context/StateProvider";
import { EvilIcons } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from "react-native";
import { customerData } from "../data/Data";
import UpdateCustomer from "../components/model/customer/updateModel";
import AddCustomer from "../components/model/customer/addCustomer";
import { ScrollView } from "react-native";
import {db} from "../api/firebase";
const Customer = () => {
  // const [{ customer }, dispatch] = useStateValue();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAddCustomer,setModalAddCustomer] = useState(false)
  const [customer,setCustomer] = useState([])
  const [id,setId] = useState()
  const [updateData,setUpdateData] = useState({});
  var no = 1;
  const getCustomers = async() => {
    const customers = await db.collection('customers').onSnapshot
   (querySnapshot => {
      const item = [];
      const id = []
      querySnapshot.forEach(doc => {
        item.push({...doc.data(), id: doc.id})
      });
      setCustomer(item)
    });
    }

    React.useEffect(()=>{
      getCustomers()
    },[])
    // console.log(updateData)
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.searchBar}>
          <EvilIcons
            style={{ width: "10%", paddingLeft: 10 }}
            name="search"
            size={24}
            color="black"
          />
          <TextInput style={styles.inputSearch} placeholder="search..." />
          <TouchableNativeFeedback 
          onPress={()=>setModalAddCustomer(!modalAddCustomer)}
          // onPress={()=> getFood() }
          >
            <Text style={styles.add}>add</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>getCustomers()}>
            <Text style={styles.add}>test</Text>
          </TouchableNativeFeedback>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.header}>
        <Text style={{width: "10%",textAlign:"center", fontWeight: "bold"}}>id</Text>
        <Text style={{width: "30%",textAlign:"center", fontWeight: "bold"}}>name</Text>
        <Text style={{width: "30%",textAlign:"center" ,fontWeight: "bold"}}>phone</Text>
        <Text style={{width: "30%",textAlign:"center" ,fontWeight: "bold"}}>address</Text>
      </View>
      <ScrollView>
      {
       customer.map((item,index)=>{
        return(
          <TouchableWithoutFeedback key={index} onPress={()=> {setModalVisible(true),setUpdateData(item)}}>
          <View style={styles.cart} key={index}>
            <Text style={{width: "10%",textAlign:"center"}}>{item.id}</Text>
            <Text style={{width: "30%",textAlign:"center"}}>{item.name}</Text>
            <Text style={{width: "30%",textAlign:"center"}}>{item.tel}</Text>
            <Text style={{width: "30%",textAlign:"center"}}>{item.address}</Text>
          </View>
          </TouchableWithoutFeedback>
        )
       })
      }
      </ScrollView>
      <View style={{flex: 1}}>
        <AddCustomer modalAddCustomer={modalAddCustomer} setModalAddCustomer={setModalAddCustomer} />
      </View>
      <View style={{flex: 1}}>
        <UpdateCustomer modalVisible={modalVisible} setModalVisible={setModalVisible} updateData={updateData} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFF"
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
    height: 40,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  inputSearch: {
    width: "80%",
    // backgroundColor:"red",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  add: {
    width: "10%",
    backgroundColor: "#B8860B",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 5,
    color: "#FFFF"
  },
  header: {
    width:"100%",
    fontWeight: "bold",
    flexDirection: "row",
    backgroundColor:"#EEE8AA",
    justifyContent:"space-between",
    paddingVertical:12,
    
  },
  cart: {
    width:"100%",
    borderBottomWidth: 1,
    borderBottomColor: "#B8860B",
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between"
  }
});
export default Customer;

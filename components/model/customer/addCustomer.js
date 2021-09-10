import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {useStateValue} from "../../../context/StateProvider"
import { Ionicons } from "@expo/vector-icons";
import { setLocalstorage } from "../../../function/Function";
import {actionTypes} from "../../../context/Reducer"
import {db} from "../../../api/firebase"
// import { addCustomer } from "../../../function/Function";
const AddCustomer = ({modalAddCustomer,setModalAddCustomer}) => {
  const [{customer},dispatch] = useStateValue();
  const [name,setName] = useState();
  const [phone,setPhone] = useState();
  const [address,setAddress] = useState();
  const [remark,setRemark] = useState();
  const addCustomer = async () => {
    const addCustomer = await db.collection('customers').add({
      name: name,
      tel: phone,
      address: address,
      remark: remark,
    })
    .then((querySnapshot) => {
      Alert.alert("successful add new customers !!!!")
      setName("");
      setPhone("");
      setAddress("");
      setRemark("");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

  }
 
  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAddCustomer}
      >
        <TouchableWithoutFeedback style={styles.centeredView} >
          <View style={styles.modalView}>
          <TouchableWithoutFeedback
            onPress={()=> setModalAddCustomer(!modalAddCustomer)}
            >
              <View style={{ width: "100%", paddingLeft: 12 }}>
                <Ionicons name="backspace-outline" size={24} color="black" />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.form}>
              <Text style={styles.label}>Create New Customers</Text>
              <Text>add customer</Text>
              <View style={styles.input}>
              <AntDesign name="user" size={15} color="black" />
                <TextInput value={name} onChangeText={(e)=> setName(e)} style={{width:"100%",marginLeft:10}} placeholder="name.."/>
              </View>
              <View style={styles.input}>
              <Feather name="phone" size={15} color="black" />
                <TextInput value={phone} onChangeText={(e) => setPhone(e)} style={{width:"100%",marginLeft:10}} placeholder="phone.."/>
              </View>
              <View style={styles.input}>
              <EvilIcons name="location" size={20} color="black" />
                <TextInput value={address} onChangeText={(e) => setAddress(e)} style={{width:"100%",marginLeft:5}} placeholder="address.."/>
              </View>
              <View style={styles.input}>
              <MaterialIcons name="menu-book" size={15} color="black" />
                <TextInput value={remark}  onChangeText={(e) => setRemark(e)} style={{width:"100%",marginLeft:10}} placeholder="remark.."/>
              </View>
              <View style={styles.btn}>
              <TouchableWithoutFeedback  onPress={() =>
                 {addCustomer(),setModalAddCustomer(!modalAddCustomer)}
                 }>
                <Text style={styles.btnText}>save</Text>
              </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 110,
    width:width,
    height:height,
    // backgroundColor: "red"

  },
  modalView: {
    marginTop: 70,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 5,
    width:"100%",
    height:"100%",
  },
  form: {
    width:"100%",
    height:"100%",
    // backgroundColor:"red",
    // justifyContent:"center",
    alignItems:"center"
  },
  label:{
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 12,
  },
  input: {
  flexDirection: "row",
  width:"95%",
  paddingHorizontal: 10,
  marginTop: 12,
  borderBottomWidth:1,
  borderBottomColor: "#EEEE",
  // justifyContent: "center",
  alignItems:"center"
  
  },


  btn: {
    marginTop: 30,
    // borderWidth: 1,
    width: "90%",

  },
  btnText :{
    backgroundColor: "orange",
    borderRadius: 5,
    textAlign: "center",
    paddingVertical: 7,
    paddingHorizontal: 12,
    color: "#FFFF"
  }


});

export default AddCustomer;
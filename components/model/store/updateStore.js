import React, { useState,useEffect } from "react";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {useStateValue} from "../../../context/StateProvider"
import { customerData } from "../../../data/Data";
import { setLocalstorage } from "../../../function/Function";
import {actionTypes} from "../../../context/Reducer"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import ConfirmDeleteStore from "./confirmDelete";

  const UpdateStore = ({modalUpdateStore,setModalUpdateStore,id}) => {
  const [{store},dispatch] = useStateValue();
  const [name,setName] = useState();
  const [phone,setPhone] = useState();
  const [address,setAddress] = useState();
  const [remark,setRemark] = useState();
  const [openConfirmDelete,setOpenConfirmDelete] = useState(false);
  const handleUpdateStore =()=>{
    var newArray = [];
    const index = store?.findIndex((index)=>index.id === id);
    if (index !== -1) {
      store[index] = {...store[index],title: name,Address: address,remark: remark };
      newArray = [...store];
     } 
    setLocalstorage("store",newArray);
    dispatch({
      type: actionTypes.STORE,
      store: newArray
    })
    setName("");
    setAddress("");
    setRemark("");
  }
  // const handleDeleteItem = () =>{
  //   const newArr = store.filter((item)=> item.id !== id);
  //   dispatch({
  //    type: actionTypes.STORE,
  //    store: newArr,
  //   })
  //   setLocalstorage("customer",newArr);
  //  }
  useEffect(()=>{
    const newArr =  store.filter((item) => item.id === id);
    if(newArr.length !== 0){
      setName(newArr[0].title);
      setAddress(newArr[0].Address);
      setRemark(newArr[0].remark)
    }
    // console.log(newArr)
    
  },[modalUpdateStore])
  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalUpdateStore}
      >
        <TouchableWithoutFeedback style={styles.centeredView} >
          <View style={styles.modalView}>
          <TouchableWithoutFeedback onPress={()=> setModalUpdateStore(!modalUpdateStore)} >
              <View style={{ width: "100%", paddingLeft: 12 }}>
                <Ionicons name="backspace-outline" size={24} color="black" />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.form}>
              <Text style={styles.label}>Update Store</Text>
              <Text>Store</Text>
              <View style={styles.delete}>
                <MaterialCommunityIcons onPress={()=>{setOpenConfirmDelete(!openConfirmDelete)}} name="delete-sweep" size={30} color="red" />
              </View>
              <View style={styles.input}>
              <MaterialIcons name="title" size={14} color="black" />
                <TextInput value={name} onChangeText={(e)=> setName(e)} style={{width:"100%",marginLeft:10}} placeholder="name.."/>
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
              <TouchableWithoutFeedback  onPress={() => {handleUpdateStore(),setModalUpdateStore(!modalUpdateStore)}}>
                <Text style={styles.btnText}>Update</Text>
              </TouchableWithoutFeedback>
              </View>
            </View>
            <ConfirmDeleteStore
            openConfirmDelete={openConfirmDelete}
            setOpenConfirmDelete={setOpenConfirmDelete}
            id={id}
            modalUpdateStore={modalUpdateStore}
            setModalUpdateStore={setModalUpdateStore}
          />
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
  delete: {
    // backgroundColor: "red",
    width: "100%",
    paddingHorizontal: 20,
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

export default UpdateStore;
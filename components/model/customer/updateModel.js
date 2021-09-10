import React, { useState,useEffect } from "react";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";
import { Alert, Modal, StyleSheet, Text, Image, View ,TouchableWithoutFeedback,Keyboard } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {useStateValue} from "../../../context/StateProvider"
import { customerData } from "../../../data/Data";
import { setLocalstorage } from "../../../function/Function";
import {actionTypes} from "../../../context/Reducer"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ConfirmDelete from "./confirmDelete";
import { Ionicons } from "@expo/vector-icons";
import {db} from "../../../api/firebase"
import * as ImagePicker from 'expo-image-picker';
  const UpdateCustomer = ({modalVisible,setModalVisible,updateData}) => {
  const [{customer},dispatch] = useStateValue();
  const [openConfirmDelete,setOpenConfirmDelete] = useState(false);
  const [name,setName] = useState();
  const [phone,setPhone] = useState();
  const [address,setAddress] = useState();
  const [remark,setRemark] = useState();
  const [image, setImage] = useState(null);
 
  useEffect(()=>{
      setName(updateData.name);
      setPhone(updateData.tel);
      setAddress(updateData.address);
      setRemark(updateData.remark)
      setImage(updateData.img)
  },[modalVisible])

  const handleUpdateCustomer = async () => {
    const updatecusto  = await db.collection("customers").doc(updateData.id).update(
      {
        name: name,
        tel: phone,
        address: address,
        remark: remark,
        img: image
      }
    )
    .then(() => {
        // Alert.alert("Document successfully update!");
        setName("");
        setPhone("");
        setAddress("");
        setRemark("");
    }).catch((error) => {
        Alert.alert("Error updateing document: ", error);
    });
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <TouchableWithoutFeedback style={styles.centeredView} onPress={()=> Keyboard.dismiss()} >
          <View style={styles.modalView}>
          <TouchableWithoutFeedback onPress={()=> setModalVisible(!modalVisible)} >
              <View style={{ width: "100%", paddingLeft: 12 }}>
                <Ionicons name="backspace-outline" size={24} color="black" />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.form}>
              <Text style={styles.label}>Update Customers</Text>
              <Text>customer</Text>
              <View style={styles.delete}>
                <View style={{width:20}}>
                  <MaterialCommunityIcons onPress={()=>{ setOpenConfirmDelete(!openConfirmDelete)}} name="delete-sweep" size={30} color="red" />
                </View>
              </View>
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
              <View style={styles.input}>
              <TouchableWithoutFeedback onPress={pickImage}>
                <MaterialIcons name="add-photo-alternate" size={25} color="black" />
              </TouchableWithoutFeedback>
              </View>
             {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
              <View style={styles.btn}>
              <TouchableWithoutFeedback  onPress={() => {handleUpdateCustomer(),setModalVisible(!modalVisible)}}>
                <Text style={styles.btnText}>Update</Text>
              </TouchableWithoutFeedback>
              </View>
            </View>
            <ConfirmDelete openConfirmDelete={openConfirmDelete} setOpenConfirmDelete={setOpenConfirmDelete} updateData={updateData}
             setModalVisible={setModalVisible} modalVisible={modalVisible}  />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

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
    // backgroundColor: "red"
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

export default UpdateCustomer;
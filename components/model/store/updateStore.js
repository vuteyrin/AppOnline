import React, { useState,useEffect } from "react";
import { Keyboard, SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";
import { Alert, Modal, StyleSheet, Text, Image, View ,TouchableWithoutFeedback } from "react-native";
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
import * as ImagePicker from 'expo-image-picker';
import {db} from "../../../api/firebase"
  const UpdateStore = ({modalUpdateStore,setModalUpdateStore,dataUpdate}) => {
  const [{store},dispatch] = useStateValue();
  const [name,setName] = useState();
  const [address,setAddress] = useState();
  const [remark,setRemark] = useState()
  const [openConfirmDelete,setOpenConfirmDelete] = useState(false);
  const [image,setImage] = useState(null)
  useEffect(()=>{
    setName(dataUpdate.name);
    setAddress(dataUpdate.address);
    setRemark(dataUpdate.remark)
    setImage(dataUpdate.img)
  },[modalUpdateStore])
  const handleUpdateStore = async () => {
    const update  = await db.collection("stores").doc(dataUpdate.id).update(
      {
        name: name,
        address: address,
        img: image,
        remark: remark,
      }
    )
    .then(() => {
        // Alert.alert("Document successfully update!");
        setName("");
        setAddress("");
        setImage(null)
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
    // console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalUpdateStore}
      >
        <TouchableWithoutFeedback style={styles.centeredView} onPress={()=> Keyboard.dismiss()} >
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
              <View style={styles.input}>
              <TouchableWithoutFeedback onPress={() =>pickImage()}>
                <MaterialIcons name="add-photo-alternate" size={25} color="black" />
              </TouchableWithoutFeedback>
              </View> 
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} 
              <View style={styles.btn}>
              <TouchableWithoutFeedback  onPress={() => {handleUpdateStore(),setModalUpdateStore(!modalUpdateStore)}}>
                <Text style={styles.btnText}>Update</Text>
              </TouchableWithoutFeedback>
              </View>
            </View>
            <ConfirmDeleteStore
            openConfirmDelete={openConfirmDelete}
            setOpenConfirmDelete={setOpenConfirmDelete}
            dataUpdate={dataUpdate}
            modalUpdateStore={modalUpdateStore}
            setModalUpdateStore={setModalUpdateStore}
          />
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
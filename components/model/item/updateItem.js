import React, { useState,useEffect } from "react";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TouchableWithoutFeedback } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {useStateValue} from "../../../context/StateProvider"
import { setLocalstorage } from "../../../function/Function";
import {actionTypes} from "../../../context/Reducer"
import ConfirmDeleteItem from "./confirmDeleteItem";
  const UpdateItem = ({modalVisible,setModalVisible,id}) => {
  const [{item},dispatch] = useStateValue();
  const [items,setItem] = useState();
  const [um,setUm] = useState();
  const [price,setPrice] = useState();
  const [inStock,setInStock] = useState();
  const [openConfirmDelete,setOpenConfirmDelete] = useState(false);
  const handleUpdateitem =()=>{
    var newArray = [];
    const index = item?.findIndex((index)=>index.id === id);
    if (index !== -1) {
      item[index] = {...item[index],item:items,Um:um,price: price,inStock:inStock };
      newArray = [...item];
     } 
    setLocalstorage("item",newArray);
    dispatch({
      type: actionTypes.ITEM,
      item: newArray
    })
    setItem("");
    setUm("");
    setPrice("");
    setInStock("");
  }
  // const handleDeleteItem = () =>{
  //  const newArr = item.filter((item)=> item.id !== id);
  //  dispatch({
  //   type: actionTypes.ITEM,
  //   item: newArr,
  //  })
  //  setLocalstorage("item",newArr);
  // }

  useEffect(()=>{
    const newArr =  item.filter((item) => item.id === id);
    if(newArr.length !== 0){
      setItem(newArr[0].item);
      setUm(newArr[0].Um);
      setPrice(newArr[0].price);
      setInStock(newArr[0].inStock)
    }

    
  },[modalVisible])

  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <TouchableWithoutFeedback style={styles.centeredView} >
          <View style={styles.modalView}>
          <TouchableWithoutFeedback
             onPress={()=> setModalVisible(!modalVisible)}
            >
              <View style={{ width: "100%", paddingLeft: 12 }}>
                <Ionicons name="backspace-outline" size={24} color="black" />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.form}>
              <Text style={styles.label}>Update Item</Text>
              <Text> Item </Text>
              <View style={styles.delete}>
                <MaterialCommunityIcons onPress={()=>{ setOpenConfirmDelete(!openConfirmDelete)}} name="delete-sweep" size={30} color="red" />
              </View>
              <View style={styles.input}>
              <Ionicons name="fast-food-outline" size={20} color="black" />
                <TextInput value={items} onChangeText={(e)=> setItem(e)} style={{width:"100%",marginLeft:10}} placeholder="name.."/>
              </View>
              <View style={styles.input}>
              <MaterialIcons name="category" size={20} color="black" />
                <TextInput value={um} onChangeText={(e) => setUm(e)} style={{width:"100%",marginLeft:10}} placeholder="phone.."/>
              </View>
              <View style={styles.input}>
              <Feather name="dollar-sign" size={20} color="black" />
                <TextInput value={price} onChangeText={(e) => setPrice(e)} style={{width:"100%",marginLeft:5}} placeholder="address.."/>
              </View>
              <View style={styles.input}>
              <FontAwesome5 name="store" size={18} color="black" />
                <TextInput value={inStock}  onChangeText={(e) => setInStock(e)} style={{width:"100%",marginLeft:10}} placeholder="remark.."/>
              </View>
              <View style={styles.btn}>
              <TouchableWithoutFeedback  onPress={() => {handleUpdateitem(),setModalVisible(!modalVisible)}}>
                <Text style={styles.btnText}>Update</Text>
              </TouchableWithoutFeedback>
              </View>
            </View>
            <ConfirmDeleteItem
            openConfirmDelete={openConfirmDelete}
            setOpenConfirmDelete={setOpenConfirmDelete}
            id={id}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
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

export default UpdateItem;
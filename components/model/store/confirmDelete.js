import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { View, Text, Modal } from 'react-native'
import { useStateValue } from '../../../context/StateProvider'
import {actionTypes} from "../../../context/Reducer"
import { setLocalstorage } from "../../../function/Function";
const ConfirmDeleteStore = ({openConfirmDelete,setOpenConfirmDelete, id,modalUpdateStore,setModalUpdateStore}) => {
 const [{store},dispatch] = useStateValue();
 const handleDeleteStore = () =>{
  const newArr = store.filter((item)=> item.id !== id);
  dispatch({
   type: actionTypes.STORE,
   store: newArr,
  })
  setLocalstorage("store",newArr);
 }
 return (
  <View style={styles.container}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={openConfirmDelete}
      >
       <View style={styles.container}>
        <Text style={styles.question }>Do you want to delete..!</Text> 
        <View style={styles.containBtn}>
         <TouchableWithoutFeedback onPress={()=>{handleDeleteStore(),setOpenConfirmDelete(!openConfirmDelete),setModalUpdateStore(!modalUpdateStore)}}>
          <View style={styles.btn}>
           <Text>Yes</Text>
          </View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={()=> setOpenConfirmDelete(!openConfirmDelete)}>
           <View style={styles.btn}>
           <Text>No</Text>
          </View>
         </TouchableWithoutFeedback>
        </View>
       </View>
      </Modal>
  </View>
 )
}
const styles = StyleSheet.create({
  container : {
   flex: 1,
   backgroundColor: "#FFFF",
   opacity: 0.9,
   justifyContent: "center",
   alignItems: "center",
  },
  containBtn: {
   flexDirection: "row",
   backgroundColor: "red",
  },
  btn: {
   backgroundColor: "orange",
   width: 100,
   alignItems: "center",
   paddingVertical: 10,
   borderLeftWidth: 1,
   borderLeftColor: "#FFFF",
  borderBottomEndRadius: 5,
  borderBottomRightRadius: 5,

  },
  question:{
   paddingVertical: 15,
   width: 200,
   textAlign: "center",
   fontWeight:"bold",
   backgroundColor:"yellow"}
   
  

})

export default ConfirmDeleteStore;

import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { View, Text, Modal ,Alert} from 'react-native'
import { useStateValue } from '../../../context/StateProvider'
import {actionTypes} from "../../../context/Reducer"
import { setLocalstorage } from "../../../function/Function";
import {db} from "../../../api/firebase"
const ConfirmDelete = ({openConfirmDelete,setOpenConfirmDelete, updateData,setModalVisible,modalVisible}) => {
 const [{customer},dispatch] = useStateValue();
//  const handleDeleteItem = () =>{
//   const newArr = customer.filter((item)=> item.id !== id);
//   dispatch({
//    type: actionTypes.CUSTOMER,
//    customer: newArr,
//   })
//   setLocalstorage("customer",newArr);
//  }
const deleteCustomer = async () => {
  const deteteFood  = await db.collection("customers").doc(updateData.id).delete()
  .then(() => {
      Alert.alert("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
}

 return (
  <View style={styles.container}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={openConfirmDelete}
      >
       <View style={styles.container}>
        <Text style={{paddingVertical: 15,fontWeight:"bold"}}>Do you want to delete..!</Text> 
        <View style={styles.containBtn}>
         <TouchableWithoutFeedback onPress={()=>{deleteCustomer(),setOpenConfirmDelete(!openConfirmDelete),setModalVisible(!modalVisible)}}>
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

  }

})

export default ConfirmDelete

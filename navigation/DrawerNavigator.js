import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Container, Heading, NativeBaseProvider, Center } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import BottomTabNavigator from "./TabNavigator";
import { Feather } from "@expo/vector-icons";
// import AsyncStorage from '@react-native-community/async-storage';
import {
  CustomerStackNavigator,
  ReceiptStackNavigator,
  MoreStackNavigator,
  PaymentStackNavigator,
  ItemStackNavigator,
  MapStackNavigator,
} from "./StackNavigator";
import TopNavigator from "./TopNavigator";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { actionTypes } from "../context/Reducer";
import { customerData } from "../data/Data";
import { useStateValue } from "../context/StateProvider";
import { setLocalstorage } from "../function/Function";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const [{ customer, item }, dispatch] = useStateValue();
  const getLocalStorage = async () => {
    // customner
    let customer = await AsyncStorage.getItem("customer");
    let newCusotmer = customer === null ? [] : JSON.parse(customer);
    dispatch({
      type: actionTypes.CUSTOMER,
      customer: newCusotmer,
    });
    // item
    let item = await AsyncStorage.getItem("item");
    let newItem = item === null ? [] : JSON.parse(item);
    dispatch({
      type: actionTypes.ITEM,
      item: newItem,
    });
    // store
    let store = await AsyncStorage.getItem("store");
    let newStore = store === null ? [] : JSON.parse(store);
    dispatch({
      type: actionTypes.STORE,
      store: newStore,
    });
    // payment method
    let paymentMethod = await AsyncStorage.getItem("paymentMethod");
    let newMethod = paymentMethod === null ? [] : JSON.parse(paymentMethod);
    dispatch({
      type: actionTypes.PAYMENTMETHOD,
      paymentmethod: newMethod,
    });
  };
  React.useEffect(() => {
    getLocalStorage();
  }, []);
  return (
    <Drawer.Navigator initialRouteName="Home" drawerStyle={{ width: "60%" }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: "Back",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="chevron-back"
              size={24}
              color={focused ? "#e32f45" : "#748c94"}
            />
          ),
        }}
      />
     <Drawer.Screen
        name="customer"
        component={CustomerStackNavigator}
        options={{
          title: "customer",
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="users"
              size={20}
              color={focused ? "#e32f45" : "#748c94"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Receipt"
        component={ReceiptStackNavigator}
        options={{
          title: "Receipt",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="receipt"
              size={20}
              color={focused ? "#e32f45" : "#748c94"}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Payment"
        component={PaymentStackNavigator}
        options={{
          title: "Payment",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="payment"
              size={20}
              color={focused ? "#e32f45" : "#748c94"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Item"
        component={ItemStackNavigator}
        options={{
          title: "Item",
          drawerIcon: ({ focused, size }) => (
            <Entypo
              name="shop"
              size={20}
              color={focused ? "#e32f45" : "#748c94"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Map"
        component={MapStackNavigator}
        options={{
          title: "Map",
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="location-arrow"
              size={20}
              color={focused ? "#e32f45" : "#748c94"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="More"
        component={MoreStackNavigator}
        options={{
          title: "More",
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="more-horizontal"
              size={20}
              color={focused ? "#e32f45" : "#748c94"}
            />
          ),
        }}
      /> 
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

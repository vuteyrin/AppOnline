import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import Home from "../screens/Home";
import About from "../screens/About";

import Setting from "../screens/Setting";
import Map from "../screens/Map";
import Header from "../components/header/Header";
import TopNavigator from "./TopNavigator";
import Report from "../screens/Report";
import Customer from "../screens/Customer";
import Receipt from "../screens/Receipt";
import More from "../screens/More";
import Payment from "../screens/Payment";
import Item from "../screens/Item";
import Store from "../components/store/Store";
import PayMethod from "../components/paymentMethod/PayMethod";
import Menu from "../screens/Menu";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#FF8C00",
    // width: screenWidth,
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Menu"
        // component={TopNavigator}
        component={Menu}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => <Header navigation={navigation} route={route} />,
          };
        }}
        // options={{
        //   headerShown: false,
        // }}
      />
         <Stack.Screen
        name="Store"
        component={Store}
        // options={({ navigation, route }) => {
        //   return {
        //     headerTitle: () => <Header navigation={navigation} route={route} />,
        //   };
        // }}
      />
       <Stack.Screen
        name="PaymentMethod"
        component={PayMethod}
        // options={({ navigation, route }) => {
        //   return {
        //     headerTitle: () => <Header navigation={navigation} route={route} />,
        //   };
        // }}
      />
      
    </Stack.Navigator>
  );
};
const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => <Header navigation={navigation} route={route} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};
const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => <Header navigation={navigation} route={route} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};
const ReportStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Report"
        component={Report}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => <Header navigation={navigation} route={route} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};
const MapStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Map"
        component={Map}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => <Header navigation={navigation} route={route} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};
const CustomerStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="customer"
        component={Customer}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => <Header navigation={navigation} route={route} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};
const ReceiptStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Receipt"
        component={Receipt}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => <Header navigation={navigation} route={route} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};
const MoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="More"
        component={More}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => <Header navigation={navigation} route={route} />,
          };
        }}
      />
       <Stack.Screen
        name="Store"
        component={Store}
        // options={({ navigation, route }) => {
        //   return {
        //     headerTitle: () => <Header navigation={navigation} route={route} />,
        //   };
        // }}
      />
       <Stack.Screen
        name="PaymentMethod"
        component={PayMethod}
        // options={({ navigation, route }) => {
        //   return {
        //     headerTitle: () => <Header navigation={navigation} route={route} />,
        //   };
        // }}
      />
    </Stack.Navigator>
  );
};
const PaymentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => <Header navigation={navigation} route={route} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};
const ItemStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Payment"
        component={Item}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => <Header navigation={navigation} route={route} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  ReportStackNavigator,
  AboutStackNavigator,
  SettingStackNavigator,
  MapStackNavigator,
  ////stack for drawer////
  CustomerStackNavigator,
  ReceiptStackNavigator,
  MoreStackNavigator,
  PaymentStackNavigator,
  ItemStackNavigator,
};

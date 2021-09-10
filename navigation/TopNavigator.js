import React from "react";
import Home from "../screens/Home";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useStateValue } from "../context/StateProvider";
const Tab = createMaterialTopTabNavigator();
export default function TopNavigator() {
  const [{ language }] = useStateValue();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "black",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "#FFFF", height: 40, marginTop: -5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: language ? "Home" : "ផ្ទះ" }}
      />
      <Tab.Screen
        name="Notifications"
        component={Home}
        options={{ tabBarLabel: language ? "Roron" : "លាប ខ្លៀក" }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{ tabBarLabel: language ? "sompoo" : "សាប៊ូ" }}
      />
    </Tab.Navigator>
  );
}

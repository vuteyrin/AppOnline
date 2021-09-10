import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  ReportStackNavigator,
  AboutStackNavigator,
  SettingStackNavigator,
} from "./StackNavigator";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",

          elevation: 0,
          backgroundColor: "#ffff",
          borderRadius: 5,
          height: 60,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 0,
              }}
            >
              <FontAwesome5
                name="home"
                size={18}
                color={focused ? "orange" : "#748c94"}
              />
              <Text style={{ color: focused ? "orange" : "#748c94" }}>
                home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 0,
              }}
            >
              <FontAwesome
                name="user-circle-o"
                size={18}
                color={focused ? "orange" : "#748c94"}
              />

              <Text style={{ color: focused ? "orange" : "#748c94" }}>
                about
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Report"
        component={ReportStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 0,
              }}
            >
              <Entypo
                name="folder"
                size={18}
                color={focused ? "orange" : "#748c94"}
              />
              <Text style={{ color: focused ? "orange" : "#748c94" }}>
                report
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 0,
              }}
            >
              <Ionicons
                name="md-settings"
                size={19}
                color={focused ? "orange" : "#748c94"}
              />

              <Text style={{ color: focused ? "orange" : "#748c94" }}>
                setting
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  TabStyle: {},
  shadow: {
    //working for iOS
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    //working for android
    elevation: 5,
  },
});

export default BottomTabNavigator;

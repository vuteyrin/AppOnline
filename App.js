import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { StateProvider, useStateValue } from "./context/StateProvider";
import reducer, { initialState } from "./context/Reducer";
const App = () => {
  return (
    <NavigationContainer>
      <StateProvider initialState={initialState} reducer={reducer}>
        <DrawerNavigator />
      </StateProvider>
    </NavigationContainer>
  );
};
export default App;

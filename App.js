import React from "react";
import SignIn from "./src/screens/AuthModules/SignIn/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AppContainer from "./src/navigators";

const App = () => {
  return (
   <>
   <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
    <AppContainer />
   </NavigationContainer>
   </>
  )
}

export default App;
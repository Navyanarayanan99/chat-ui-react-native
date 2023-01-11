import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import headerLeftIcon from "./assets/headerLeftIcon.png";
import Home from "./Screens/Home";
import Icon from "react-native-vector-icons/Feather";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Contacts",
            headerLeft: () => (
              <Image source={headerLeftIcon} style={styles.headerLeftIcon} />
            ),
            headerRight: () => (
              <Icon
                name="search"
                color="#bcbcbc"
                size={22}
                style={styles.rightIcon}
              />
            ),
            headerTitleAlign: "center",
            headerTitleStyle:{
              color:'#646464',
              fontSize: 24
              
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  headerLeftIcon: {
    height: 20,
    width: 20,
    margin: 10,
  },
});

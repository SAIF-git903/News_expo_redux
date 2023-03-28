import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import ContactScreen from "./Screens/ContactScreen"
import { AntDesign } from "@expo/vector-icons"
import { useFonts } from 'expo-font';
import SplashScreen from './Screens/SplashScreen';

export default function App() {

  const Tab = createBottomTabNavigator()
  const [splash, setSplash] = useState(true)

  let [fontsLoaded] = useFonts({
    "instaBold": require("./assets/fonts/instaBold.otf"),
    "instaReg": require("./assets/fonts/instaReg.otf")
  })
  
  let randomSplash = Math.floor(Math.random() * 4000)

  setTimeout(() => {
    setSplash(false)
  }, randomSplash);

  if (!fontsLoaded) {
    return false
  } else {
    return (
      splash ? <SplashScreen /> :
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              tabBarActiveBackgroundColor: "lightblue",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 30,
                fontFamily: "instaReg",
                fontWeight: "200",
              },
              tabBarActiveTintColor: "black",
            }}>
            <Tab.Screen name='Home' component={HomeScreen}
              options={{
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: "bold"
                },
                tabBarIcon: () => <AntDesign
                  name='home'
                  size={25}
                />
              }} />
            <Tab.Screen name='Search' component={SearchScreen}
              options={{
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: "bold",
                },
                tabBarIcon: () => <AntDesign
                  name='search1'
                  size={25}
                />
              }} />
            <Tab.Screen name='Contact' component={ContactScreen}
              options={{
                headerTransparent: 1,
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: "bold",
                },
                headerTintColor: "skyblue",
                tabBarIcon: () => <AntDesign
                  name='user'
                  size={25}
                />
              }} />
          </Tab.Navigator>
        </NavigationContainer>
    )
  }
}

import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import FindScreen from "../pages/FindScreen";
import Profile from "../pages/Profile/Profile";

const Tab = createBottomTabNavigator();

export class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/home.png")}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
              </View>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Find"
          component={FindScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/searchs.png")}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
              </View>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="MainProfile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/user-profile.png")}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
              </View>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  }
}

export default Tabs;

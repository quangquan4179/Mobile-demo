import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/HomeScreen";
import { NativeBaseProvider } from "native-base";
import ResgiterScreen from "./pages/RegisterScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";

export type RootStackParams ={
  Home:any;
  Login:any;
  Register:any;
  ForgotPassword:any;
}

const Stack = createNativeStackNavigator<RootStackParams>();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
            <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={ResgiterScreen}
          />
               <Stack.Screen
            options={{ headerShown: false }}
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

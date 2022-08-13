import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./pages/Auth/LoginScreen";
import MainScreen from "./pages/MainScreen";
import { NativeBaseProvider } from "native-base";
import ResgiterScreen from "./pages/Auth/RegisterScreen";
import ForgotPasswordScreen from "./pages/Auth/ForgotPasswordScreen";

export type RootStackParams ={
  Main:any;
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
          <Stack.Screen  options={{ headerShown: false }} name="Main" component={MainScreen} />
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

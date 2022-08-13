import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import React, { useState, useMemo } from "react";
import InputComponent from "../../components/Input";
import { Button, Stack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../App";
import AuthStore from "../../store/AuthStore";

interface Data {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [data, setData] = useState<Data>({
    email: "",
    password: "",
  });

  const { email, password }: { email: string; password: string } = data;

  const handeChange = (text: string, input: string) => {
    setData({ ...data, [input]: text });
  };
  const handleSubmit = async () => {
    await AuthStore.Login(email, password);
    navigation.replace("Main");
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F12084",
      }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          height: Dimensions.get("window").height / 2.9,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#ffffff", fontSize: 40 }}>Live Stream</Text>
      </View>
      <VStack direction="column" space={8} style={styles.login}>
        <View>
          <Text style={styles.headerTitle}>Welcome!</Text>
        </View>
        <View style={styles.textInput}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={20}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <InputComponent
              label="Email"
              placehoder="Enter email ID"
              size="2xl"
              onFocus={() => {}}
              value={email}
              onChange={handeChange}
            />
            <InputComponent
              label="Password"
              placehoder="Enter password"
              size="2xl"
              onFocus={() => {}}
              value={password}
              password
              onChange={handeChange}
            />
          </KeyboardAvoidingView>

          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
            style={styles.forgotPassword}
          >
            <Text style={{ color: "#ffffff" }}>Forgot password</Text>
          </TouchableOpacity>
          <View>
            <Button
              size="lg"
              bgColor={"#000000"}
              onPress={() => handleSubmit()}
            >
              Login
            </Button>
          </View>
        </View>
      </VStack>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text>Don’t have an account? Create account,Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 32,
    color: "#FFFFFF",
    textAlign: "center",
  },
  content: {},
  login: {
    backgroundColor: "#9c0b4c",
    borderRadius: 30,
    shadowColor: " rgba(0, 0, 0, 0.5)",
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    padding: 20,
    flex: 1,
  },
  forgotPassword: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

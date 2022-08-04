import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import InputCoponent from "../components/Input";
import { Button, Stack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";



const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [data, setData]= useState()

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F12084",
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{
        height: Dimensions.get("window").height / 2.9,
        justifyContent:'center',
        alignItems:'center'
        
      }}>
        <Text style={{color:"#ffffff", fontSize:40}}>Live Stream</Text>

      </View>
      <KeyboardAvoidingView style={styles.content}>
        <VStack direction="column" space={8} style={styles.login}>
          <View >
            <Text style={styles.headerTitle}>
              Welcome!
            </Text>
          </View>
          <View style={styles.textInput} >
            <VStack space={5}>
            <InputCoponent
              label="Email"
              placehoder="Enter email ID"
              size="2xl"
              onFocus={() => { }}
            />
            <InputCoponent
              label="Password"
              placehoder="Enter password"
              size="2xl"
              onFocus={() => { }}
              password
            />
            </VStack>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPassword}>
              <Text style={{color:'#ffffff'}}>Forgot password</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity >
                <Stack mb="10" mt="10"  >
                  <Button size="lg" bgColor={'#000000'}>Login</Button>
                </Stack>
              </TouchableOpacity>
            </View>
          </View>
        </VStack>
      </KeyboardAvoidingView>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
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
    textAlign:'center'
  },
  content: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  login: {

    backgroundColor: "#9c0b4c",
    borderRadius: 30,
    shadowColor: ' rgba(0, 0, 0, 0.5)'
  },
  textInput:{
    padding:20,
    flex:1

  },
  forgotPassword:{
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

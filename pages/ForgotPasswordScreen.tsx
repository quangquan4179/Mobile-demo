import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Dimensions,
    Image,
  } from "react-native";
  import React from "react";
  import InputCoponent from "../components/Input";
  import { Button, Stack, VStack } from "native-base";
  import { useNavigation } from "@react-navigation/core";
  import { NativeStackNavigationProp } from "@react-navigation/native-stack";
  import { RootStackParams } from "../App";
  
  
  
  const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
        }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={require("../images/bg.jpg")}
          style={{
            height: Dimensions.get("window").height / 2.8,
          }}
        >
          <View style={styles.header}>
            <Image
              source={require("../images/pionero.png")}
              style={styles.logo}
            />
          </View>
        </ImageBackground>
        <View style={styles.headerButton}>
          <View
            style={{
              padding: 20,
            }}
          >
            <Text style={styles.headerTitle}>Welcome!</Text>
          </View>
        </View>
  
        <KeyboardAvoidingView style={styles.content}>
          <VStack direction="column" space={8}>
            <InputCoponent
              label="Email"
              placehoder="Email"
              size="2xl"
              onFocus={() => {}}
            />
          </VStack>
        </KeyboardAvoidingView>
        <VStack>
          <View>
            <TouchableOpacity>
              <Stack mb="10" mt="10" mr="4" ml="4" >
              <Button size="lg">Send</Button>
  
  
              </Stack>
            </TouchableOpacity>
          </View>
        </VStack>
  
        <View style={styles.nav}>
      
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  export default ForgotPasswordScreen;
  
  const styles = StyleSheet.create({
    header: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: 200,
      height: 60,
    },
    headerButton: {
      flex: 1,
      bottom: 50,
      backgroundColor: "#ffffff",
      borderTopStartRadius: 60,
      borderTopEndRadius: 60,
    },
    headerTitle: {
      textTransform: "uppercase",
      fontSize: 32,
      color: "#4632A1",
    },
    content: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
    },
    login: {},
    nav: {
      flexDirection: "row",
      justifyContent:'flex-end',
      marginLeft: 20,
      marginRight: 20,
    },
  });
  
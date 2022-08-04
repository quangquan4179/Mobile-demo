import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { Box, Button, Divider, FormControl, Icon, Input, Stack } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParams } from "../App";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F12084",
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ marginLeft: 5, marginRight: 5 }}>
        <View style={{ marginTop: 40 }} >
          <Text style={styles.headerTitle}>Forgot password!</Text>
          <Divider m="3" width='95%' />
        </View>
        <KeyboardAvoidingView style={styles.content}>
          <View >
            <View>
            <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 14, height: Dimensions.get("window").height / 5 }}>Enter your email address and
              we will  send a link to reset your password</Text>
            </View>
          </View>
          <Box>
            <FormControl>
              <Input type="text" size='2xl'  placeholder="Enter email ID"/>
            </FormControl>
          </Box>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}  >
            <Stack mb="10" mt="10"  >
              <Button size="lg" bgColor={'#000000'}  endIcon={<Icon as={Ionicons} name="send" size="lg" />}>Send Email</Button>
            </Stack>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>

    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({

  headerTitle: {
    fontSize: 32,
    color: "#FFFFFF",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  content: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },



});

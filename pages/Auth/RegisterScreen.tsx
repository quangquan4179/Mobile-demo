import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { Box, Button, Divider, FormControl, Input, Stack} from "native-base";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../App";



const ResgiterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F12084",
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{marginLeft:5, marginRight:5}}>
        <View >
          <Text style={styles.headerTitle}>Register!</Text>
          <Divider m="3" width='95%' />
        </View>
        <KeyboardAvoidingView style={styles.content} keyboardVerticalOffset={20} behavior={Platform.OS==='ios'?"padding":"height"}>
          <Box>
            <FormControl>
              <FormControl.Label  _text={{color:"#ffffff"}}>Full name</FormControl.Label>
              <Input type="text" size='2xl' />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormControl.Label _text={{color:"#ffffff"}}>Email</FormControl.Label>
              <Input type="text" size='2xl' />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormControl.Label _text={{color:"#ffffff"}}>Date of birth</FormControl.Label>
              <Input size='2xl' />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormControl.Label _text={{color:"#ffffff"}}>Date of birth</FormControl.Label>
              <Input size='2xl' />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormControl.Label _text={{color:"#ffffff"}}>Confirm your pasword</FormControl.Label>
              <Input size='2xl' />
            </FormControl>
          </Box>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}  >
            <Stack mb="10" mt="10"  >
              <Button size="lg" bgColor={'#000000'}>Register</Button>
            </Stack>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>

    </ScrollView>
  );
};

export default ResgiterScreen;

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

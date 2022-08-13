import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { Avatar, Button, Divider, VStack } from "native-base";
import AuthStore from "../../store/AuthStore";
import { observer } from "mobx-react-lite";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import { ProfileStackParamList } from "./Profile";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import BottomPopup from "../../components/BottomPopup";

const ProfileScreen = () => {

  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();
    const [show, setShow] = useState<boolean>(false);
    
    
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#61dadb"/>
      <VStack style={styles.topNav} margin={5}>
        <TouchableOpacity>
          <Ionicons name="person-add-outline" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setShow(true)}>
          <FontAwesome5 name="bars" size={24} color="black" />
        </TouchableOpacity>
      </VStack>
      <VStack space={2} alignItems="center">
        <Avatar
          size="2xl"
          bg="muted.400"
          source={{
            uri: AuthStore.user?.avatar,
          }}
        >
          {AuthStore.user?.last_name}
          <Avatar.Badge bg="green.500" />
        </Avatar>
        <Text>{`${AuthStore.user?.first_name} ${AuthStore.user?.last_name}`}</Text>
        <View>
          <View style={styles.infor}>
            <View style={styles.detailsInfo}>
              <Text style={styles.detailsNumber}>0</Text>
              <Text style={{ textAlign: "center" }}>folower</Text>
            </View>
            <Divider
              thickness="1"
              mx="2"
              orientation="vertical"
              style={{ height: 20 }}
            />

            <View style={styles.detailsInfo}>
              <Text style={styles.detailsNumber}>0</Text>
              <Text style={{ textAlign: "center" }}>folowing</Text>
            </View>
            <Divider
              thickness="1"
              mx="2"
              orientation="vertical"
              style={{ height: 20 }}
            />

            <View style={styles.detailsInfo}>
              <Text style={styles.detailsNumber}>0</Text>
              <Text style={{ textAlign: "center" }}> Like</Text>
            </View>
          </View>
        </View>
      </VStack>
      <VStack space={2} alignItems="center">
        <View>
          <Button
            variant="outline"
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            Edit profile
          </Button>
        </View>
        <Divider />
      </VStack>
      <VStack space={2} alignItems="center" marginTop={10}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/gallery-icon-png-19.jpg")}
            resizeMode="contain"
            style={{ width: 80, height: 80 }}
          />
          <Text>Share your most popular photos</Text>
          <Button bgColor={"red.500"} marginTop={5}>
            Upload
          </Button>
        </View>
      </VStack>
      {/* <BottomPopup show={show}  close={()=>setShow(false)}  /> */}
    </SafeAreaView>
  );
};

export default observer(ProfileScreen);

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    justifyContent:'space-between'
  },
  infor: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  detailsInfo: {
    padding: 15,
  },
  detailsNumber: {
    textAlign: "center",
    fontWeight: "600",
  },
});

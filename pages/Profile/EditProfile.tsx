import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { VStack, Avatar, Divider } from "native-base";
import AuthStore from "../../store/AuthStore";
import { observer } from "mobx-react-lite";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "./Profile";



const EditProfile = () => {
  const navigation =
  useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();
  return (
    <SafeAreaView>
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
      </VStack>
      <VStack space={2} margin={5}>
        <Text style={styles.subtitle}>Basic Information</Text>
        <TouchableOpacity style={styles.DetailsInformation} onPress={()=>{
          navigation.navigate('EditFirstName')

        }}>
          <Text> First Name</Text>
          <View style={styles.leftItem}>
            <Text>{AuthStore.user?.first_name}</Text>
            <AntDesign name="right" size={16} color="#9c9b98" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DetailsInformation} onPress={()=>{
          navigation.navigate('EditLastName')
        }}>
          <Text> Last Name</Text>
          <View style={styles.leftItem}>
            <Text>{AuthStore.user?.last_name}</Text>
            <AntDesign name="right" size={16} color="#9c9b98" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DetailsInformation}>
          <Text> Gender</Text>
          <View style={styles.leftItem}>
            <Text>{AuthStore.user?.gender}</Text>
            <AntDesign name="right" size={16} color="#9c9b98" />
          </View>
        </TouchableOpacity>
        <Divider/>
        <Text style={styles.subtitle}>Social network link</Text>
        <TouchableOpacity style={styles.DetailsInformation} onPress={()=>{
          navigation.navigate('EditYoutubeLink')
        }}>
          <Text> Youtube</Text>
          <View style={styles.leftItem}>
            <Text style={styles.colorLightText}>Add Youtube to your link</Text>
            <AntDesign name="right" size={16} color="#9c9b98" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DetailsInformation} onPress={()=>{
          navigation.navigate('EditFaceLink')
        }}>
          <Text> Facebook</Text>
          <View style={styles.leftItem}>
            <Text style={styles.colorLightText}>Add Facebook to your link</Text>
            <AntDesign name="right" size={16} color="#9c9b98" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DetailsInformation} onPress={()=>{
          navigation.navigate('EditTwitterLink')
        }}>
          <Text> Twitter</Text>
          <View style={styles.leftItem}>
            <Text style={styles.colorLightText}>Add Twitter to your link</Text>
            <AntDesign name="right" size={16} color="#9c9b98" />
          </View>
        </TouchableOpacity>
      </VStack>
    </SafeAreaView>
  );
};

export default observer(EditProfile);

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#9c9b98",
  },
  DetailsInformation: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  colorLightText:{
    color:'#b5b5b5'

  },
  leftItem:{
    flexDirection: "row",
    justifyContent:'space-evenly'
  }
});

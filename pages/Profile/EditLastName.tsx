import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProfileStackParamList } from "./Profile";
import { Divider, VStack, Input} from 'native-base';
import {observer} from 'mobx-react-lite'
import AuthStore from '../../store/AuthStore';

const EditLastName = () => {
    const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();
    const [lastName, setLastName] = useState<string | undefined>(
        AuthStore.user?.last_name
      );
  return (
    <SafeAreaView>
    <VStack
        flexDirection="row"
        justifyContent={"space-between"}
        margin={5}
        alignItems="center"
      >
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "center" }}
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <AntDesign name="left" size={20} color="red" />
          <Text style={{ color: "red" }}>Cancel</Text>
        </TouchableOpacity>
        <Text>FirstName</Text>

        <TouchableOpacity onPress={() => {}}>
          <Text>Save</Text>
        </TouchableOpacity>
      </VStack>
      <Divider />
      <VStack margin={5}>
        <Input
          variant="underlined"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </VStack>

    </SafeAreaView>
  )
}

export default observer(EditLastName)

const styles = StyleSheet.create({})
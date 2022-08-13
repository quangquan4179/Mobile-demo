import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Divider, Input, VStack } from "native-base";
import AuthStore from "../../store/AuthStore";
import { observer } from "mobx-react-lite";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "./Profile";

const EditFirstName = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

  const [firstName, setFirstName] = useState<string | undefined>(
    AuthStore.user?.first_name
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
          placeholder="Underlined"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
      </VStack>
    </SafeAreaView>
  );
};

export default observer(EditFirstName);

const styles = StyleSheet.create({});

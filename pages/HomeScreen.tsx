import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { VStack } from "native-base";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <VStack margin={5}>
        <TouchableOpacity>
          <MaterialIcons name="live-tv" size={30} color="black" />
        </TouchableOpacity>
      </VStack>
      <VStack space={2} alignItems="center">
        <View>
          <Text>List Live Hear</Text>
        </View>
      </VStack>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { VStack , Image, Input, Icon} from "native-base";
import AuthStore from "../store/AuthStore";
import { FontAwesome } from '@expo/vector-icons'; 
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeContainer} >
      <VStack alignItems={'center'}  style={styles.content}> 
        <View style={styles.headerContent}>
          <Image size={'xs'} style={styles.headerImage} source={{
            uri:AuthStore.user?.avatar
          }}/>
          <Text style={styles.headerText}>Hi, {AuthStore.user?.last_name}</Text>
        </View>
        <View style={styles.headerSearch}>
        <Input w="full" h="12" InputLeftElement={<Icon as={<FontAwesome name="search" size={24}  />} size={"3xl"} ml="2" color="white" />}   />
        </View>
      </VStack>
     
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer:{
    backgroundColor:"#F12084",
    flex:1
  },
  content:{
    margin:15

  },
  headerImage:{
    borderRadius:8,
    border:'2px solid #ffffff'

  },
  headerContent:{
    flexDirection:'row', 
    alignItems:"center",
    width:'100%'
  },
  headerSearch:{
    marginTop:30,
    width:'100%'
  },
  headerText:{
    flexGrow:1,
    fontSize:24,
    color:"#ffffff",
    marginLeft:10,
    padding:5
  }
});

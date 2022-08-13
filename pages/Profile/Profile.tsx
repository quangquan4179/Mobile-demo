import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import ProfileScreen from "./ProfileScreen";
import EditProfile from "./EditProfile";
import EditFirstName from "./EditFirstName";
import EditLastName from "./EditLastName";
export type ProfileStackParamList = {
  Profile: any;
  EditProfile: any;
  EditFirstName:any;
  EditLastName:any;
  EditYoutubeLink:any;
  EditTwitterLink:any;
  EditFaceLink:any;
};
const Stack = createNativeStackNavigator<ProfileStackParamList>();

import { useNavigation } from "@react-navigation/native";
import EditYouTube from "./editSocialNetworkLink/EditYouTube";
import EditTwitter from "./editSocialNetworkLink/EditTwitter";
import EditFaceBook from "./editSocialNetworkLink/EditFaceBook";


const Profile = () => {
  const navigation =useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown:false

        }}
      />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditFirstName" component={EditFirstName} options={{
        headerShown:false
      }}/>
      <Stack.Screen name="EditLastName" component={EditLastName} options={{
        headerShown:false
      }}/>
      <Stack.Screen name="EditYoutubeLink" component={EditYouTube} options={{}}/>
      <Stack.Screen name="EditTwitterLink" component={EditTwitter} options={{}}/>
      <Stack.Screen name="EditFaceLink" component={EditFaceBook} options={{}}/>

    </Stack.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({});

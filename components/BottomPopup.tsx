import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { VStack } from 'native-base';
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from '../App';
type Props={
    show:boolean,
    close:any,
  
}
const BottomPopup = ({show,close}:Props) => {
    const navigation=useNavigation<NativeStackNavigationProp<RootStackParams>>();
    
  return (
    <Modal animationType='fade' transparent={true} visible={show} onRequestClose={close}>
        <View style={{flex:1, backgroundColor:"#000000AA", justifyContent:'flex-end'}} >
            <View style={{
                backgroundColor:"#FFFFFF",
                width:'100%',
                paddingHorizontal:10,
                maxHeight: Dimensions.get("window").height / 3,
            }}>
                <View>
                    <VStack>
                    <TouchableOpacity style={{height:50}} onPress={()=>{
                        navigation.replace('Login')
                        close()

                    }}>
                        <Text>Logout</Text>
                    </TouchableOpacity>

                    </VStack>
                    
                </View>
            </View>
        </View>

    </Modal>
  )
}

export default BottomPopup

const styles = StyleSheet.create({})
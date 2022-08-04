import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {Icon, Input, Stack,Box} from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  label: string;
  onFocus: any;
  error?: any;
  password?: any;
  placehoder?: string;
  size?:string
};
const InputComponent = ({ label,password, onFocus, placehoder,error, size }: Props) => {
  const [isFocused, serFocused] = useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <Box  w="100%" alignItems="center" style={{backgroundColor:"#ffffff"}}>
        {password?(
            <Input
            placeholder={placehoder}
            autoCorrect={false}
            variant="outline"
            size={size}
            type={show ? "text" : "password"}
            InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400"  onPress={() => setShow(!show)} />}
            onFocus={() => {
              onFocus();
              serFocused(true);
            }}
            onBlur={()=>{
              serFocused(false)
            }}
          />
        ):(<Input
            placeholder={placehoder}
            autoCorrect={false}
            variant="outline"
            size={size}
            style={styles.inputStyle}

  
            onFocus={() => {
              onFocus();
              serFocused(true);
            }}
            onBlur={()=>{
              serFocused(false)
            }}
          />)}
    </Box>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputStyle:{
    backgroundColor:"#ffffff"
  }
});

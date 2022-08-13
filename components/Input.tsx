import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Icon, Input, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  label: string;
  onFocus: any;
  error?: any;
  password?: any;
  placehoder?: string;
  size?: string;
  value?: string;
  name?: string;
  onChange: any;
};
const InputComponent = ({
  label,
  password,
  onFocus,
  placehoder,
  error,
  size,
  value,
  name,
  onChange,
}: Props) => {
  const [isFocused, serFocused] = useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <Box w="100%" alignItems="center" style={{ marginBottom: 10 }}>
      {password ? (
        <Input
          value={value}
          placeholder={placehoder}
          autoCorrect={false}
          variant="outline"
          size={size}
          type={show ? "text" : "password"}
          style={styles.inputStyle}
          InputRightElement={
            <Icon
              style={styles.icon}
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              color="muted.400"
              onPress={() => setShow(!show)}
            />
          }
          onFocus={() => {
            onFocus();
            serFocused(true);
          }}
          onChangeText={(text) => onChange(text,"password")}
          onBlur={() => {
            serFocused(false);
          }}
        />
      ) : (
        <Input
          value={value}
          placeholder={placehoder}
          autoCorrect={false}
          variant="outline"
          size={size}
          style={styles.inputStyle}
          onFocus={() => {
            onFocus();
            serFocused(true);
          }}
          onChangeText={(text)=>onChange(text,"email")}

          onBlur={() => {
            serFocused(false);
          }}
        />
      )}
    </Box>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#ffffff",
  },
  icon: {
    height: "100%",
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingRight: 30,
  },
});

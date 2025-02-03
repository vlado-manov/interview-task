import React, { useState, Dispatch, SetStateAction } from "react";
import { View, TextInput, StyleSheet, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/colors";

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  styleInput?: ViewStyle;
  icon?: string;
  iconOnPress?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  style = {},
  styleInput = {},
  icon,
  iconOnPress,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          styles.primaryShadow,
          styleInput
        ]}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={isFocused ? "transparent" : colors.gray}
        secureTextEntry={secureTextEntry}
      />
      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color={colors.greenKale}
          style={styles.icon}
          onPress={iconOnPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 10,
    position: "relative",
  },
  input: {
    height: 50,
    borderColor: colors.gray,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 50,
    fontSize: 16,
    backgroundColor: colors.white,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: colors.greenKale,
    color: colors.greenKale,
  },
  primaryShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 13,
  },
});

export default CustomInput;

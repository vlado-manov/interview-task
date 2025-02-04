import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

type CustomButtonProps = {
  onPress?: () => Promise<void> | void;
  title: string;
  style: object;
  textStyle?: object;
  shadow?: object;
  IconComponent?: React.ComponentType<any>;
  EndIconComponent?: React.ComponentType<any>;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingIndicatorColor?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
  shadow,
  IconComponent,
  EndIconComponent,
  isDisabled = false,
  isLoading = false,
  loadingIndicatorColor = "#fff",
}) => (
  <TouchableOpacity
    style={[styles.button, style, shadow]}
    onPress={onPress}
    disabled={isDisabled || isLoading}
  >
    {isLoading ? (
      <ActivityIndicator size="small" color={loadingIndicatorColor} />
    ) : (
      <>
        {IconComponent && <IconComponent />}
        {title && <Text style={[styles.buttonText, textStyle]}>{title}</Text>}
        {EndIconComponent && <EndIconComponent />}
      </>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 100,
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default CustomButton;

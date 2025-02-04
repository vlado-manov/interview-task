import CustomButton from "@/src/components/CustomButton";
import { colors } from "@/src/utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/src/store/authSlice";
import Toast from "react-native-toast-message";
import { AppDispatch, RootState } from "@/src/store";

const SignUp = ({
  setModalVisible,
}: {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { width, height } = useWindowDimensions();
  const calculatedWidth = width - 32;
  const calculatedHeight = height - 32;

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, user } = useSelector(
    (state: RootState) => state.auth
  );
  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      console.log("all fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      console.log("passwords doesnt match");
      return;
    }
    try {
      const response = await dispatch(signupUser(formData));
      if (response.payload === "User already exists") {
        Alert.alert("User already exist");
      } else {
        Alert.alert("Form submitted!");
        console.log("Form submitted:", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={[
        styles.modalContainer,
        { width: calculatedWidth, height: calculatedHeight },
      ]}
    >
      <View style={styles.container}>
        <View>
          <StatusBar />
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setModalVisible(false)}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={24}
                color={colors.greenKale}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Maak account</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={formData.name}
              onChangeText={(text) => handleInputChange("name", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChangeText={(text) =>
                handleInputChange("confirmPassword", text)
              }
            />
          </View>
          <Text style={styles.bottomText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            istetatum, eligendi consequatur officia aliquam maxime!
          </Text>
        </View>
        <CustomButton
          title="Inschrijven"
          onPress={handleSubmit}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.whiteSalty,
    padding: 16,
    borderRadius: 8,
    zIndex: 3,
    position: "absolute",
    top: 16,
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  headerContainer: {
    position: "relative",
    alignItems: "center",
    marginVertical: 24,
  },
  backButton: {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translateY(-50%)",
  },
  headerText: {
    color: colors.greenKale,
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: 700,
  },
  inputContainer: {
    marginVertical: 4,
  },
  input: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
    padding: 8,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  bottomText: {
    color: colors.gray,
    marginTop: 12,
  },
  button: {
    textTransform: "uppercase",
    backgroundColor: colors.greenSalad,
    padding: 16,
    width: "100%",
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  buttonText: {
    color: colors.white,
  },
});

export default SignUp;

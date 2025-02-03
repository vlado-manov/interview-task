import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import CustomButton from "@/src/components/CustomButton";
import WeightScreenIllustrationIcon from "@/src/icons/WeightScreenIllustrationIcon";
import { colors } from "@/src/utils/colors";
import { MaterialIcons } from "@expo/vector-icons";

const WeightScreen = () => {
  const [weight, setWeightValue] = useState("65.0");
  const [unit, setUnit] = useState("kg");
  const [iconWidth, setIconWidth] = useState(0);

  const weights = Array.from({ length: 2000 }, (_, i) => ({
    label: `${(i / 10).toFixed(1)}`,
    value: `${(i / 10).toFixed(1)}`,
  }));

  const units = [
    { label: "kg", value: "kg" },
    { label: "lbs", value: "lbs" },
  ];

  const formatWeight = (value, unit) => {
    
  };

  const handleNext = async () => {
    
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/WeightScreenBackgroundImage.jpg")}
          style={styles.backgroundImage}
        />
        <View
          onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            setIconWidth(width);
          }}
        >
          <WeightScreenIllustrationIcon />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <TouchableOpacity>
          <View>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={colors.greenSalad}
            />
          </View>
          <Text style={styles.backButtonText}>Vorige vraag</Text>
        </TouchableOpacity>
        <View style={styles.topContainer}>
          <Text style={styles.subtitle}>
            Laten we mekaar beter leren kennen!
          </Text>
          <View>
            <View style={styles.progressLineContainer}>
              <View />
            </View>
            <Text style={styles.progressText}>6</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Wat is je huidige gewicht?</Text>
          <View>
            <View style={styles.pickerContainer}>
              <RNPickerSelect
                onValueChange={(value) => setWeightValue(value)}
                items={weights}
                value={weight}
                useNativeAndroidPickerStyle={false}
              />
            </View>
            <View style={styles.pickerContainerRight}>
              <RNPickerSelect
                onValueChange={(value) => setUnit(value)}
                items={units}
                value={unit}
                useNativeAndroidPickerStyle={false}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.infoText}>
            We gebruiken je info om je macro’s te berekenen voor je
            gepersonaliseerd wekelijks menu.
          </Text>
          <CustomButton
            title="VOLGENDE"
            onPress={handleNext}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  backButtonText: {
    color: colors.greenSalad,
    fontFamily: "Poppins-Medium",
    fontSize: 14,
  },
  topContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  progressLineContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 14,
  },
  progressLine: {
    backgroundColor: colors.greenSalad,
    borderRadius: 14,
  },
  progressText: {
    color: colors.greenKale,
  },
  subtitle: {
    color: colors.greenKale,
  },
  title: {
    textAlign: "center",
    color: colors.greenKale,
  },
  pickerContainer: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: colors.white,
  },
  pickerContainerRight: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  separator: {
    color: colors.greenKale,
  },
  infoText: {
    color: colors.gray,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.greenSalad,
    borderRadius: 25,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "Poppins-Medium",
  },
});

export default WeightScreen;

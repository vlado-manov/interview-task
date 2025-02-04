import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import CustomButton from "@/src/components/CustomButton";
import WeightScreenIllustrationIcon from "@/src/icons/WeightScreenIllustrationIcon";
import { colors } from "@/src/utils/colors";
import { MaterialIcons } from "@expo/vector-icons";

const WeightScreen = () => {
  const [weight, setWeightValue] = useState<string>("65.0");
  const [unit, setUnit] = useState<string>("kg");
  const [iconWidth, setIconWidth] = useState<number>(0);
  const { width, height } = useWindowDimensions();

  const isLandscape: boolean = width > height;

  const weights = Array.from({ length: 2000 }, (_, i) => ({
    label: `${(i / 10).toFixed(1)}`,
    value: `${(i / 10).toFixed(1)}`,
  }));

  const units = [
    { label: "kg", value: "kg" },
    { label: "lbs", value: "lbs" },
  ];

  const formatWeight = (value: string, unit: string) => `${value} ${unit}`;

  const handleNext = async () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/WeightScreenBackgroundImage.jpg")}
        style={styles.backgroundImage}
      />
      {!isLandscape && (
        <View style={styles.imageContainer}>
          <View
            onLayout={(event) => {
              const { width } = event.nativeEvent.layout;
              setIconWidth(width);
            }}
          >
            <WeightScreenIllustrationIcon />
          </View>
        </View>
      )}
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.backButtonContainer}>
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
          <View style={styles.pickerWrapper}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
  },
  contentContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginHorizontal: 16,
    padding: 16,
  },
  backButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 8,
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
    marginTop: 8,
    padding: 8,
    flexDirection: "row",
    gap: 4,
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
    marginVertical: 8,
  },
  pickerWrapper: {
    flexDirection: "row",
    gap: 8,
    marginVertical: 8,
  },
  pickerContainer: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: colors.white,
    flexGrow: 2,
  },
  pickerContainerRight: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    flexGrow: 0,
  },
  separator: {
    color: colors.greenKale,
  },
  infoText: {
    color: colors.gray,
    textAlign: "center",
    marginVertical: 8,
  },
  button: {
    backgroundColor: colors.greenSalad,
    borderRadius: 25,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "Poppins-Medium",
    paddingVertical: 8,
  },
});
export default WeightScreen;

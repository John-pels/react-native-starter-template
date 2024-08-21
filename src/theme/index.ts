import { Platform } from "react-native";
import { Colors } from "@constants/Colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/window";

export const theme = {
  colors: {
    light: { ...Colors.light },
    dark: { ...Colors.dark },
  },
  size: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  platform: {
    android: Platform.OS === "android",
    ios: Platform.OS === "ios",
  },
};

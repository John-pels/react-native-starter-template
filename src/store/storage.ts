// import { MMKV } from 'react-native-mmkv';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Important note: Currently, React Native MMKV is not supported in Expo Go.
// Instead, consider using Expo Dev Build.
// Alternatively, you can find a workaround by using react-native-async-storage with redux-persist.
// const storage = new MMKV();

export const reduxStorage = {
  getItem: async (key: string): Promise<string | null> => {
    // validateKey(key);
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.error("SecureStore getItem error:", error);
      return null;
    }
  },
  setItem: async (key: string, value: string): Promise<void> => {
    // validateKey(key);
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error("SecureStore setItem error:", error);
    }
  },
  removeItem: async (key: string): Promise<void> => {
    // validateKey(key);
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("SecureStore removeItem error:", error);
    }
  },
};

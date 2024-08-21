import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@hooks/useColorScheme'
import { Providers } from '@providers/.'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  //Toggle light and dark themes

  // const { theme: mode, toggleTheme } = useThemeContext();
  // const [isEnabled, setIsEnabled] = useState(mode === 'light' ? false : true);
  // const dispatch = useAppDispatch();
  // const toggleSwitch = () => {
  //   toggleTheme();
  //   setIsEnabled(previousState => !previousState);
  //   const newTheme = isEnabled ? 'dark' : 'light';
  //   dispatch(setTheme(newTheme));
  // };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Providers>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </Providers>
  )
}

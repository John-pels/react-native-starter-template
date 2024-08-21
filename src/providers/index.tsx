import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { SessionProvider } from '../contexts/session'
import { RQProvider } from './react-query'
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ThemeProvider, useThemeContext } from '../contexts/theme';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { useEffect } from 'react';
import { theme } from '@theme/.';
import { StatusBar as NativeStatusBar } from 'react-native';


export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { theme: currentTheme } = useThemeContext();
  const barStyle = currentTheme === 'dark' ? 'light' : 'dark';


  // Keep the root view background color in sync with the current theme
  useEffect(() => {
    setBackgroundColorAsync(
      currentTheme === 'dark'
        ? theme.colors.dark.background
        : theme.colors.light.background,
    );
    setTimeout(() => {
      NativeStatusBar.setBarStyle(`${barStyle}-content`);
    }, 0);
  }, [currentTheme, barStyle]);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SessionProvider>
          <RQProvider>
            <Provider store={store}>
              <ThemeProvider>
                <RootSiblingParent>{children}</RootSiblingParent>
              </ThemeProvider>
            </Provider>
          </RQProvider>
        </SessionProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

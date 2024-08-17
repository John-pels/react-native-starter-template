import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { SessionProvider } from '../contexts/session'
import { RQProvider } from './react-query'

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SessionProvider>
          <RQProvider>{children}</RQProvider>
        </SessionProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

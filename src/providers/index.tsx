import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { RQProvider } from "./react-query"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SessionProvider } from "../contexts/session"

export function Providers({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SessionProvider>
                    <RQProvider>
                        {children}
                    </RQProvider>
                </SessionProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    )
}

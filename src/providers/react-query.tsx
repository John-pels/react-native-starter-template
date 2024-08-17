import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import { Platform } from 'react-native'

export function ReactQueryDevtools() {
  if (__DEV__ && Platform.OS === 'web') {
    const { ReactQueryDevtools } = require('@tanstack/react-query-devtools')
    return <ReactQueryDevtools />
  }
  return null
}
export function RQProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 2,
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

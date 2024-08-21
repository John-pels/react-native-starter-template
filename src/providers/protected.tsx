import { type Href, Redirect } from 'expo-router'
import { Text } from 'react-native'
import { useSession } from '../contexts/session'

export const ProtectedProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { isLoading, session } = useSession()

  // if (isLoading) {
  //   return <Text> Loading...</Text>
  // }
  // if (!session) {
  //   return <Redirect href={'/not-found' as Href} />
  // }
  return children
}

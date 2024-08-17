import { StyleSheet, Text, View } from 'react-native'

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>This is a sign-in page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

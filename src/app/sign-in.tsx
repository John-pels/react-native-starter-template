import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'

export default function SignInScreen() {
  const { t } = useTranslation('signIn')
  return (
    <View style={styles.container}>
      <Text>{t('heading')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

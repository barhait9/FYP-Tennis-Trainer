import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import type { TextStyle } from 'react-native'
import { colours } from '../constants/colours'

const titleStyle: TextStyle = {
  color: colours.primary,
  fontSize: 20,
  fontWeight: 'bold',
}

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colours.background },
          headerTitleStyle: titleStyle,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="account"
          options={{
            headerShown: true,
            title: 'Account',
            headerStyle: { backgroundColor: colours.background },
            headerTintColor: colours.primary,
          }}
        />
      </Stack>
    </>
  )
}
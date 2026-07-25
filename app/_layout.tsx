import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{ title: 'Index' }}/>
    <Stack.Screen name="template" options={{ title: 'Search product' }} />
    <Stack.Screen name="loginScreen" options={{ title: 'Login' }} />
  </Stack>
);
}

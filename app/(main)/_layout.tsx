import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bottomNav,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#00C853',
        tabBarInactiveBackgroundColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="scanner"
        options={{
          tabBarIcon: () => <Ionicons name="qr-code-outline" size={28} color="#000" />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: () => <Ionicons name="search-outline" size={28} color="#000" />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: () => <Ionicons name="cart-outline" size={28} color="#000" />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    height: 60,
    borderTopWidth: 2,
    borderTopColor: '#000',
    backgroundColor: '#fff',
  },
});
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [operatorId, setOperatorId] = useState('');

  const handleLogin = () => {
    if (operatorId.trim()) {
      // Later: navigate to scanner screen
      console.log('Logging in as:', operatorId);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Warehouse WMS</Text>
      <TextInput
        value={operatorId}
        onChangeText={setOperatorId}
        placeholder="Operator ID"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 32 },
  input: { borderWidth: 1, padding: 12, fontSize: 16, marginBottom: 16 },
  button: { backgroundColor: '#007AFF', padding: 14, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: '600' }
});
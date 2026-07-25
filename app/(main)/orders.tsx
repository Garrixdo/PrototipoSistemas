import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function OrdersScreen() {
    const [showErrorView, setShowErrorView] = useState(false);
    const [errorText, setErrorText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>RZ IMPORT C.A</Text>
                <Text style={styles.headerUser}>usuario</Text>
            </View>

            {!showErrorView ? (
                <View style={styles.content}>
                    <View style={styles.orderCard}>
                        <View style={styles.row}><Text style={styles.label}>Orden N°</Text><Text style={styles.val}>#PF-99482</Text></View>
                        <View style={styles.row}><Text style={styles.label}>Codigo</Text><Text style={styles.val}>FIL-AWA-001</Text></View>
                        <View style={styles.row}><Text style={styles.label}>Descripción</Text><Text style={styles.val}>Filtro de aciete AWA</Text></View>
                        <View style={styles.row}><Text style={styles.label}>Cantidad</Text><Text style={styles.val}>1</Text></View>
                        <View style={styles.row}><Text style={styles.label}>Ubicación</Text><Text style={styles.val}>PASILLO A - ANAQUEL 3 - NIVEL 2</Text></View>
                    </View>

                    <Text style={styles.actionTitle}>Completar orden</Text>
                    <TouchableOpacity style={styles.btnQr}>
                        <Ionicons name="qr-code-outline" size={30} color="#000" />
                    </TouchableOpacity>

                    <Text style={styles.actionTitle}>Notificar error</Text>
                    <TouchableOpacity style={styles.btnError} onPress={() => setShowErrorView(true)}>
                        <Text style={styles.exclamation}>!</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.content}>
                    <View style={styles.errorBox}>
                        <TextInput
                            style={styles.errorInput}
                            placeholder="Describa el error:"
                            placeholderTextColor="#777"
                            multiline
                            value={errorText}
                            onChangeText={setErrorText}
                        />
                    </View>

                    <View style={styles.btnRow}>
                        <TouchableOpacity style={styles.btnGreen} onPress={() => setShowErrorView(false)}>
                            <Text style={styles.btnText}>Guardar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnRed} onPress={() => setShowErrorView(false)}>
                            <Text style={styles.btnText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { backgroundColor: '#00C853', paddingTop: 50, paddingBottom: 15, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' },
    headerTitle: { fontWeight: 'bold', fontSize: 16 },
    headerUser: { fontSize: 14, color: 'rgba(0,0,0,0.5)' },
    content: { flex: 1, alignItems: 'center', padding: 25 },
    orderCard: { width: '100%', marginBottom: 30 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    label: { fontWeight: 'bold', fontSize: 15 },
    val: { fontSize: 14, color: '#333' },
    actionTitle: { fontWeight: 'bold', fontSize: 16, marginTop: 15, marginBottom: 10 },
    btnQr: { backgroundColor: '#00C853', paddingVertical: 8, paddingHorizontal: 30, borderRadius: 20, borderWidth: 2, borderColor: '#000' },
    btnError: { backgroundColor: '#FF3D00', paddingVertical: 8, paddingHorizontal: 35, borderRadius: 20, borderWidth: 2, borderColor: '#000' },
    exclamation: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
    errorBox: { width: '100%', height: 220, borderWidth: 1.5, borderColor: '#555', borderRadius: 10, padding: 12, marginTop: 30, marginBottom: 25 },
    errorInput: { flex: 1, fontSize: 15, textAlignVertical: 'top' },
    btnRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
    btnGreen: { backgroundColor: '#00C853', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20, borderWidth: 2, borderColor: '#000' },
    btnRed: { backgroundColor: '#FF3D00', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20, borderWidth: 2, borderColor: '#000' },
    btnText: { fontWeight: 'bold', fontSize: 15, color: '#000' }
});
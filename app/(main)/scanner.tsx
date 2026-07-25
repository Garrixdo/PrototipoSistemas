import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScannerScreen() {
    const [step, setStep] = useState<'scan_product' | 'scan_location'>('scan_product');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>RZ IMPORT C.A</Text>
                <Text style={styles.headerUser}>usuario</Text>
            </View>

            {/* Contenido según el paso */}
            {step === 'scan_product' ? (
                <View style={styles.content}>
                    <Text style={styles.scanText}>Escanear QR Producto</Text>
                    <TouchableOpacity
                        style={styles.scannerBox}
                        onPress={() => setStep('scan_location')} // Simula lectura de QR
                    >
                        <View style={[styles.corner, styles.topLeft]} />
                        <View style={[styles.corner, styles.topRight]} />
                        <Ionicons name="camera-outline" size={50} color="#777" />
                        <View style={[styles.corner, styles.bottomLeft]} />
                        <View style={[styles.corner, styles.bottomRight]} />
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.content}>
                    {/* Datos del producto detectado */}
                    <View style={styles.infoGroup}>
                        <Text style={styles.infoLabel}>Producto</Text>
                        <Text style={styles.infoValue}>Filtro de aceite AWA</Text>

                        <View style={styles.row}>
                            <Text style={styles.infoLabel}>Código</Text>
                            <Text style={styles.infoValue}>FIL-AWA-001</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.infoLabel}>Cantidad</Text>
                            <Text style={styles.infoValue}>20</Text>
                        </View>
                    </View>

                    <Text style={styles.scanText}>Escanear QR Ubicación</Text>
                    <TouchableOpacity
                        style={styles.scannerBoxSmall}
                        onPress={() => setShowSuccessModal(true)} // Simula lectura de ubicación
                    >
                        <View style={[styles.corner, styles.topLeft]} />
                        <View style={[styles.corner, styles.topRight]} />
                        <Ionicons name="camera-outline" size={40} color="#777" />
                        <View style={[styles.corner, styles.bottomLeft]} />
                        <View style={[styles.corner, styles.bottomRight]} />
                    </TouchableOpacity>
                </View>
            )}

            {/* Modal de Vinculación Exitosa */}
            <Modal visible={showSuccessModal} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>Vinculación Exitosa</Text>

                        <Text style={styles.modalLabel}>Producto</Text>
                        <Text style={styles.modalValue}>Filtro de aceite AWA</Text>

                        <Text style={styles.modalLabel}>Cantidad</Text>
                        <Text style={styles.modalValue}>20</Text>

                        <Text style={styles.modalLabel}>Ubicación</Text>
                        <Text style={styles.modalValue}>PASILLO A - ANAQUEL 3 - NIVEL 2</Text>

                        <TouchableOpacity
                            style={styles.btnGreen}
                            onPress={() => {
                                setShowSuccessModal(false);
                                setStep('scan_product');
                            }}
                        >
                            <Text style={styles.btnText}>Escanear nuevamente</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: {
        backgroundColor: '#00C853',
        paddingTop: 50,
        paddingBottom: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: { fontWeight: 'bold', fontSize: 16 },
    headerUser: { fontSize: 14, color: 'rgba(0,0,0,0.5)' },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    scanText: { fontSize: 16, color: '#777', marginVertical: 15 },
    infoGroup: { width: '100%', marginBottom: 20 },
    infoLabel: { fontWeight: 'bold', fontSize: 16, marginTop: 5 },
    infoValue: { fontSize: 15, color: '#333' },
    row: { flexDirection: 'row', justifyContent: 'space-between', width: '60%' },
    scannerBox: { width: 220, height: 220, justifyContent: 'center', alignItems: 'center', position: 'relative' },
    scannerBoxSmall: { width: 180, height: 180, justifyContent: 'center', alignItems: 'center', position: 'relative' },
    corner: { position: 'absolute', width: 35, height: 35, borderColor: '#000' },
    topLeft: { top: 0, left: 0, borderTopWidth: 3, borderLeftWidth: 3 },
    topRight: { top: 0, right: 0, borderTopWidth: 3, borderRightWidth: 3 },
    bottomLeft: { bottom: 0, left: 0, borderBottomWidth: 3, borderLeftWidth: 3 },
    bottomRight: { bottom: 0, right: 0, borderBottomWidth: 3, borderRightWidth: 3 },
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center', padding: 20 },
    modalCard: { width: '100%', maxWidth: 330, backgroundColor: '#fff', borderRadius: 24, borderWidth: 3, borderColor: '#000', padding: 25, alignItems: 'center' },
    modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
    modalLabel: { fontWeight: 'bold', fontSize: 15, marginTop: 8 },
    modalValue: { fontSize: 14, color: '#444', textAlign: 'center' },
    btnGreen: { backgroundColor: '#00C853', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 20, borderWidth: 2, borderColor: '#000', marginTop: 20 },
    btnText: { fontWeight: 'bold', fontSize: 15 }
});
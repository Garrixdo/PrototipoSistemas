import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchScreen() {
    const [query, setQuery] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const results = [
        { code: 'FIL-AWA-001', desc: 'Filtro de aciete AWA', loc: 'PASILLO A - ANAQUEL 3 - NIVEL 2', cant: 20 },
        { code: 'FIL-RAL-001', desc: 'Filtro de aciete RALLY', loc: 'PASILLO A - ANAQUEL 3 - NIVEL 4', cant: 5 },
        { code: 'FIL-AWA-101', desc: 'Filtro de agua AWA', loc: 'PASILLO B - ANAQUEL 2 - NIVEL 4', cant: 12 },
        { code: 'FIL-AWA-201', desc: 'Filtro de aire AWA', loc: 'PASILLO B - ANAQUEL 2 - NIVEL 4', cant: 8 },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>RZ IMPORT C.A</Text>
                <Text style={styles.headerUser}>usuario</Text>
            </View>

            <View style={styles.content}>
                {!hasSearched && <Text style={styles.title}>Buscar Producto</Text>}

                <TextInput
                    style={styles.input}
                    placeholder="ingresar codigo o descripción"
                    value={query}
                    onChangeText={setQuery}
                />

                <TouchableOpacity
                    style={styles.btnSearch}
                    onPress={() => setHasSearched(true)}
                >
                    <Text style={styles.btnText}>Buscar</Text>
                </TouchableOpacity>

                {hasSearched && (
                    <ScrollView style={styles.tableContainer}>
                        <View style={styles.tableHeader}>
                            <Text style={[styles.cellHeader, { flex: 1.2 }]}>código</Text>
                            <Text style={[styles.cellHeader, { flex: 2 }]}>descripción</Text>
                            <Text style={[styles.cellHeader, { flex: 2 }]}>ubicación</Text>
                            <Text style={[styles.cellHeader, { flex: 0.8 }]}>cant.</Text>
                        </View>

                        {results.map((item, index) => (
                            <View key={index} style={styles.tableRow}>
                                <Text style={[styles.cell, { flex: 1.2 }]}>{item.code}</Text>
                                <Text style={[styles.cell, { flex: 2 }]}>{item.desc}</Text>
                                <Text style={[styles.cell, { flex: 2 }]}>{item.loc}</Text>
                                <Text style={[styles.cell, { flex: 0.8, textAlign: 'center' }]}>{item.cant}</Text>
                            </View>
                        ))}
                    </ScrollView>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { backgroundColor: '#00C853', paddingTop: 50, paddingBottom: 15, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' },
    headerTitle: { fontWeight: 'bold', fontSize: 16 },
    headerUser: { fontSize: 14, color: 'rgba(0,0,0,0.5)' },
    content: { flex: 1, alignItems: 'center', padding: 15, paddingTop: 30 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
    input: { width: '90%', height: 45, borderWidth: 1.5, borderColor: '#888', borderRadius: 22, paddingHorizontal: 15, fontSize: 15, marginBottom: 15 },
    btnSearch: { backgroundColor: '#00C853', paddingVertical: 10, paddingHorizontal: 35, borderRadius: 20, borderWidth: 2, borderColor: '#000', marginBottom: 20 },
    btnText: { fontWeight: 'bold', fontSize: 15 },
    tableContainer: { width: '100%', marginTop: 10 },
    tableHeader: { flexDirection: 'row', borderWidth: 1.5, borderColor: '#000', backgroundColor: '#f0f0f0', padding: 6 },
    cellHeader: { fontWeight: 'bold', fontSize: 12, textAlign: 'center' },
    tableRow: { flexDirection: 'row', borderWidth: 1, borderColor: '#000', borderTopWidth: 0, padding: 6, alignItems: 'center' },
    cell: { fontSize: 10, paddingHorizontal: 2 }
});
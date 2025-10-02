import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';

const GSTMapping = () => {
    // --- State for GST Mapping Fields ---
    const [masterFile, setMasterFile] = useState('GST Customer'); // default
    const [distributorCode, setDistributorCode] = useState('16222');
    const [selectedFile, setSelectedFile] = useState(''); // selected file path/name

    const handleDownloadFormat = () => {
        console.log('Downloading GST Mapping format...');
    };

    const handleBrowse = () => {
        console.log('Opening file browser...');
        setSelectedFile('file_to_upload.xlsx'); // mock file selection
    };

    const handleImport = () => {
        console.log(`Importing file: ${selectedFile}`);
    };

    // --- Render input/display field ---
    const renderValueField = (value, placeholder = '', setter = null) => (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={setter}
            placeholder={placeholder}
            editable={setter !== null}
        />
    );

    return (
        <ScrollView style={styles.container}>
            {/* --- Header --- */}
    

            <View style={styles.header}>
                <Text style={styles.headerText}>GST Mapping</Text>
            </View>

            {/* --- Form Container --- */}
            <View style={styles.formContainer}>
                {/* Master File */}
                <View style={[styles.row, { marginBottom: 20 }]}>
                    <View style={styles.inputGroupFull}>
                        <Text style={styles.label}>Master File</Text>
                        <Text style={styles.displayValue}>{masterFile}</Text>
                    </View>
                </View>

                {/* GST Customer / Distributor Code */}
                <View style={[styles.row, { marginBottom: 30 }]}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>GST Customer</Text>
                        {renderValueField(masterFile, 'GST Customer', setMasterFile)}
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Distributor Code</Text>
                        {renderValueField(distributorCode, '16222', setDistributorCode)}
                    </View>
                </View>

                {/* Download Button */}
                <View style={[styles.row, { marginBottom: 30 }]}>
                    <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadFormat}>
                        <Text style={styles.buttonText}>Download Format</Text>
                    </TouchableOpacity>
                    <View style={styles.inputGroupFull} /> {/* Spacer */}
                </View>

                {/* File Selection Row */}
                <View style={styles.fileSelectionRow}>
                    <View style={[styles.inputGroupFull, styles.inputGroupMarginRight]}>
                        {renderValueField(selectedFile, 'No file selected')}
                    </View>
                    <TouchableOpacity style={styles.browseButton} onPress={handleBrowse}>
                        <Text style={styles.browseButtonText}>Browse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.importButton} onPress={handleImport}>
                        <Text style={styles.buttonText}>Import</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Placeholder for messages */}
            <View style={styles.messagePlaceholder}>
                <Text style={{ color: '#666', fontStyle: 'italic' }}>
                    Status messages and file details will appear here.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
    header: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 15, marginBottom: 20 },
    headerText: { fontSize: 30, fontWeight: 'bold', color: '#1f3a8a', marginLeft: 10 },
    formContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
    },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    fileSelectionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    inputGroup: { flex: 1 },
    inputGroupFull: { flex: 1 },
    inputGroupMarginRight: { marginRight: 10 },
    label: { fontSize: 14, color: '#333', marginBottom: 5, fontWeight: 'bold' },
    input: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: Platform.OS === 'ios' ? 8 : 4, fontSize: 16 },
    displayValue: { fontSize: 16, fontWeight: 'bold', color: '#1f3a8a', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: Platform.OS === 'ios' ? 8 : 4 },
    downloadButton: { backgroundColor: '#1f3a8a', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 3 },
    browseButton: { backgroundColor: '#b2c7e0', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, height: 40, justifyContent: 'center' },
    browseButtonText: { color: '#1f3a8a', fontSize: 16, fontWeight: 'bold' },
    importButton: { backgroundColor: '#1f3a8a', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, height: 40, justifyContent: 'center', marginLeft: 10 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
    messagePlaceholder: { padding: 20, alignItems: 'center' },
});

export default GSTMapping;

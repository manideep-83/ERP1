import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// NOTE: Assuming AppTable is available at this path for displaying SKUs
import AppTable from '../../../ReusableComponents/AppTable';

const { width } = Dimensions.get('window');

const AppPalette = {
    primary: '#3151AC',
    secondary: '#4E7AC7',
    textDark: '#1f2937',
    textMedium: '#6b7280',
    inputBorder: '#ccc',
    white: '#fff',
    saveButton: '#4E7AC7',
    discardButton: '#dc3545',
};

const CreateSKU = ({ navigation }) => {
    // --- Form State ---
    const [form, setForm] = useState({
        claimCode: '',
        claimDescription: '',
        claimDate: '08/09/2025', // Static/Pre-filled
        ytdLndBPM: '0.00', // Static/Pre-filled
        asOnDate: '08/09/2025', // Static/Pre-filled
        company: 'MIL', // Static/Pre-filled
        remarks: '',
        ytdBPM: '0.00', // Static/Display
        mtdBPM: '0.00', // Static/Display
        ytd: '0.00', // Static/Display
        mtd: '0.00', // Static/Display
    });
    const [skuData, setSkuData] = useState([]); // State for the SKU table

    const handleInputChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const handleLoadSKUs = () => {
        // Placeholder logic to load SKUs based on Claim Code, Company, etc.
        console.log('Loading SKUs...');
        // Simulating data load for demonstration
        setSkuData([
            { skuCode: 'SKU001', skuName: 'Milk Pack 1L', mrp: '15.00' },
            { skuCode: 'SKU002', skuName: 'Cookie Box', mrp: '22.50' },
        ]);
    };

    const handleSave = () => {
        console.log('Saving form data:', form);
        // Implement validation and API call here
        Alert.alert('Success', 'Claim created successfully!');
    };

    const handleDiscard = () => {
        navigation.goBack();
    };

    // --- Table Configuration ---
    const skuColumns = [
        { header: 'SKU Code', key: 'skuCode', flex: 2.5 },
        { header: 'SKU Name', key: 'skuName', flex: 4 },
        { header: 'MRP', key: 'mrp', flex: 1.5 },
        {
            header: 'Action',
            key: 'action',
            flex: 1.5,
            renderCell: (item) => (
                <View style={styles.skuActionCell}>
                    <TouchableOpacity onPress={() => console.log('View SKU', item)}>
                        <Icon name="eye-outline" size={20} color="#007bff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Delete SKU', item)}>
                        <Icon name="trash-can-outline" size={20} color="#dc2626" />
                    </TouchableOpacity>
                </View>
            ),
        },
    ];

    const InputField = ({ label, value, onChangeText, placeholder = '0.00', editable = true, style }) => (
        <View style={[styles.inputGroup, style]}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={[styles.input, !editable && styles.staticInput]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                editable={editable}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* AppHeader would go here */}
            
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <Text style={styles.screenTitle}>Create</Text>
                    
                    {/* --- Input Grid --- */}
                    <View style={styles.formGrid}>
                        {/* Column 1 */}
                        <View style={styles.column}>
                            <InputField label="Claim Code" value={form.claimCode} onChangeText={(v) => handleInputChange('claimCode', v)} placeholder="Select" />
                            <InputField label="Claim Description" value={form.claimDescription} onChangeText={(v) => handleInputChange('claimDescription', v)} placeholder="" />
                            <InputField label="Claim Date" value={form.claimDate} onChangeText={(v) => handleInputChange('claimDate', v)} placeholder="08/09/2025" editable={false} />
                            <InputField label="YTD L&D BPM" value={form.ytdLndBPM} onChangeText={(v) => handleInputChange('ytdLndBPM', v)} placeholder="0.00" />
                        </View>

                        {/* Column 2 */}
                        <View style={styles.column}>
                            <InputField label="As On Date" value={form.asOnDate} onChangeText={(v) => handleInputChange('asOnDate', v)} placeholder="08/09/2025" editable={false} />
                            <InputField label="Company" value={form.company} onChangeText={(v) => handleInputChange('company', v)} placeholder="MIL" editable={false} />
                            <InputField label="Remarks" value={form.remarks} onChangeText={(v) => handleInputChange('remarks', v)} placeholder="" />
                            <InputField label="MTD L&D BPM" value={form.mtdLndBPM} onChangeText={(v) => handleInputChange('mtdLndBPM', v)} placeholder="0.00" />
                        </View>

                        {/* Column 3 (Read-Only BPM Values) */}
                        <View style={styles.column}>
                            <InputField label="YTD BPM" value={form.ytdBPM} editable={false} />
                            <InputField label="MTD BPM" value={form.mtdBPM} editable={false} />
                            <InputField label="YTD" value={form.ytd} editable={false} />
                            <InputField label="MTD" value={form.mtd} editable={false} />
                        </View>
                    </View>

                    {/* --- Load Button --- */}
                    <TouchableOpacity style={styles.loadButton} onPress={handleLoadSKUs}>
                        <Text style={styles.loadButtonText}>Load</Text>
                    </TouchableOpacity>

                    {/* --- SKU Table --- */}
                    <View style={styles.skuTableContainer}>
                        <AppTable
                            columns={skuColumns}
                            data={skuData}
                            message={skuData.length === 0 ? 'No matching record(s) found' : `${skuData.length} matching record(s) found`}
                        />
                    </View>
                    
                    {/* --- Action Buttons --- */}
                    <View style={styles.actionButtonsContainer}>
                        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                            <Icon name="content-save" size={24} color={AppPalette.white} />
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.discardButton} onPress={handleDiscard}>
                            <Icon name="close-circle" size={24} color={AppPalette.white} />
                            <Text style={styles.buttonText}>Discard</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: AppPalette.white },
    scrollViewContent: { flexGrow: 1, backgroundColor: AppPalette.white },
    container: { padding: 20 },
    screenTitle: { fontSize: 24, fontWeight: 'bold', color: AppPalette.textDark, marginBottom: 20 },

    // --- Grid Layout ---
    formGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    column: {
        width: '30%',
        marginBottom: 10,
    },

    // --- Input Styling ---
    inputGroup: {
        marginBottom: 15,
    },
    inputLabel: {
        fontSize: 14,
        color: AppPalette.textMedium,
        marginBottom: 5,
        fontWeight: '500',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: AppPalette.inputBorder,
        paddingVertical: 5,
        fontSize: 16,
        color: AppPalette.textDark,
    },
    staticInput: {
        backgroundColor: '#f9f9f9',
        borderBottomColor: '#aaa',
    },

    // --- Load Button ---
    loadButton: {
        backgroundColor: AppPalette.primary,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginBottom: 20,
        marginRight: 20,
    },
    loadButtonText: {
        color: AppPalette.white,
        fontSize: 16,
        fontWeight: 'bold',
    },

    // --- SKU Table ---
    skuTableContainer: {
        marginBottom: 30,
        borderWidth: 1,
        borderColor: AppPalette.inputBorder,
        borderRadius: 8,
        overflow: 'hidden',
    },
    skuActionCell: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    
    // --- Action Buttons ---
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        marginTop: 20,
    },
    saveButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppPalette.saveButton,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        minWidth: 120,
        justifyContent: 'center',
    },
    discardButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppPalette.discardButton,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        minWidth: 120,
        justifyContent: 'center',
    },
    buttonText: {
        color: AppPalette.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default CreateSKU;
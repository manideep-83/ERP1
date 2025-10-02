import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTable from '../../../ReusableComponents/AppTable'; // Assuming this path is correct

const CreateLeakageDamageReturnClaim = () => {
    // State for main form fields corresponding to the new "Create" image
    const [claimCode, setClaimCode] = useState('');
    const [asOnDate, setAsOnDate] = useState('08/09/2025');
    const [claimDescription, setClaimDescription] = useState('');
    const [company, setCompany] = useState('MIL');
    const [claimDate, setClaimDate] = useState('08/09/2025');
    const [remarks, setRemarks] = useState('');

    // State for numerical fields
    const [ytdBpm, setYtdBpm] = useState('0.00');
    const [mtdBpm, setMtdBpm] = useState('0.00');
    const [ytd, setYtd] = useState('0.00');
    const [ytdLdBpm, setYtdLdBpm] = useState('0.00');
    const [mtddLdBpm, setMtdLdBpm] = useState('0.00');
    const [mtd, setMtd] = useState('0.00');

    // Data lists for pickers
    const claimCodeOptions = ["CLA-001", "CLA-002", "CLA-003"];

    // Table Data setup (matching new table headers)
    const data = [
        { id: 1, skuCode: 'SKU123', skuName: 'Milk Carton', mrp: '50.00' },
        { id: 2, skuCode: 'SKU456', skuName: 'Butter Pack', mrp: '150.00' },
    ];

    const columns = [
        { header: 'SKU Code', key: 'skuCode', flex: 1.5 },
        { header: 'SKU Name', key: 'skuName', flex: 3 },
        { header: 'MRP', key: 'mrp', flex: 1.5 },
        {
            header: 'Action',
            key: 'action',
            flex: 1,
            renderCell: (item) => (
                <View style={styles.actionCell}>
                    <TouchableOpacity onPress={() => console.log(`Viewing details for ${item.skuCode}`)} style={{ marginRight: 10 }}>
                        <Ionicons name="eye-outline" size={20} color="#007bff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(`Deleting item ${item.skuCode}`)}>
                        <Ionicons name="trash-outline" size={20} color="#dc2626" />
                    </TouchableOpacity>
                </View>
            )
        }
    ];

    const handleLoad = () => {
        console.log('Loading data based on selected Claim Code...');
        // Logic to fetch data or populate dependent fields
    };

    const handleSave = () => {
        // Handle save logic
        console.log('Saving new claim...');
    };

    const handleDiscard = () => {
        // Handle discard logic
        console.log('Discarding claim...');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create</Text>
            </View>

            {/* --- Main Claim Details Form --- */}
            <View style={styles.formContainer}>
                {/* Row 1: Claim Code | As On Date | YTD BPM */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Claim Code</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={claimCode}
                                onValueChange={(itemValue) => setClaimCode(itemValue)}
                            >
                                <Picker.Item label="Select" value="" />
                                {claimCodeOptions.map((code, index) => (
                                    <Picker.Item key={index} label={code} value={code} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>As On Date</Text>
                        <TextInput style={styles.input} value={asOnDate} editable={false} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>YTD BPM</Text>
                        <TextInput style={styles.input} value={ytdBpm} onChangeText={setYtdBpm} keyboardType="numeric" />
                    </View>
                </View>

                {/* Row 2: Claim Description | Company | MTD BPM */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Claim Description</Text>
                        <TextInput style={styles.input} value={claimDescription} onChangeText={setClaimDescription} />
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Company</Text>
                        <TextInput style={styles.input} value={company} onChangeText={setCompany} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>MTD BPM</Text>
                        <TextInput style={styles.input} value={mtdBpm} onChangeText={setMtdBpm} keyboardType="numeric" />
                    </View>
                </View>

                {/* Row 3: Claim Date | Remarks | YTD */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Claim Date</Text>
                        <TextInput style={styles.input} value={claimDate} editable={false} />
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Remarks</Text>
                        <TextInput style={styles.input} value={remarks} onChangeText={setRemarks} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>YTD</Text>
                        <TextInput style={styles.input} value={ytd} onChangeText={setYtd} keyboardType="numeric" />
                    </View>
                </View>

                {/* Row 4: YTD L&D BPM | MTD L&D BPM | MTD */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>YTD L&D BPM</Text>
                        <TextInput style={styles.input} value={ytdLdBpm} onChangeText={setYtdLdBpm} keyboardType="numeric" />
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>MTD L&D BPM</Text>
                        <TextInput style={styles.input} value={mtddLdBpm} onChangeText={setMtdLdBpm} keyboardType="numeric" />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>MTD</Text>
                        <TextInput style={styles.input} value={mtd} onChangeText={setMtd} keyboardType="numeric" />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.loadButton} onPress={handleLoad}>
                <Text style={styles.loadButtonText}>Load</Text>
            </TouchableOpacity>

            {/* --- AppTable Component --- */}
            <AppTable
                columns={columns}
                data={data}
                message={data.length === 0 ? 'No matching record(s) found' : `Total Records: ${data.length}`}
            />

            {/* --- Action Buttons --- */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.actionButton, styles.saveButton]} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.discardButton]} onPress={handleDiscard}>
                    <Text style={styles.buttonText}>Discard</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    header: {
        paddingVertical: 15,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1f3a8a',
        marginLeft: 20, // Adjusted margin
    },
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputGroup: {
        flex: 1,
    },
    inputGroupMarginRight: {
        marginRight: 10,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: Platform.OS === 'ios' ? 8 : 4,
        fontSize: 16,
    },
    pickerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
        height: 40,
    },
    picker: {
        height: 40,
        width: '100%',
    },
    loadButton: {
        backgroundColor: '#1e3a8a',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
        width: 100, // Small width to match the visual position below the form
        alignSelf: 'center',
    },
    loadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    actionCell: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    saveButton: {
        backgroundColor: '#2b6cb0',
    },
    discardButton: {
        backgroundColor: '#dc2626',
    },
    buttonIcon: {
        marginRight: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CreateLeakageDamageReturnClaim;

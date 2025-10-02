import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; // Retaining Picker for utility, though not used in this specific layout
import AppTable from '../../../ReusableComponents/AppTable'; // Assuming this path is correct

const BankMaster = () => {
    // --- State for Bank Master Form ---
    const [distributorBranch, setDistributorBranch] = useState('16622- SRI VENKATESWARA AGENC');
    const [bankNameInput, setBankNameInput] = useState('');

    // --- Table Data (Banks) ---
    const tableData = [
        { id: 1, slNo: 1, bankName: 'SBI', branchDetails: 'Main Branch, HYD' },
        { id: 2, slNo: 2, bankName: 'HDFC', branchDetails: 'Gachibowli' },
    ];

    // Table Column Configuration
    const columns = [
        { header: 'Sl.No', key: 'slNo', flex: 1 },
        { header: 'Bank Name', key: 'bankName', flex: 3 },
        { header: 'Branch Details', key: 'branchDetails', flex: 3 },
        {
            header: 'Action',
            key: 'action',
            flex: 1.5,
            renderCell: (item) => (
                <View style={styles.actionCell}>
                    <TouchableOpacity onPress={() => console.log(`View bank ${item.bankName}`)} style={{ marginRight: 10 }}>
                        <Ionicons name="eye-outline" size={20} color="#007bff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(`Delete bank ${item.bankName}`)}>
                        <Ionicons name="trash-outline" size={20} color="#dc2626" />
                    </TouchableOpacity>
                </View>
            )
        }
    ];

    const handleAddBankName = () => {
        if (bankNameInput.length >= 3) {
            console.log(`Adding bank name: ${bankNameInput}`);
            // Placeholder: Add logic to update tableData/state here
            setBankNameInput('');
        } else {
            console.log('Bank Name must be at least 3 characters.');
        }
    };

    const handleSave = () => console.log('Saving Bank Master...');
    const handleDiscard = () => console.log('Discarding changes...');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Bank Master</Text>
            </View>

            {/* --- Bank Master Input Form --- */}
            <View style={styles.formContainer}>
                
                {/* Distributor Branch Display */}
                <View style={[styles.row, { marginBottom: 20 }]}>
                    <View style={styles.inputGroupFull}>
                        <Text style={styles.label}>Distributor Branch</Text>
                        <Text style={styles.displayValue}>{distributorBranch}</Text>
                    </View>
                </View>

                {/* Bank Name Input with Add Button */}
                <View style={styles.bankNameRow}>
                    <View style={[styles.inputGroupFull, { flex: 1 }]}>
                        <Text style={styles.label}>Bank Name</Text>
                        <TextInput 
                            style={styles.input} 
                            value={bankNameInput} 
                            onChangeText={setBankNameInput} 
                            placeholder="Enter at least 3 characters"
                        />
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={handleAddBankName}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* --- AppTable Component --- */}
            <View style={styles.tableContainer}>
                <AppTable
                    columns={columns}
                    data={tableData}
                    message={tableData.length === 0 ? 'No matching record(s) found' : `Total Banks: ${tableData.length}`}
                />
            </View>

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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1f3a8a',
        marginLeft: 10,
    },
    // --- Form Container ---
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
    inputGroupFull: {
        flex: 1,
    },
    label: {
        fontSize: 12,
        color: '#666',
        marginBottom: 2,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: Platform.OS === 'ios' ? 8 : 4,
        fontSize: 16,
    },
    displayValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: Platform.OS === 'ios' ? 8 : 4,
    },
    // Bank Name Input Row
    bankNameRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    addButton: {
        backgroundColor: '#1f3a8a',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 35,
        marginLeft: 10,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    // --- Table & Action Styles ---
    tableContainer: {
        marginBottom: 20,
    },
    actionCell: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 5,
        marginBottom: 20,
        marginTop: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    saveButton: {
        backgroundColor: '#1f3a8a',
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
        textAlign: 'center',
    },
});

export default BankMaster;

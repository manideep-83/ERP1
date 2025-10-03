import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import AppTable from '../../../ReusableComponents/AppTable'; // Assuming this path is correct

import { useNavigation } from '@react-navigation/native';

const CreateCollectionDiscount = () => {
    // --- State for Discount Master Form Fields ---
      const navigation = useNavigation();

    const [distributorBranchName, setDistributorBranchName] = useState('16622 - 16622 SRI VENKATE');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [customerType, setCustomerType] = useState('Retailer');
    const [salesman, setSalesman] = useState('');
    const [route, setRoute] = useState('');
    const [retailerChannel, setRetailerChannel] = useState('');
    const [retailerGroup, setRetailerGroup] = useState('');
    const [retailerClass, setRetailerClass] = useState('');
    const [retailerInput, setRetailerInput] = useState('');

     const handleView = (item) => navigation.navigate('CreateCollectionDiscountOverview', { item });

  const handleDelete = (item) => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete ${item.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => setData(prev => prev.filter(row => row.id !== item.id)) },
      ]
    );
  };

    // --- Table Data (Discount Eligibility) ---
    const tableData = [
        // Mock data
        { id: 1, retailer: 'Retailer A', validFrom: '01/01/2025', validTo: '31/12/2025', collectionMode: 'Cash' },
    ];

    // Table Column Configuration
    const columns = [
        { header: 'Retailer', key: 'retailer', flex: 3 },
        { header: 'Valid From', key: 'validFrom', flex: 2 },
        { header: 'Valid To', key: 'validTo', flex: 2 },
        { header: 'Collection Mode', key: 'collectionMode', flex: 2 },
        {
            header: 'Action',
            key: 'action',
            flex: 1.5,
          renderCell: (item) => (
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => handleView(item)} style={{ marginRight: 12 }}>
                    <Ionicons name="eye-outline" size={20} color="#2563eb" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(item)}>
                    <Ionicons name="trash-outline" size={20} color="#dc2626" />
                  </TouchableOpacity>
                </View>
            )
        }
    ];

    const handleRetailerSearch = () => {
        if (retailerInput.length >= 3) {
            console.log(`Searching for retailer: ${retailerInput}`);
            // Placeholder: Logic to fetch and populate retailer data
        }
    };

    const handleSave = () => console.log('Saving Discount Master...');
    const handleDiscard = () => console.log('Discarding changes...');
    
    // Helper function to render an input field
    const renderInput = (label, value, onChangeText, placeholder = '', keyboardType = 'default', editable = true) => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyboardType}
                editable={editable}
            />
        </View>
    );
    
    // Helper function to render a display value
    const renderDisplay = (label, value) => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.displayValue}>{value}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create New</Text>
            </View>

            {/* --- Discount Master Form Container --- */}
            <View style={styles.formContainer}>
                
                {/* Row 1: Distributor Branch Name | Code */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderDisplay('Distributor Branch Name', distributorBranchName)}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Code', code, setCode)}
                    </View>
                </View>

                {/* Row 2: Description | Customer Type */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Description', description, setDescription)}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderDisplay('Customer Type', customerType)}
                    </View>
                </View>
                
                {/* Row 3: Salesman | Route */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Salesman', salesman, setSalesman, 'Select Salesman')}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Route', route, setRoute, 'Select Route')}
                    </View>
                </View>
                
                {/* Row 4: Retailer Channel/Sub Channels | Retailer Group */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Retailer Channel/Sub Channels', retailerChannel, setRetailerChannel)}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Retailer Group', retailerGroup, setRetailerGroup)}
                    </View>
                </View>
                
                {/* Row 5: Retailer Class | Retailer Input + GO button */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Retailer Class', retailerClass, setRetailerClass)}
                    </View>
                    <View style={styles.retailerSearchGroup}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.label}>Retailer</Text>
                            <TextInput 
                                style={styles.input} 
                                value={retailerInput} 
                                onChangeText={setRetailerInput} 
                                placeholder="Enter Atleast 3 charecters"
                            />
                        </View>
                        <TouchableOpacity style={styles.goButton} onPress={handleRetailerSearch}>
                            <Text style={styles.goButtonText}>GO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>

            {/* --- AppTable Component --- */}
            <View style={styles.tableContainer}>
                <AppTable
                    columns={columns}
                    data={tableData}
                    message={tableData.length === 0 ? 'No matching record(s) found' : `Total Entries: ${tableData.length}`}
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
    inputGroup: {
        flex: 1,
    },
    inputGroupMarginRight: {
        marginRight: 10,
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
    // Retailer Search Row
    retailerSearchGroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    goButton: {
        backgroundColor: '#1f3a8a',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 35,
        marginLeft: 10,
        marginBottom: Platform.OS === 'ios' ? 0 : 4, // Align 'Go' button with input baseline
    },
    goButtonText: {
        color: '#fff',
        fontSize: 16,
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

export default CreateCollectionDiscount;

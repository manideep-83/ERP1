import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTable from '../../../ReusableComponents/AppTable'; // Assuming this path is correct
import { useNavigation } from '@react-navigation/native';

const CreateCollections = () => {
    // --- State for Collection Form ---
  const navigation = useNavigation();
    const [collectionType, setCollectionType] = useState('Fast collection');
    const [distributorBranch, setDistributorBranch] = useState('16622');
    const [salesman, setSalesman] = useState('SM01 - VAKASIRI VINOD KL');
    const [route, setRoute] = useState('');
    const [searchBy, setSearchBy] = useState('');
    const [retailerNameInput, setRetailerNameInput] = useState('');
    const [collectionMode, setCollectionMode] = useState('Cash');
    const [collectedAmount, setCollectedAmount] = useState('');
    const [collectionDiscountAmt, setCollectionDiscountAmt] = useState('');

    // --- State for Adjustments ---
    const [crDrNoteAdjustments, setCrDrNoteAdjustments] = useState('');
    const [pendingBillsAdjustments, setPendingBillsAdjustments] = useState('');
    
    // Mock Data for Pickers
    const routeOptions = ["Route 1", "Route 2", "Select Route"];
    
    // Mock Data for Pending/Adjustment Display
    const pendingData = {
        pendingBillAmount: '0.00',
        crNoteAvailable: '0.00',
        onAccountAmount: '0.00',
        drNoteAvailable: '0.00',
    };

    // Table Data (Customer List/Selection)
    const tableData = [
        { id: 1, customerCode: 'CUST-001', retailerName: 'Retailer Alpha', collectionMode: 'Cash' },
        { id: 2, customerCode: 'CUST-002', retailerName: 'Retailer Beta', collectionMode: 'Card' },
    ];

      const handleView = (item) => navigation.navigate('CollectionCreateOverview');

    // Table Column Configuration
  const columns = [
    { header: 'Customer Code', key: 'customerCode', flex: 2 },
    { header: 'Retailer Name', key: 'retailerName', flex: 3 },
    { header: 'Collection Mode', key: 'collectionMode', flex: 2 },
    {
        header: 'Action',
        key: 'action',
        flex: 1.5,
        renderCell: (item) => (
            <View style={styles.actionCell}>
                {/* View Button */}
                <TouchableOpacity 
                    onPress={() => handleView(item) } 
                    style={{ marginRight: 10 }}
                >
                    <Ionicons name="eye-outline" size={20} color="#007bff" />
                </TouchableOpacity>
                
                {/* Delete Button */}
                <TouchableOpacity 
                    onPress={() => console.log(`Delete customer ${item.customerCode}`)}
                >
                    <Ionicons name="trash-outline" size={20} color="#dc2626" />
                </TouchableOpacity>
            </View>
        )
    }
];
    const handleAddAdjustment = () => console.log('Adding Collection Discount Adjustment...');
    const handleSave = () => console.log('Saving collection...');
    const handleDiscard = () => console.log('Discarding collection...');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create New</Text>
            </View>

            {/* --- Main Collection Form Container --- */}
            <View style={styles.formContainer}>
                
                {/* Collection Type Radio Buttons */}
                <View style={styles.radioRow}>
                    <TouchableOpacity style={styles.radioOption} onPress={() => setCollectionType('Fast collection')}>
                       
                        <Text style={styles.radioLabel}>Fast collection</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.radioOption} onPress={() => setCollectionType('Collection')}>
                      
                        <Text style={styles.radioLabel}>Collection</Text>
                    </TouchableOpacity>
                </View>

                {/* Distributor Branch / Salesman / Route */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Distributor Branch</Text>
                        <Text style={styles.displayValue}>{distributorBranch}</Text>
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Salesman</Text>
                        <Text style={styles.displayValue}>{salesman}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Route *</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={route}
                                onValueChange={(itemValue) => setRoute(itemValue)}
                            >
                                {routeOptions.map((option, index) => (
                                    <Picker.Item key={index} label={option} value={option} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>

                {/* Search By / Retailer Name Input */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Search By</Text>
                        <TextInput 
                            style={styles.input} 
                            value={searchBy} 
                            onChangeText={setSearchBy} 
                            placeholder="Retailer Name" 
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Input Text: customer</Text>
                        <TextInput 
                            style={styles.input} 
                            value={retailerNameInput} 
                            onChangeText={setRetailerNameInput} 
                            placeholder="Enter atleast 3 charecters" 
                        />
                    </View>
                </View>
                
                {/* Collection Mode / Collected Amount */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Collection Mode</Text>
                        <Text style={styles.displayValue}>{collectionMode}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Collected Amount</Text>
                        <TextInput 
                            style={styles.input} 
                            value={collectedAmount} 
                            onChangeText={setCollectedAmount} 
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                {/* Adjustment Row (Cr/Dr Note, Pending Bills, Discount) */}
                <View style={styles.adjustmentRow}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Cr/Dr Note Adjustments</Text>
                        <TextInput 
                            style={styles.input} 
                            value={crDrNoteAdjustments} 
                            onChangeText={setCrDrNoteAdjustments} 
                        />
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Pending Bills & Adjustments</Text>
                        <TextInput 
                            style={styles.input} 
                            value={pendingBillsAdjustments} 
                            onChangeText={setPendingBillsAdjustments} 
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Collection Discount Amt</Text>
                        <TextInput 
                            style={styles.input} 
                            value={collectionDiscountAmt} 
                            onChangeText={setCollectionDiscountAmt} 
                            keyboardType="numeric"
                        />
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={handleAddAdjustment}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* --- Adjustment Totals Display --- */}
            <View style={styles.adjustmentTotalsContainer}>
                <View style={styles.adjustmentRow}>
                    <View style={styles.adjustmentGroup}>
                        <Text style={styles.adjustmentLabel}>Pending Bill Amount</Text>
                        <Text style={styles.adjustmentValue}>{pendingData.pendingBillAmount}</Text>
                    </View>
                    <View style={styles.adjustmentGroup}>
                        <Text style={styles.adjustmentLabel}>Cr Note Amount Available: {pendingData.crNoteAvailable}</Text>
                        <Text style={styles.adjustmentValue}>{pendingData.crNoteAvailable}</Text>
                    </View>
                </View>
                <View style={styles.adjustmentRow}>
                    <View style={styles.adjustmentGroup}>
                        <Text style={styles.adjustmentLabel}>On Account Amount: {pendingData.onAccountAmount}</Text>
                        <Text style={styles.adjustmentValue}>{pendingData.onAccountAmount}</Text>
                    </View>
                    <View style={styles.adjustmentGroup}>
                        <Text style={styles.adjustmentLabel}>Dr Note Amount Available: {pendingData.drNoteAvailable}</Text>
                        <Text style={styles.adjustmentValue}>{pendingData.drNoteAvailable}</Text>
                    </View>
                </View>
            </View>

            {/* --- AppTable Component --- */}
            <AppTable
                columns={columns}
                data={tableData}
                message={tableData.length === 0 ? 'No matching record(s) found' : `Total Customers: ${tableData.length}`}
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
        marginLeft: 20,
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
    radioRow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    radioLabel: {
        fontSize: 16,
        color: '#333',
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
    pickerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: Platform.OS === 'ios' ? 0 : -8,
    },
    picker: {
        height: 40,
        width: '100%',
        backgroundColor: 'transparent',
    },
    // Adjustment Row (three inputs and an add button)
    adjustmentRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    addButton: {
        backgroundColor: '#1f3a8a',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 35,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    // Adjustment Totals Display Section
    adjustmentTotalsContainer: {
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
    adjustmentGroup: {
        flex: 1,
        marginRight: 10,
    },
    adjustmentLabel: {
        fontSize: 12,
        color: '#666',
    },
    adjustmentValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: Platform.OS === 'ios' ? 8 : 4,
    },
    // --- Table/Action Button Styles (Retained for consistency) ---
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
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 25,
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

export default CreateCollections;

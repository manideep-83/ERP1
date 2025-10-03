import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; 
import AppTable from '../../../ReusableComponents/AppTable'; 
import { useNavigation } from '@react-navigation/native';

const CreateMidasSalesReturn = () => {
    const navigation = useNavigation();

    // --- State for SRN Header ---
    const [srnDate, setSrnDate] = useState('08/09/2025');
    const [distributorBranch, setDistributorBranch] = useState('16622 - 16622 SRI VEN');
    const [salesReturnMode, setSalesReturnMode] = useState('With Reference');
    const [referenceType, setReferenceType] = useState('Full'); 

    // --- State for Search ---
    const [retailer, setRetailer] = useState('Select');
    const [reason, setReason] = useState('Select');
    const [billSelectInput, setBillSelectInput] = useState('');

    // Mock Data for Pickers
    const retailerOptions = ["Select", "Retailer A", "Retailer B"];
    const reasonOptions = ["Select", "Damage", "Expired", "Wrong Order"];

    // Table Data (Products)
    const tableData = [
        { id: 1, prodCode: 'P-101', prodName: 'Milk Carton', batch: 'B123' },
        { id: 2, prodCode: 'P-102', prodName: 'Butter Pack', batch: 'B124' },
    ];

    // SRN Total Mock Data
    const srnTotals = {
        schemeDiscAmtInvLvl: '0.00',
        grossAmount: '0.00',
        totalDeduction: '0.00',
        totalCrDbAdjustment: '0.00',
        totalNetAmount: '0.00',
    };

    // --- Handlers ---
    const handleSave = () => console.log('Saving SRN...');
    const handleDiscard = () => console.log('Discarding SRN...');
    const handleViewScheme = () => console.log('Viewing schemes...');
    const handleViewProduct = (item) => {
        console.log('Viewing product:', item.prodCode);
        navigation.navigate('MidasSalesReturnCreateOverview');
    };
    const handleDeleteProduct = (item) => {
        Alert.alert('Delete', `Are you sure you want to delete ${item.prodName}?`, [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted', item) }
        ]);
    };

    // --- Table Columns ---
    const columns = [
        { header: 'Distr Prod Code', key: 'prodCode', flex: 2 },
        { header: 'Product Name', key: 'prodName', flex: 4 },
        { header: 'Batch', key: 'batch', flex: 2 },
        {
            header: 'Action',
            key: 'action',
            flex: 1.5,
            renderCell: (item) => (
                <View style={styles.actionCell}>
                    <TouchableOpacity onPress={() => handleViewProduct(item)} style={{ marginRight: 10 }}>
                        <Ionicons name="eye-outline" size={20} color="#007bff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteProduct(item)}>
                        <Ionicons name="trash-outline" size={20} color="#dc2626" />
                    </TouchableOpacity>
                </View>
            )
        }
    ];

    // --- Picker & Radio Helpers ---
    const renderPicker = (selectedValue, onValueChange, options, label) => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={selectedValue} onValueChange={onValueChange} style={styles.picker}>
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option} value={option} />
                    ))}
                </Picker>
            </View>
        </View>
    );

    const renderRadio = (label, value, state, setState) => (
        <TouchableOpacity style={styles.radioOption} onPress={() => setState(value)}>
            <View style={styles.customRadio}>
                <View style={styles.radioOutline}>
                    {state === value && <View style={styles.radioFill} />}
                </View>
            </View>
            <Text style={styles.radioLabel}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create New</Text>
            </View>

            {/* --- SRN Header Form --- */}
            <View style={styles.formContainer}>
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight, { flex: 1.5 }]}>
                        <Text style={styles.label}>SRN Date</Text>
                        <Text style={styles.displayValue}>{srnDate}</Text>
                    </View>
                    <View style={[styles.inputGroup, { flex: 2.5 }]}>
                        <Text style={styles.label}>Distributor Branch</Text>
                        <Text style={styles.displayValue}>{distributorBranch}</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>- Sales Return Mode</Text>
                <View style={styles.radioRowContainer}>
                    <View style={styles.radioGroup}>
                        {renderRadio('With Reference', 'With Reference', salesReturnMode, setSalesReturnMode)}
                        {renderRadio('Full', 'Full', referenceType, setReferenceType)}
                        {renderRadio('Partial', 'Partial', referenceType, setReferenceType)}
                    </View>
                </View>

                <Text style={styles.sectionTitle}>- Search</Text>
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderPicker(retailer, setRetailer, retailerOptions, 'Retailer')}
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderPicker(reason, setReason, reasonOptions, 'Reason')}
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Bill No & Select</Text>
                        <TextInput 
                            style={styles.input} 
                            value={billSelectInput} 
                            onChangeText={setBillSelectInput} 
                            placeholder="Enter At least 3 characters" 
                        />
                    </View>
                </View>
            </View>

            {/* --- Products Table & SRN Total --- */}
            <View style={styles.tableAndTotalContainer}>
                <AppTable
                    columns={columns}
                    data={tableData}
                    message={tableData.length === 0 ? 'No Products selected' : `Total Products: ${tableData.length}`}
                />

                <View style={styles.srnTotalContainer}>
                    <Text style={styles.srnTotalTitle}>SRN Total</Text>
                    <View style={styles.srnTotalDetails}>
                        <Text style={styles.totalText}>Scheme Disc Amt(Inv lvl) : <Text style={styles.totalValue}>{srnTotals.schemeDiscAmtInvLvl}</Text></Text>
                        <Text style={styles.totalText}>Gross Amount : <Text style={styles.totalValue}>{srnTotals.grossAmount}</Text></Text>
                        <Text style={styles.totalText}>Total Deduction : <Text style={styles.totalValue}>{srnTotals.totalDeduction}</Text></Text>
                        <Text style={styles.totalText}>Total Cr/Db Adjustment : <Text style={styles.totalValue}>{srnTotals.totalCrDbAdjustment}</Text></Text>
                        <Text style={[styles.totalText, styles.totalNet]}>Total Net Amount : <Text style={styles.totalValue}>{srnTotals.totalNetAmount}</Text></Text>
                    </View>
                </View>
            </View>

            {/* --- Action Buttons --- */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.actionButton, styles.saveButton]} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.discardButton]} onPress={handleDiscard}>
                    <Text style={styles.buttonText}>Discard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.viewSchemeButton]} onPress={handleViewScheme}>
                    <Text style={styles.buttonText}>View Scheme</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
    header: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 15, marginBottom: 20 },
    headerText: { fontSize: 30, fontWeight: 'bold', color: '#1f3a8a', marginLeft: 10 },
    formContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3, marginBottom: 20 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    inputGroup: { flex: 1 },
    inputGroupMarginRight: { marginRight: 10 },
    label: { fontSize: 12, color: '#666', marginBottom: 2 },
    displayValue: { fontSize: 16, fontWeight: 'bold', color: '#333', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: Platform.OS === 'ios' ? 8 : 4 },
    pickerContainer: { borderBottomWidth: 1, borderBottomColor: '#ccc', justifyContent: 'center', height: 40, paddingHorizontal: Platform.OS === 'ios' ? 0 : -8 },
    input: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: Platform.OS === 'ios' ? 8 : 4, fontSize: 16 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 5, marginLeft: 0 },
    radioRowContainer: { flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 15, paddingHorizontal: 5, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 10 },
    radioGroup: { flexDirection: 'row', flexWrap: 'wrap', marginRight: 30, alignItems: 'center' },
    radioOption: { flexDirection: 'row', alignItems: 'center', marginRight: 15 },
    customRadio: { width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
    radioOutline: { width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: '#1f3a8a', justifyContent: 'center', alignItems: 'center' },
    radioFill: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#1f3a8a' },
    radioLabel: { fontSize: 14, color: '#333' },
    tableAndTotalContainer: { marginBottom: 20 },
    actionCell: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    srnTotalContainer: { backgroundColor: '#fff', padding: 15, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3, alignSelf: 'flex-end', width: '60%', marginTop: 10 },
    srnTotalTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 8, borderBottomWidth: 1, borderBottomColor: '#eee' },
    srnTotalDetails: { paddingLeft: 5 },
    totalText: { fontSize: 14, color: '#666', marginBottom: 3, textAlign: 'right' },
    totalValue: { color: '#333', fontWeight: 'bold' },
    totalNet: { fontWeight: 'bold', color: '#dc2626', marginTop: 5, paddingTop: 5, borderTopWidth: 1, borderTopColor: '#eee' },
    buttonRow: { flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 5, marginBottom: 20, marginTop: 10 },
    actionButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, marginHorizontal: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 3 },
    saveButton: { backgroundColor: '#1f3a8a' },
    discardButton: { backgroundColor: '#dc2626' },
    viewSchemeButton: { backgroundColor: '#5bc0de' },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});

export default CreateMidasSalesReturn;

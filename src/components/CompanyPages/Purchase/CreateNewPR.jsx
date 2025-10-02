import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTable from '../../../ReusableComponents/AppTable';
import { useNavigation } from '@react-navigation/native';

const CreateNewPR = () => {
    const navigation = useNavigation();
    const change = (item) => {
        return navigation.navigate(item.name);
    };

    // --- PRN Header Fields ---
    const [distributorBranch, setDistributorBranch] = useState('');
    const [date, setDate] = useState('08/09/2025');
    const [returnMode, setReturnMode] = useState('Without Reference');

    // --- Product Search Fields ---
    const [godown, setGodown] = useState('');
    const [supplierNameInput, setSupplierNameInput] = useState('');
    const [productSearch, setProductSearch] = useState('');
    const [productInput, setProductInput] = useState('');
    const [uom, setUom] = useState('');
    const [productCode, setProductCode] = useState('');
    const [stockOnHand, setStockOnHand] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [stockOnHandOfferQty, setStockOnHandOfferQty] = useState('');
    const [returnQtySaleable, setReturnQtySaleable] = useState('');
    const [returnQtyOffer, setReturnQtyOffer] = useState('');
    const [reason, setReason] = useState('');

    // --- Table Data ---
    const [tableData, setTableData] = useState([]);

    // --- Table Actions ---
    const handleView = (item) => {
        navigation.navigate('CreateNewPROverview', { po: item });
    };

    const handleDeleteRow = (index) => {
        const updatedData = [...tableData];
        updatedData.splice(index, 1);
        setTableData(updatedData);
    };

    // --- Add two rows ---
    const handleAdd = () => {
        const newRows = [
            { distrProdCode: 'D001', product: 'Product X', batch: 'B001', cspcs_expiry: '08/25', uom: 'PCS', invQty: 10, recvQty: 5, offerQty: 0, mrp: 100, purRate: 90, grossAmt: 500, taxAmt: 50, netAmt: 550 },
            { distrProdCode: 'D002', product: 'Product Y', batch: 'B002', cspcs_expiry: '09/25', uom: 'PCS', invQty: 20, recvQty: 10, offerQty: 0, mrp: 200, purRate: 180, grossAmt: 1800, taxAmt: 180, netAmt: 1980 },
        ];
        setTableData([...tableData, ...newRows]);
    };

    const handleSave = () => console.log('Saving PRN...');
    const handleDiscard = () => setTableData([]);

    // --- Table Columns ---
    const columns = [
        { header: 'Distr Prod Code', key: 'distrProdCode', flex: 2 },
        { header: 'Product Name', key: 'product', flex: 2.5 },
        { header: 'Batch', key: 'batch', flex: 1.5 },
        { header: 'CS/PCS Expiry Date', key: 'cspcs_expiry', flex: 2 },
        { header: 'UOM', key: 'uom', flex: 1 },
        { header: 'Inv Qty', key: 'invQty', flex: 1.5 },
        { header: 'Recv Qty', key: 'recvQty', flex: 1.5 },
        { header: 'Offer Qty', key: 'offerQty', flex: 1.5 },
        { header: 'MRP', key: 'mrp', flex: 1.5 },
        { header: 'Pur Rate', key: 'purRate', flex: 1.5 },
        { header: 'Gross Amt', key: 'grossAmt', flex: 2 },
        { header: 'Tax Amt', key: 'taxAmt', flex: 1.5 },
        { header: 'Net Amt', key: 'netAmt', flex: 2 },
        { 
            header: 'Action', 
            key: 'action', 
            flex: 1.5, 
            renderCell: (item, index) => (
                <View style={styles.actionCell}>
                    <Ionicons name="eye-outline" size={20} color="#007bff" onPress={()=>{handleView(item)}} style={{ marginRight: 5 }} />
                    <Ionicons name="trash-outline" size={20} color="#dc2626" onPress={() => handleDeleteRow(index)} />
                </View>
            )
        }
    ];

    // --- Helper Functions for Form ---
    const renderDisplay = (label, value) => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.displayValue}>{value}</Text>
        </View>
    );

    const renderInput = (label, value, setter, placeholder = '', keyboardType = 'default') => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} value={value} onChangeText={setter} placeholder={placeholder} keyboardType={keyboardType} />
        </View>
    );

    const renderReturnModeRadio = (label, value) => (
        <TouchableOpacity style={styles.radioOption} onPress={() => setReturnMode(value)}>
            <View style={styles.customRadio}>
                <View style={styles.radioOutline}>
                    {returnMode === value && <View style={styles.radioFill} />}
                </View>
            </View>
            <Text style={styles.radioLabel}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Create New PRN</Text>

            {/* --- PRN Header --- */}
            <View style={styles.formContainer}>
                <View style={[styles.row, { marginBottom: 20 }]}>
                    {renderInput('Distributor Branch', distributorBranch, setDistributorBranch)}
                    {renderDisplay('Date', date)}
                </View>

                <Text style={styles.sectionTitle}>Purchase Return Mode</Text>
                <View style={styles.radioRowContainer}>
                    {renderReturnModeRadio('Without Reference', 'Without Reference')}
                    {renderReturnModeRadio('With Reference', 'With Reference')}
                </View>
            </View>

            {/* --- Product Search --- */}
            <View style={styles.searchOnContainer}>
                <Text style={styles.sectionHeader}>Search On</Text>
                <View style={styles.row}>
                    {renderInput('Godown', godown, setGodown)}
                    {renderInput('Supplier Name', supplierNameInput, setSupplierNameInput)}
                </View>
                <View style={styles.row}>
                    {renderInput('Product Search', productSearch, setProductSearch)}
                    {renderInput('Input Text-Product', productInput, setProductInput)}
                </View>
                <View style={styles.row}>
                    {renderInput('UOM', uom, setUom)}
                    {renderInput('Product Code', productCode, setProductCode)}
                </View>
                <View style={styles.row}>
                    {renderInput('Stock on Hand', stockOnHand, setStockOnHand, '', 'numeric')}
                    {renderInput('Expiry Date', expiryDate, setExpiryDate)}
                </View>
                <View style={styles.row}>
                    {renderInput('Stock on Hand (Offer Qty)', stockOnHandOfferQty, setStockOnHandOfferQty, '', 'numeric')}
                    <View style={{ flex: 1 }} />
                </View>
                <View style={styles.row}>
                    {renderInput('Return Qty Saleable', returnQtySaleable, setReturnQtySaleable)}
                    {renderInput('Offer', returnQtyOffer, setReturnQtyOffer)}
                </View>
                <View style={styles.row}>
                    {renderInput('Reason', reason, setReason)}
                    <View style={{ flex: 1 }} />
                </View>

                <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>

            {/* --- Table --- */}
            <View style={styles.tableContainer}>
                <AppTable
                    columns={columns}
                    data={tableData}
                    message={tableData.length === 0 ? 'No data found with given Criteria' : `${tableData.length} products found`}
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
    container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
    headerText: { fontSize: 28, fontWeight: 'bold', color: '#1f3a8a', marginBottom: 15 },
    formContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
    searchOnContainer: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 20 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    inputGroup: { flex: 1, marginRight: 10 },
    label: { fontSize: 12, color: '#666', marginBottom: 2 },
    input: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: Platform.OS === 'ios' ? 8 : 4, fontSize: 16 },
    displayValue: { fontSize: 16, fontWeight: 'bold', color: '#333', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: Platform.OS === 'ios' ? 8 : 4 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 5 },
    sectionHeader: { fontSize: 18, fontWeight: 'bold', color: '#1f3a8a', marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 5 },
    radioRowContainer: { flexDirection: 'row', marginBottom: 15, paddingHorizontal: 5 },
    radioOption: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
    customRadio: { width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
    radioOutline: { width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: '#1f3a8a', justifyContent: 'center', alignItems: 'center' },
    radioFill: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#1f3a8a' },
    radioLabel: { fontSize: 14, color: '#333' },
    addButton: { backgroundColor: '#1f3a8a', padding: 12, borderRadius: 5, alignSelf: 'flex-end', marginTop: 10 },
    addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
    tableContainer: { marginBottom: 20 },
    actionCell: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    buttonRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
    actionButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 8, marginHorizontal: 10 },
    saveButton: { backgroundColor: '#1f3a8a' },
    discardButton: { backgroundColor: '#dc2626' },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});

export default CreateNewPR;

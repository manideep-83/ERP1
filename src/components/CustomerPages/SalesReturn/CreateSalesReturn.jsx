import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; 
import AppTable from '../../../ReusableComponents/AppTable';
const CreateSalesReturn = () => {
    // --- State for SRN Header ---
    const [sn, setSn] = useState('');
    const [srnRefNo, setSrnRefNo] = useState('');
    const [srnDate, setSrnDate] = useState('08/09/2025');
    const [distributorBranch, setDistributorBranch] = useState('16622 - 16622 SRI VEN');
    const [salesReturnMode, setSalesReturnMode] = useState('With Reference');
    const [referenceType, setReferenceType] = useState('Full'); // Full, Partial, Pending, Settled

    // --- State for Search ---
    const [salesman, setSalesman] = useState('');
    const [route, setRoute] = useState('');
    const [retailer, setRetailer] = useState('');
    const [reason, setReason] = useState('Select');
    const [billSelectInput, setBillSelectInput] = useState(''); // Input Text - Bill No and Select
    const [shippingAddress, setShippingAddress] = useState('');

    // Mock Data for Pickers
    const salesmanOptions = ["Select Salesman", "SM01 - JOHN DOE", "SM02 - JANE SMITH"];
    const routeOptions = ["Select Route", "RT-A", "RT-B", "RT-C"];
    const retailerOptions = ["Select Retailer", "RTL-001", "RTL-002"];
    const reasonOptions = ["Select", "Damage", "Expired", "Wrong Order"];

    // Table Data (Bills)
    const tableData = [
        { id: 1, billNo: 'BILL-1001', billDate: '01/08/2025', netAmt: '500.00', reason: 'Damage' },
    ];

    // SRN Total Mock Data
    const srnTotals = {
        schemeDiscAmtInvLvl: '0.00',
        grossAmount: '0.00',
        totalDeduction: '0.00',
        totalCrDbAdjustment: '0.00',
        totalNetAmount: '0.00',
    };

    // Table Column Configuration
    const columns = [
        { header: 'Bill No', key: 'billNo', flex: 2 },
        { header: 'Bill Date', key: 'billDate', flex: 2 },
        { header: 'Bill Net Amount', key: 'netAmt', flex: 2 },
        { header: 'Reason', key: 'reason', flex: 2 },
        {
            header: 'Action',
            key: 'action',
            flex: 1.5,
            renderCell: (item) => (
                <View style={styles.actionCell}>
                    <TouchableOpacity onPress={() => console.log(`View bill ${item.billNo}`)} style={{ marginRight: 10 }}>
                        <Ionicons name="eye-outline" size={20} color="#007bff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(`Delete bill ${item.billNo}`)}>
                        <Ionicons name="trash-outline" size={20} color="#dc2626" />
                    </TouchableOpacity>
                </View>
            )
        }
    ];

    const handleSave = () => console.log('Saving SRN...');
    const handleDiscard = () => console.log('Discarding SRN...');
    const handlePrint = () => console.log('Printing SRN...');

    const renderPicker = (selectedValue, onValueChange, options) => (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
            >
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    );
    
    const renderReferenceTypeRadio = (label, value) => (
        <TouchableOpacity style={styles.radioOption} onPress={() => setReferenceType(value)}>
            <Ionicons 
                name={referenceType === value ? "radio-button-on" : "radio-button-off"} 
                size={20} 
                color="#1f3a8a" 
                style={{ marginRight: 5 }} 
            />
            <Text style={styles.radioLabel}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create New</Text>
            </View>

            {/* --- SRN Header Form Container --- */}
            <View style={styles.formContainer}>
                
                {/* Row 1: SN, SRN Ref No, SRN Date, Distributor Branch */}
                <View style={styles.row}>
                    <View style={[styles.inputGroupSmall, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>SN</Text>
                        <TextInput style={styles.input} value={sn} onChangeText={setSn} />
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>SRN Ref.No</Text>
                        <TextInput style={styles.input} value={srnRefNo} onChangeText={setSrnRefNo} />
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>SRN Date</Text>
                        <Text style={styles.displayValue}>{srnDate}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Distributor Branch</Text>
                        <Text style={styles.displayValue}>{distributorBranch}</Text>
                    </View>
                </View>

                {/* --- Sales Return Mode Radio Buttons --- */}
                <Text style={[styles.sectionTitle, { marginTop: 10, marginBottom: 5 }]}>- Sales Return Mode</Text>
                <View style={styles.radioRowContainer}>
                    <View style={styles.radioGroup}>
                        <TouchableOpacity style={styles.radioOption} onPress={() => setSalesReturnMode('With Reference')}>
                          
                            <Text style={styles.radioLabel}>With Reference</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radioOption} onPress={() => setSalesReturnMode('Without Reference')}>
                          
                            <Text style={styles.radioLabel}>Without Reference</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.radioGroup}>
                        {renderReferenceTypeRadio('Full', 'Full')}
                        {renderReferenceTypeRadio('Partial', 'Partial')}
                        {renderReferenceTypeRadio('Pending', 'Pending')}
                        {renderReferenceTypeRadio('Settled', 'Settled')}
                    </View>
                </View>

                {/* --- Search Section --- */}
                <Text style={[styles.sectionTitle, { marginTop: 15, marginBottom: 5 }]}>- Search</Text>
                
                {/* Search Row 1: Salesman, Route, Retailer */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Salesman</Text>
                        {renderPicker(salesman, setSalesman, salesmanOptions)}
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Route</Text>
                        {renderPicker(route, setRoute, routeOptions)}
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Retailer</Text>
                        <TextInput style={styles.input} value={retailer} onChangeText={setRetailer} />
                    </View>
                </View>

                {/* Search Row 2: Reason, Bill Input, Shipping Address */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Reason</Text>
                        {renderPicker(reason, setReason, reasonOptions)}
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Input Text- Bill No and Select</Text>
                        <TextInput 
                            style={styles.input} 
                            value={billSelectInput} 
                            onChangeText={setBillSelectInput} 
                            placeholder="Enter Atleast:"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Shipping Address</Text>
                        <TextInput style={styles.input} value={shippingAddress} onChangeText={setShippingAddress} placeholder="Select" />
                    </View>
                </View>
            </View>

            {/* --- AppTable Component --- */}
            <View style={styles.tableAndTotalContainer}>
                <AppTable
                    columns={columns}
                    data={tableData}
                    message={tableData.length === 0 ? 'No Products selected' : `Total Bills: ${tableData.length}`}
                />

                {/* --- SRN Total Section --- */}
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
                <TouchableOpacity style={[styles.actionButton, styles.printButton]} onPress={handlePrint}>
                    <Text style={styles.buttonText}>Print</Text>
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
        flex: 1, // Standard 3-column flex
    },
    inputGroupSmall: {
        flex: 0.75, // Smaller flex for SN
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f3a8a',
    },
    // --- Radio Button Styles ---
    radioRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingHorizontal: 5,
    },
    radioGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'flex-start',
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        marginBottom: 5,
    },
    radioLabel: {
        fontSize: 14,
        color: '#333',
    },
    // --- Table & SRN Total Container ---
    tableAndTotalContainer: {
        marginBottom: 20,
    },
    actionCell: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // --- SRN Total Styles ---
    srnTotalContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignSelf: 'flex-end',
        width: '60%', // Constrain width to match typical summary box
        marginTop: 10, 
    },
    srnTotalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f3a8a',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    srnTotalDetails: {
        paddingLeft: 5,
    },
    totalText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 3,
        textAlign: 'right',
    },
    totalValue: {
        color: '#333',
        fontWeight: 'bold',
    },
    totalNet: {
        fontWeight: 'bold',
        color: '#dc2626',
        marginTop: 5,
        paddingTop: 5,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    // --- Action Buttons ---
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
        marginHorizontal: 5,
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
    printButton: {
        backgroundColor: '#666', // Distinct color for Print
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

export default CreateSalesReturn;

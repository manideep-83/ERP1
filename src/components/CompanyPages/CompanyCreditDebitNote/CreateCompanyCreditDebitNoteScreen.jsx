import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// AppTable is no longer needed for this view

const CreateCompanyCreditDebitNoteScreen = () => {
    // --- State for Credit/Debit Note Form Fields ---
    const [referenceNumber, setReferenceNumber] = useState('');
    const [distributorBranch, setDistributorBranch] = useState('16222-16222-SRI VENU');
    const [creditNoteDate, setCreditNoteDate] = useState('08/09/2025');
    const [noteType, setNoteType] = useState('Credit Note'); // Radio button state
    const [companyCode, setCompanyCode] = useState('Bahupada');
    const [supplierCode, setSupplierCode] = useState('D579-Bahupada');
    const [accountName, setAccountName] = useState('SRI VASU');
    const [creditAmount, setCreditAmount] = useState('');
    const [status, setStatus] = useState('Active'); // Radio button state
    const [remarks, setRemarks] = useState('');

    const handleTaxBreakup = () => console.log('Opening Tax Breakup modal/details...');
    const handleSave = () => console.log('Saving Credit/Debit Note...');
    const handleDiscard = () => console.log('Discarding changes...');
    
    // Custom Radio Button Renderer
    const renderRadio = (label, value, currentValue, setter) => (
        <TouchableOpacity style={styles.radioOption} onPress={() => setter(value)}>
            <View style={styles.customRadio}>
                <View style={styles.radioOutline}>
                    {currentValue === value && <View style={styles.radioFill} />}
                </View>
            </View>
            <Text style={styles.radioLabel}>{label}</Text>
        </TouchableOpacity>
    );

    // Helper function to render a display value
    const renderDisplay = (label, value, style = {}) => (
        <View style={styles.displayGroup}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={[styles.displayValue, style]}>{value}</Text>
        </View>
    );
    
    // Helper function to render an input field
    const renderInput = (label, value, setter, keyboardType = 'default') => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}:</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setter}
                keyboardType={keyboardType}
            />
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create New</Text>
            </View>

            {/* --- Main Form Container --- */}
            <View style={styles.formContainer}>
                
                {/* Reference Number & Header Info (Simulated two columns) */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Reference Number', referenceNumber, setReferenceNumber)}
                    </View>
                    <View style={styles.inputGroup} /> {/* Spacer column */}
                </View>
                
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderDisplay('Distributor Branch', distributorBranch)}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderDisplay('Credit Note Date', creditNoteDate)}
                    </View>
                </View>

                {/* Credit or Debit Note Radio Buttons */}
                <View style={[styles.inputGroupFull, { marginBottom: 20 }]}>
                    <Text style={styles.label}>Credit or Debit Note</Text>
                    <View style={styles.radioRow}>
                        {renderRadio('Credit Note', 'Credit Note', noteType, setNoteType)}
                        {renderRadio('Debit Note', 'Debit Note', noteType, setNoteType)}
                    </View>
                </View>

                {/* Company Code, Supplier Code, Account Name */}
                <View style={styles.detailGroup}>
                    {renderDisplay('Company Code/Name', companyCode)}
                    {renderDisplay('Supplier Code/Name', supplierCode)}
                    {renderDisplay('Account Name - Debit', accountName)}
                </View>

                {/* Credit Amount & Tax Breakup Button */}
                <View style={[styles.amountRow, { marginBottom: 20 }]}>
                    {renderInput('Credit Amount', creditAmount, setCreditAmount, 'numeric')}
                    <Text style={styles.currencySymbol}>$</Text>
                    <TouchableOpacity style={styles.taxBreakupButton} onPress={handleTaxBreakup}>
                        <Text style={styles.taxBreakupButtonText}>Tax Breakup</Text>
                    </TouchableOpacity>
                </View>

                {/* Status Radio Buttons */}
                <View style={[styles.inputGroupFull, { marginBottom: 20 }]}>
                    <Text style={styles.label}>Status</Text>
                    <View style={styles.radioRow}>
                        {renderRadio('Active', 'Active', status, setStatus)}
                        {renderRadio('Inactive', 'Inactive', status, setStatus)}
                    </View>
                </View>

                {/* Remarks Text Area */}
                <View style={styles.inputGroupFull}>
                    <Text style={styles.label}>Remarks :</Text>
                    <TextInput
                        style={styles.remarksInput}
                        value={remarks}
                        onChangeText={setRemarks}
                        placeholder="Type here........"
                        multiline
                        numberOfLines={4}
                    />
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
        fontSize: 14, // Slightly larger label for main form
        color: '#333',
        marginBottom: 5,
    },
    // Styles for input/display values
    displayGroup: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: Platform.OS === 'ios' ? 8 : 4,
    },
    displayValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        paddingVertical: 2,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: Platform.OS === 'ios' ? 8 : 4,
        fontSize: 16,
    },
    // Grouping styles for Company/Supplier/Account
    detailGroup: {
        marginBottom: 20,
        paddingLeft: 5,
    },
    // Credit Amount Row
    amountRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingHorizontal: 5,
    },
    currencySymbol: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
        paddingBottom: 5,
    },
    taxBreakupButton: {
        backgroundColor: '#5bc0de',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginLeft: 10,
        height: 30,
        justifyContent: 'center',
    },
    taxBreakupButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    // Remarks Text Area
    remarksInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        minHeight: 100,
        textAlignVertical: 'top', // For Android multiline
    },
    // --- Custom Radio Button Styles ---
    radioRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 5,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        marginTop: 5,
    },
    customRadio: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    radioOutline: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#1f3a8a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioFill: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#1f3a8a',
    },
    radioLabel: {
        fontSize: 14,
        color: '#333',
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
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        minWidth: 120, // Ensure buttons are wide enough
        justifyContent: 'center',
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

export default CreateCompanyCreditDebitNoteScreen;

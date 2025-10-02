import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; 
import AppTable from '../../../ReusableComponents/AppTable'; // Assuming this path is correct

const OrderToBilling = () => {
    // --- State for Search/Filter Fields ---
    const [distributorBranch, setDistributorBranch] = useState('16622');
    const [fromDate, setFromDate] = useState('08/09/2025');
    const [toDate, setToDate] = useState('08/09/2025');
    const [customer, setCustomer] = useState('');
    const [location, setLocation] = useState('');
    const [route, setRoute] = useState('');
    const [salesman, setSalesman] = useState('');
    
    // Mock Data for Pickers
    const salesmanOptions = ["Select Salesman", "SM01 - John", "SM02 - Jane"];
    const routeOptions = ["Select Route", "RT-A", "RT-B"];

    const handleHistory = () => console.log('Viewing Order to Billing History...');
    const handlePopulate = () => {
        console.log('Populating orders based on filters...');
        // Placeholder: Logic to fetch data and update listing table
    };

    // Helper function to render an input field
    const renderInput = (label, value, onChangeText, placeholder = '', keyboardType = 'default') => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyboardType}
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

    const renderPicker = (label, selectedValue, onValueChange, options) => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                    style={styles.picker}
                >
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option} value={option} />
                    ))}
                </Picker>
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Order to Billing</Text>
                <TouchableOpacity style={styles.historyButton} onPress={handleHistory}>
                    <Text style={styles.historyButtonText}>History</Text>
                </TouchableOpacity>
            </View>

            {/* --- Filter Form Container --- */}
            <View style={styles.formContainer}>
                
                {/* Row 1: Distributor Branch | From Date | Customer */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderDisplay('Distributor Branch', distributorBranch)}
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderDisplay('From Date', fromDate)}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Customer', customer, setCustomer)}
                    </View>
                </View>

                {/* Row 2: Location | To Date | Route */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Location', location, setLocation)}
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderDisplay('To Date', toDate)}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Route', route, setRoute)}
                    </View>
                </View>
                
                {/* Row 3: Salesman | Alert/Populate */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Salesman', salesman, setSalesman)}
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <TouchableOpacity style={styles.salesmanAlert} onPress={() => console.log('Salesman selection required')}>
                            <Text style={styles.salesmanAlertText}>Select Salesman</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputGroup}>
                        <TouchableOpacity style={styles.populateButton} onPress={handlePopulate}>
                            <Text style={styles.populateButtonText}>Populate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>

            {/* Placeholder for the main listing table */}
            <View style={styles.searchResultsPlaceholder}>
                <Text style={styles.placeholderText}>Order Listing Table goes here.</Text>
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
        justifyContent: 'space-between',
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
    historyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    historyIcon: {
        marginRight: 5,
        color: '#1f3a8a',
    },
    historyButtonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
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
    // --- Alert and Populate Button Styles ---
    salesmanAlert: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc3545', // Red background for alert
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 35,
        alignSelf: 'flex-end',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    salesmanAlertText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    populateButton: {
        backgroundColor: '#1f3a8a',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 35,
        alignSelf: 'flex-end',
    },
    populateButtonText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    // --- Placeholder Styles ---
    searchResultsPlaceholder: {
        marginTop: 5,
        padding: 50,
        borderWidth: 1,
        borderColor: '#eee',
        borderStyle: 'dashed',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    placeholderText: {
        color: '#ccc',
        fontStyle: 'italic',
    },
});

export default OrderToBilling;

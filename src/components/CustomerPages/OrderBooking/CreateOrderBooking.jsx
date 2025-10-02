import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; // Re-adding Picker for dropdowns

const CreateOrderBooking = () => {
    // --- State for Order Creation Form Fields ---
    const [distributorBranchCode, setDistributorBranchCode] = useState('16622-16622-SRI VENKATE');
    const [orderNo, setOrderNo] = useState('');
    const [status, setStatus] = useState('New');
    const [mtOrderRef, setMtOrderRef] = useState('');
    const [poReferenceNo, setPoReferenceNo] = useState('');
    const [orderType, setOrderType] = useState('Normal');
    const [salesman, setSalesman] = useState('Select Salesman');
    const [route, setRoute] = useState('Select Route');
    const [customerSearch, setCustomerSearch] = useState('');
    const [customerCode, setCustomerCode] = useState('');
    const [shippingAddress, setShippingAddress] = useState('Select');
    const [customerInput, setCustomerInput] = useState('');
    const [orderDate, setOrderDate] = useState('08/09/2025');

    // Mock Data for Pickers
    const salesmanOptions = ["Select Salesman", "SM01 - JOHN DOE", "SM02 - JANE SMITH"];
    const routeOptions = ["Select Route", "RT-A", "RT-B", "RT-C"];
    const shippingOptions = ["Select", "Address 1", "Address 2"];

    const handleSave = () => console.log('Saving new order...');
    const handleDiscard = () => console.log('Discarding order...');
    const handleDiscount = () => console.log('Applying Discount...');

    const renderPicker = (selectedValue, onValueChange, options) => (
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
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create New</Text>
            </View>

            {/* --- Main Order Form Container --- */}
            <View style={styles.formContainer}>
                
                {/* Row 1: Distributor Branch Code | Order No | Status */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Distributor Branch Code</Text>
                        <Text style={styles.displayValue}>{distributorBranchCode}</Text>
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Order No</Text>
                        <TextInput style={styles.input} value={orderNo} onChangeText={setOrderNo} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Status</Text>
                        <Text style={styles.displayValue}>{status}</Text>
                    </View>
                </View>

                {/* Row 2: MT Order Ref | PO Reference No | Order Type */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>MT Order Ref</Text>
                        <TextInput style={styles.input} value={mtOrderRef} onChangeText={setMtOrderRef} />
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>PO Reference No</Text>
                        <TextInput style={styles.input} value={poReferenceNo} onChangeText={setPoReferenceNo} />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Order Type</Text>
                        <Text style={styles.displayValue}>{orderType}</Text>
                    </View>
                </View>
                
                {/* Row 3: Salesman | Route | Customer Search */}
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
                        <Text style={styles.label}>Customer Search</Text>
                        <TextInput style={styles.input} value={customerCode} onChangeText={setCustomerCode} placeholder="Customer Code" />
                    </View>
                </View>

                {/* Row 4: Shipping Address | Customer Input Text | Order Date */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Shipping Address</Text>
                        {renderPicker(shippingAddress, setShippingAddress, shippingOptions)}
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Input Text - customer</Text>
                        <TextInput 
                            style={styles.input} 
                            value={customerInput} 
                            onChangeText={setCustomerInput} 
                            placeholder="Enter atleast 3 charecters"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Order Date</Text>
                        <Text style={styles.displayValue}>{orderDate}</Text>
                    </View>
                </View>

            </View>

            {/* Placeholder for the main product listing/order items table */}
            <View style={styles.searchResultsPlaceholder}>
                <Text style={styles.placeholderText}>Order Items/Product Listing Table goes here.</Text>
            </View>

            {/* --- Action Buttons --- */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.actionButton, styles.saveButton]} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.discardButton]} onPress={handleDiscard}>
                    <Text style={styles.buttonText}>Discard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.discountButton]} onPress={handleDiscount}>
                    <Text style={styles.buttonText}>% Discount</Text>
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
        flex: 1, // Ensures 3 columns of equal width
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
    discountButton: {
        backgroundColor: '#5cb85c', // A distinct color for the discount button
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

export default CreateOrderBooking;

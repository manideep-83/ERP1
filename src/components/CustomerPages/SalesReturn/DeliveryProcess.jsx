import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// NOTE: AppTable and Picker are no longer strictly needed but kept import structure clean.

const DeliveryProcess = () => {
    // --- State for Delivery Process Search Fields ---
    const [distributorBranchCode, setDistributorBranchCode] = useState('16622');
    const [fromDate, setFromDate] = useState('08/09/2025');
    const [toDate, setToDate] = useState('08/09/2025');
    const [displayBasedOn, setDisplayBasedOn] = useState('Delivery Boy');
    const [deliveryBoy, setDeliveryBoy] = useState('');
    const [vehicleAllocationNo, setVehicleAllocationNo] = useState('');
    const [billNo, setBillNo] = useState('');
    const [billStatus, setBillStatus] = useState('Delivered');
    
    // --- State for Footer Search ---
    const [searchBy, setSearchBy] = useState('Branch Code');
    const [customerInput, setCustomerInput] = useState('');


    const handlePopulate = () => {
        console.log('Populating delivery data...');
        // Placeholder for logic to fetch data based on search criteria
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Delivery Process</Text>
                {/* Removed Create New button as it's not present in the new image */}
            </View>

            {/* --- Main Search/Filter Section --- */}
            <View style={styles.searchContainer}>
                
                {/* Row 1: Distributor Branch, From Date, To Date */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Distributor Branch code</Text>
                        <Text style={styles.displayValue}>{distributorBranchCode}</Text>
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>From Date</Text>
                        {/* Assuming this is a static display or placeholder date input */}
                        <Text style={styles.displayValue}>{fromDate}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>To Date</Text>
                        {/* Assuming this is a static display or placeholder date input */}
                        <Text style={styles.displayValue}>{toDate}</Text>
                    </View>
                </View>

                {/* Row 2: Display Based On, Delivery Boy, Vehicle Allocation No, Bill No */}
                <View style={styles.row}>
                    <View style={[styles.inputGroupSmall, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Display Based On</Text>
                        <Text style={styles.displayValue}>{displayBasedOn}</Text>
                    </View>
                    <View style={[styles.inputGroupSmall, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Delivery Boy</Text>
                        <TextInput
                            style={styles.input}
                            value={deliveryBoy}
                            onChangeText={setDeliveryBoy}
                        />
                    </View>
                    <View style={[styles.inputGroupSmall, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Vehicle Allocation No</Text>
                        <TextInput
                            style={styles.input}
                            value={vehicleAllocationNo}
                            onChangeText={setVehicleAllocationNo}
                        />
                    </View>
                    <View style={styles.inputGroupSmall}>
                        <Text style={styles.label}>Bill No</Text>
                        <TextInput
                            style={styles.input}
                            value={billNo}
                            onChangeText={setBillNo}
                        />
                    </View>
                </View>

                {/* Row 3: Bill Status and Populate Button */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, {flex: 1.5, marginRight: 15}]}>
                        <Text style={styles.label}>Bill Status</Text>
                        <Text style={styles.displayValue}>{billStatus}</Text>
                    </View>
                    <TouchableOpacity style={styles.populateButton} onPress={handlePopulate}>
                        <Text style={styles.goButtonText}>Populate</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 4 }} /> {/* Spacer to push button left */}
                </View>
            </View>

            {/* --- Footer Search Section --- */}
            <View style={styles.footerSearchContainer}>
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Search By</Text>
                        <Text style={styles.displayValue}>{searchBy}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Input Text - customer</Text>
                        <TextInput
                            style={styles.input}
                            value={customerInput}
                            onChangeText={setCustomerInput}
                            placeholder="Enter atleast 3 charecters"
                        />
                    </View>
                </View>
            </View>
            
            {/* Placeholder for the main delivery bills listing/table */}
            <View style={styles.searchResultsPlaceholder}>
                <Text style={styles.placeholderText}>Delivery Bills Listing/Table goes here.</Text>
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
        justifyContent: 'flex-start', // Align to start since "Create New" is gone
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
    // --- Search Section Styles (Main Form) ---
    searchContainer: {
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
        flex: 1, // Used for the 4-column layout
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
    populateButton: {
        backgroundColor: '#1f3a8a',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 35,
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    goButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // --- Footer Search Section Styles ---
    footerSearchContainer: {
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
    // --- Placeholder Styles ---
    searchResultsPlaceholder: {
        marginTop: 5,
        padding: 50,
        borderWidth: 1,
        borderColor: '#eee',
        borderStyle: 'dashed',
        borderRadius: 5,
        alignItems: 'center',
    },
    placeholderText: {
        color: '#ccc',
        fontStyle: 'italic',
    },
});

export default DeliveryProcess;
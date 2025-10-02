import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import AppTable from '../../../ReusableComponents/AppTable'; // Assuming this path is correct

const MidasSalesReturn = () => {
    // --- State for Search/Filter Fields ---
    const [fromDate, setFromDate] = useState('08/09/2025');
    const [toDate, setToDate] = useState('08/09/2025');
    const [retailer, setRetailer] = useState('Select');
    const [status, setStatus] = useState('Pending to be pulled for SR');
    
    // Mock Data for Pickers
    const retailerOptions = ["Select", "Retailer A", "Retailer B"];
    
    // --- Table Data (Search Results) ---
    const tableData = [
        // Mock data
        // { id: 1, distributor: 'D-001', invoiceDate: '01/08/2025', retailerCode: 'R-001' },
    ];

    // Table Column Configuration
    const columns = [
        { header: 'Distributor', key: 'distributor', flex: 3 },
        { header: 'Invoice Date', key: 'invoiceDate', flex: 2 },
        { header: 'Retailer code', key: 'retailerCode', flex: 2 },
        {
            header: 'Action',
            key: 'action',
            flex: 1.5,
            renderCell: (item) => (
                <View style={styles.actionCell}>
                    <TouchableOpacity onPress={() => console.log(`View invoice for ${item.distributor}`)} style={{ marginRight: 10 }}>
                        <Ionicons name="eye-outline" size={20} color="#007bff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(`Delete invoice for ${item.distributor}`)}>
                        <Ionicons name="trash-outline" size={20} color="#dc2626" />
                    </TouchableOpacity>
                </View>
            )
        }
    ];

    const handleCreateNew = () => console.log('Navigating to Create New SRN screen...');
    
    const handleLoad = () => {
        console.log('Loading Sales Returns based on filters...');
        // Placeholder: Logic to fetch data and update tableData state
    };
    
    // Helper function to render a display value
    const renderDisplay = (label, value) => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.displayValue}>{value}</Text>
        </View>
    );

    const renderPicker = (selectedValue, onValueChange, options, label) => (
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
                <Text style={styles.headerText}>Midas Sales return</Text>
                <TouchableOpacity style={styles.createNewButton} onPress={handleCreateNew}>
                    <Ionicons name="add-circle-outline" size={24} color="#fff" style={styles.buttonIcon} />
                    <Text style={styles.createNewButtonText}>Create New</Text>
                </TouchableOpacity>
            </View>

            {/* --- Search Filter Container --- */}
            <View style={styles.formContainer}>
                
                {/* Row 1: From Date | To Date | Retailer */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderDisplay('From Date', fromDate)}
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderDisplay('To Date', toDate)}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderPicker(retailer, setRetailer, retailerOptions, 'Retailer')}
                    </View>
                </View>

                {/* Row 2: Status | Load Button */}
                <View style={styles.statusRow}>
                    <View style={[styles.inputGroup, { flex: 1.5, marginRight: 15 }]}>
                        {renderDisplay('Status*', status)}
                    </View>
                    <TouchableOpacity style={styles.loadButton} onPress={handleLoad}>
                        <Text style={styles.loadButtonText}>Load</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 4 }} /> {/* Spacer */}
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

            {/* --- Pagination Footer --- */}
           

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
    createNewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1f3a8a',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    buttonIcon: {
        marginRight: 5,
    },
    createNewButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // --- Search Filter Form Container ---
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
    statusRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
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
 
    loadButton: {
        backgroundColor: '#1f3a8a',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 35,
        marginLeft: 10,
    },
    loadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // --- AppTable & Pagination Styles ---
    tableContainer: {
        marginBottom: 20,
    },
    actionCell: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f3a8a',
        paddingVertical: 10,
        borderRadius: 8,
    },
    paginationText: {
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 5,
    },
    paginationControls: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    paginationButton: {
        paddingHorizontal: 5,
    },
    pageSizeText: {
        borderLeftWidth: 1,
        borderLeftColor: '#fff',
        paddingLeft: 10,
        marginLeft: 5,
    }
});

export default MidasSalesReturn;

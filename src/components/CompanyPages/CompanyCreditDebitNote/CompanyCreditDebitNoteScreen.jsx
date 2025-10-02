import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTable from '../../../ReusableComponents/AppTable';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../../../ReusableComponents/AppButton';

const CompanyCreditDebitNoteScreen = () => {
    const [quickSearchInput, setQuickSearchInput] = useState('');
    const [selectedDate, setSelectedDate] = useState('Select Date');
    const [tableData, setTableData] = useState([
        { id: '1', branchCode: '16622', refNo: 'REF-001', supplier: 'Supplier A', amount: '100.00' },
        { id: '2', branchCode: '16623', refNo: 'REF-002', supplier: 'Supplier B', amount: '250.00' },
        { id: '3', branchCode: '16624', refNo: 'REF-003', supplier: 'Supplier C', amount: '50.00' },
    ]);

    const navigation = useNavigation();

    const handleCreateNew = () => {
        navigation.navigate('CreateCompanyCreditDebitNoteScreen');
    };

    const handleView = (item) => {
        navigation.navigate('CompanyCreditDebitNoteScreenOverview', { note: item });
    };
    
    const handleDelete = (itemToDelete) => {
        Alert.alert(
            'Delete Credit/Debit Note',
            `Are you sure you want to delete ${itemToDelete.refNo}?`,
            [
                { text: 'Cancel', style: 'cancel' },
                { 
                    text: 'Delete', 
                    style: 'destructive', 
                    onPress: () => {
                        const updatedData = tableData.filter(item => item.id !== itemToDelete.id);
                        setTableData(updatedData);
                        console.log('Deleted', itemToDelete);
                    }
                },
            ]
        );
    };

    const columns = [
        { header: 'Branch Code', key: 'branchCode', flex: 2 },
        { header: 'Reference No.', key: 'refNo', flex: 3 },
        { header: 'Supplier Name', key: 'supplier', flex: 4 },
        { header: 'Amount', key: 'amount', flex: 2 },
        {
            header: 'Action',
            key: 'action',
            flex: 1.5,
            renderCell: (item) => (
                <View style={styles.actionCell}>
                    <TouchableOpacity
                        style={{ marginRight: 10 }}
                        onPress={() => handleView(item)}
                    >
                        <Icon name="eye-circle-outline" size={20} color="#007bff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDelete(item)}>
                        <Icon name="trash-can-outline" size={20} color="#dc2626" />
                    </TouchableOpacity>
                </View>
            )
        }
    ];

    const handleQuickSearch = () => { /* Placeholder for search logic */ };
    const handleViewAll = () => { /* Placeholder for view all logic */ };
    const handleDateSelect = () => { /* Placeholder for date selection logic */ };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.headerRow}>
                    <Text style={styles.headerText}>Credit Note - Debit Note</Text>
                    
                    {/* Replaced TouchableOpacity with AppButton */}
                    <AppButton
                        label="Create New"
                        onPress={handleCreateNew}
                        style={styles.createNewButton}
                        textStyle={styles.createNewButtonText}
                    />
                </View>

                <View style={styles.searchContainer}>
                    <Text style={styles.searchTitle}>Quick Search</Text>
                    <View style={styles.inputRow}>
                        <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                            <TextInput
                                style={styles.input}
                                value={quickSearchInput}
                                onChangeText={setQuickSearchInput}
                                placeholder="Enter atleast 3 characters"
                            />
                        </View>
                        <TouchableOpacity style={[styles.inputGroup, styles.inputGroupMarginRight, styles.dateSelector]} onPress={handleDateSelect}>
                            <Text style={styles.dateSelectorText}>{selectedDate}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAll}>
                            <Text style={styles.viewAllButtonText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.resultsContainer}>
                    <Text style={styles.resultsTitle}>Search Results</Text>
                    <AppTable
                        columns={columns}
                        data={tableData}
                        message={tableData.length === 0 ? 'No matching record(s) found' : `${tableData.length} matching record(s) found`}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 10,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
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
    createNewButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
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
    searchTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputGroup: {
        flex: 1,
    },
    inputGroupMarginRight: {
        marginRight: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 14,
        borderRadius: 5,
        height: 40,
    },
    dateSelector: {
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 40,
    },
    dateSelectorText: {
        fontSize: 14,
        color: '#666',
    },
    viewAllButton: {
        backgroundColor: '#1f3a8a',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
    },
    viewAllButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    resultsContainer: {
        marginBottom: 20,
    },
    resultsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    actionCell: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CompanyCreditDebitNoteScreen;
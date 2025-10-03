import React, { useState } from 'react';
import { 
    View, Text, StyleSheet, TextInput, TouchableOpacity, 
    ScrollView, Alert 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTable from '../../../ReusableComponents/AppTable';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../../../ReusableComponents/AppButton';

const StockAdjustment = () => {
    const navigation = useNavigation();

    const [quickSearchInput, setQuickSearchInput] = useState('');
    const [selectedDate, setSelectedDate] = useState('Select Date');

    const [tableData, setTableData] = useState([
        { id: '1', refNo: 'REF-001', docDate: '2025-10-03', godown: 'Godown A', stockStatus: 'Pending' },
        { id: '2', refNo: 'REF-002', docDate: '2025-10-02', godown: 'Godown B', stockStatus: 'Completed' },
        { id: '3', refNo: 'REF-003', docDate: '2025-10-01', godown: 'Godown C', stockStatus: 'Pending' },
    ]);

    const [filteredData, setFilteredData] = useState(tableData);

    const handleCreateNew = () => {
        // navigation.navigate('StockAdjustmentCreate'); // Replace with your screen
    };

    const handleView = (item) => {
        navigation.navigate('StockAdjustmentOverview', { item });
    };

    // const handleDelete = (itemToDelete) => {
    //     Alert.alert(
    //         'Delete Stock Adjustment',
    //         Are you sure you want to delete ${itemToDelete.refNo}?,
    //         [
    //             { text: 'Cancel', style: 'cancel' },
    //             { 
    //                 text: 'Delete', 
    //                 style: 'destructive', 
    //                 onPress: () => {
    //                     const updatedData = tableData.filter(item => item.id !== itemToDelete.id);
    //                     setTableData(updatedData);
    //                     setFilteredData(updatedData);
    //                 }
    //             },
    //         ]
    //     );
    // };

    const handleQuickSearch = (text) => {
        setQuickSearchInput(text);
        if (text.length >= 3) {
            const filtered = tableData.filter(item => 
                item.refNo.toLowerCase().includes(text.toLowerCase()) ||
                item.godown.toLowerCase().includes(text.toLowerCase()) ||
                item.stockStatus.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(tableData);
        }
    };

    const handleViewAll = () => {
        setFilteredData(tableData);
        setQuickSearchInput('');
    };

    const handleDateSelect = () => {
        Alert.alert('Date Picker', 'Implement your date picker here.');
    };

    const columns = [
        { header: 'Reference No', key: 'refNo', flex: 2 },
        { header: 'Doc Date', key: 'docDate', flex: 2 },
        { header: 'Godown', key: 'godown', flex: 2 },
        { header: 'Stock Status', key: 'stockStatus', flex: 2 },
        {
            header: 'Action',
            key: 'action',
            flex: 2,
            renderCell: (item) => (
                <View style={styles.actionCell}>
                    <TouchableOpacity
                        style={{ marginRight: 10 }}
                        onPress={() => handleView(item)}
                    >
                        <Icon name="eye-circle-outline" size={20} color="#007bff" />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Icon name="trash-can-outline" size={20} color="#dc2626" />
                    </TouchableOpacity>
                </View>
            )
        }
    ];

    return (
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.headerRow}>
                    <Text style={styles.headerText}>Stock Adjustment</Text>
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
                                onChangeText={handleQuickSearch}
                                placeholder="Enter at least 3 characters"
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
                        data={filteredData}
                        message={filteredData.length === 0 ? 'No matching record(s) found' : '${filteredData.length} matching record(s) found'}
                    />
                </View>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    scrollContent: { flexGrow: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 10 },
    headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, marginBottom: 20 },
    headerText: { fontSize: 20, fontWeight: 'bold', color: '#1f3a8a', marginLeft: 10 },
    createNewButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1f3a8a', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, marginRight: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 3 },
    createNewButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    searchContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3, marginBottom: 20 },
    searchTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 15 },
    inputRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    inputGroup: { flex: 1 },
    inputGroupMarginRight: { marginRight: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', paddingVertical: 8, paddingHorizontal: 10, fontSize: 14, borderRadius: 5, height: 40 },
    dateSelector: { borderWidth: 1, borderColor: '#ccc', justifyContent: 'center', alignItems: 'center', borderRadius: 5, height: 40 },
    dateSelectorText: { fontSize: 14, color: '#666' },
    viewAllButton: { backgroundColor: '#1f3a8a', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, height: 40, justifyContent: 'center' },
    viewAllButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
    resultsContainer: { marginBottom: 20 },
    resultsTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 },
    actionCell: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
});

export default StockAdjustment;
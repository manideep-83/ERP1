import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTable from '../../../ReusableComponents/AppTable';

// Assuming AppTable is a custom component that you have
// and it accepts a 'columns' prop for headers and 'data' for rows.


const CreateNewGSTClaim = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [claimDescription, setClaimDescription] = useState('');
    const [claimDate, setClaimDate] = useState('08/09/2025');
    const [channelNumber, setChannelNumber] = useState('');
    const [channelDate, setChannelDate] = useState('08/09/2025');
    const [remarks, setRemarks] = useState('');
    const [tableData, setTableData] = useState([]); // State to hold the table data

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => (currentYear - 5 + i).toString());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handleLoad = () => {
        console.log('Loading data...');

   
 };

           const data = [
  { id: 1, name: 'Product A' ,date:'12-08-2023' },
  { id: 2, name: 'Product B' ,date:'12-09-2023' },
];

        // Simulate data loading
        const columns = [
  { header: 'Sanction No', key: 'id', flex: 1 },
  { header: ' Output Tax Through Invoice', key: 'name', flex: 2 },
  
  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => alert(`Clicked ${item.name}`)}>
        <Ionicons name="eye-outline" size={20} color="#007bff" />
      </TouchableOpacity>
      
    )
  }
];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create New</Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Year</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedYear}
                                onValueChange={(itemValue) => setSelectedYear(itemValue)}
                            >
                                <Picker.Item label="Select" value="" />
                                {years.map((year, index) => (
                                    <Picker.Item key={index} label={year} value={year} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Month</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedMonth}
                                onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                            >
                                <Picker.Item label="Select" value="" />
                                {months.map((month, index) => (
                                    <Picker.Item key={index} label={month} value={month} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Claim Description</Text>
                        <TextInput
                            style={styles.input}
                            value={claimDescription}
                            onChangeText={setClaimDescription}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Claim Date</Text>
                        <TextInput
                            style={styles.input}
                            value={claimDate}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Channel Number</Text>
                        <TextInput
                            style={styles.input}
                            value={channelNumber}
                            onChangeText={setChannelNumber}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Channel Date</Text>
                        <TextInput
                            style={styles.input}
                            value={channelDate}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.inputGroupFull}>
                        <Text style={styles.label}>Remarks</Text>
                        <TextInput
                            style={styles.input}
                            value={remarks}
                            onChangeText={setRemarks}
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.loadButton} onPress={handleLoad}>
                <Text style={styles.loadButtonText}>Load</Text>
            </TouchableOpacity>

            <AppTable 
            columns={columns} 
            data={data} 
            message={`Total Records: ${data.length}`} 
            />
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
        paddingVertical: 15,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1f3a8a',
        marginLeft: 30,
    },
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
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: Platform.OS === 'ios' ? 8 : 4,
        fontSize: 16,
    },
    pickerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
    },
    loadButton: {
        backgroundColor: '#1e3a8a',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    loadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // Styles for the assumed AppTable component
    tableContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#e6e6e6',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableHeaderText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center',
    },
    tableCell: {
        textAlign: 'center',
        color: '#666',
    },
    noRecordsText: {
        flex: 1,
        textAlign: 'center',
        color: '#666',
        fontStyle: 'italic',
        paddingVertical: 20,
    },
});

export default CreateNewGSTClaim;
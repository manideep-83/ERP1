import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView, Alert, Platform } from 'react-native';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BankMaster = () => {
  const navigation = useNavigation();

  const [distributorBranch] = useState('16622- SRI VENKATESWARA AGENC');
  const [bankNameInput, setBankNameInput] = useState('');

  const [tableData, setTableData] = useState([
    { id: 1, slNo: 1, bankName: 'SBI', branchDetails: 'Main Branch, HYD' },
    { id: 2, slNo: 2, bankName: 'HDFC', branchDetails: 'Gachibowli' },
  ]);

  const handleView = (item) => navigation.navigate('CollectionsOverview');
  const handleDelete = (item) => {
    Alert.alert('Delete', `Are you sure you want to delete ${item.bankName}?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destruceetive', onPress: () => setTableData(prev => prev.filter(row => row.id !== item.id)) },
    ]);
  };

  const handleAddBank = () => {
    if (bankNameInput.length >= 3) {
      const newBank = {
        id: tableData.length + 1,
        slNo: tableData.length + 1,
        bankName: bankNameInput,
        branchDetails: 'New Branch',
      };
      setTableData(prev => [...prev, newBank]);
      setBankNameInput('');
    } else {
      Alert.alert('Error', 'Bank Name must be at least 3 characters.');
    }
  };

  const columns = [
    { header: 'Sl.No', key: 'slNo', flex: 1 },
    { header: 'Bank Name', key: 'bankName', flex: 3 },
    { header: 'Branch Details', key: 'branchDetails', flex: 3 },
    {
      header: 'Action',
      key: 'action',
      flex: 1.5,
      renderCell: (item) => (
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="eye-outline" size={20} color="#007bff" style={{ marginRight: 10 }} onPress={() => handleView(item)} />
          <Ionicons name="trash-outline" size={20} color="#dc2626" onPress={() => handleDelete(item)} />
        </View>
      ),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Bank Master</Text>
        </View>

        {/* Distributor Branch */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Distributor Branch</Text>
          <Text style={styles.displayValue}>{distributorBranch}</Text>

          {/* Bank Input */}
          <View style={styles.bankInputRow}>
            <TextInput
              style={styles.input}
              value={bankNameInput}
              onChangeText={setBankNameInput}
              placeholder="Enter at least 3 characters"
            />
            <AppButton
              label="Add Bank"
              onPress={handleAddBank}
              style={styles.addButton}
              textStyle={styles.addButtonText}
            />
          </View>
        </View>

        {/* Table */}
        <View style={styles.tableContainer}>
          <AppTable
            columns={columns}
            data={tableData}
            message={tableData.length === 0 ? 'No matching record(s) found' : `Total Banks: ${tableData.length}`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { flexGrow: 1, padding: 10, backgroundColor: '#f5f5f5' },
  headerRow: { marginBottom: 20 },
  headerText: { fontSize: 24, fontWeight: 'bold', color: '#1f3a8a', marginLeft: 10 },
  formContainer: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20, elevation: 3 },
  label: { fontSize: 12, color: '#666', marginBottom: 5 },
  displayValue: { fontSize: 16, fontWeight: 'bold', color: '#333', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: Platform.OS === 'ios' ? 8 : 4, marginBottom: 15 },
  bankInputRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  input: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#ccc', fontSize: 16, paddingVertical: Platform.OS === 'ios' ? 8 : 4, marginRight: 10 },
  addButton: { backgroundColor: '#1f3a8a', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5 },
  addButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  tableContainer: { marginBottom: 20 },
});

export default BankMaster;

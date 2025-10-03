import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../../ReusableComponents/SearchBar';

const MidasSalesReturn = () => {
  const navigation = useNavigation();

  const [fromDate, setFromDate] = useState('08/09/2025');
  const [toDate, setToDate] = useState('08/09/2025');
  const [retailer, setRetailer] = useState('Select');
  const [status, setStatus] = useState('Pending to be pulled for SR');

  const retailerOptions = ["Select", "Retailer A", "Retailer B"];

  const handleDateSelect = (date) => {
    console.log('Selected date:', date);
  };

  const handleCreateNew = () => {
    console.log('Navigate to Create New SRN');
    navigation.navigate('CreateMidasSalesReturn'); // Replace with actual screen name
  };

  const handleView = (item) => {
        navigation.navigate('MidasSalesReturnOverview'); // Replace with actual screen name

  };

  const handleDelete = (item) => {
    Alert.alert('Delete', `Are you sure you want to delete ${item.distributor}?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted', item) }
    ]);
  };

  const columns = [
    { header: 'Distributor', key: 'distributor', flex: 3 },
    { header: 'Invoice Date', key: 'invoiceDate', flex: 2 },
    { header: 'Retailer code', key: 'retailerCode', flex: 2 },
    {
      header: 'Action',
      key: 'action',
      flex: 2,
      renderCell: (item) => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => handleView(item)} style={{ marginRight: 10 }}>
            <Ionicons name="eye-outline" size={20} color="#007bff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)}>
            <Ionicons name="trash-outline" size={20} color="#dc2626" />
          </TouchableOpacity>
        </View>
      )
    }
  ];

  const data = [
    { distributor: 'D-001', invoiceDate: '08-09-2025', retailerCode: 'R-001' },
    { distributor: 'D-002', invoiceDate: '08-09-2025', retailerCode: 'R-002' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>Midas Sales Return</Text>
          <AppButton
            label="Create New"
            onPress={handleCreateNew}
            style={styles.createNewButton}
            textStyle={styles.createNewButtonText}
          />
        </View>

        {/* Search / Filter Section */}
        <SearchBar
          placeholder="Search Distributor"
          showDatePicker={true}
          onDateChange={handleDateSelect}
        />
        <View style={styles.pickerRow}>
          <View style={styles.pickerGroup}>
            <Text style={styles.label}>Retailer</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={retailer}
                onValueChange={setRetailer}
                style={styles.picker}
              >
                {retailerOptions.map((option, index) => (
                  <Picker.Item key={index} label={option} value={option} />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.pickerGroup}>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.displayValue}>{status}</Text>
          </View>
        </View>

        {/* Table */}
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Search Results</Text>
          <AppTable
            columns={columns}
            data={data}
            message={`Total Records: ${data.length}`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { flexGrow: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 10 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 20,
  },
  title: { fontSize: 20, fontWeight: 'bold', color: '#1f3a8a', marginLeft: 10 },
  createNewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f3a8a',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  createNewButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  pickerRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  pickerGroup: { flex: 1, marginRight: 10 },
  pickerContainer: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, height: 40, justifyContent: 'center' },
//   picker: { height: 40 },
  label: { fontSize: 12, color: '#666', marginBottom: 4 },
  displayValue: { fontSize: 16, fontWeight: 'bold', color: '#333', paddingVertical: Platform.OS === 'ios' ? 8 : 4, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  resultsContainer: { marginBottom: 20 },
  resultsTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 },
});

export default MidasSalesReturn;

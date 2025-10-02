import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Supplier = () => {
  const navigation = useNavigation();

  const handleDateSelect = (date) => {
    console.log("Selected date:", date);
  };

  const handleCreateNew = () => {
    navigation.navigate('SupplierOverview');
  };

  const handleView = (item) => {
    navigation.navigate('SupplierOverview', { supplier: item });
  };

  const handleDelete = (item) => {
    Alert.alert(
      'Delete Supplier',
      `Are you sure you want to delete ${item.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted', item) },
      ]
    );
  };

  const columns = [
    { header: 'Code', key: 'id', flex: 1 },
    { header: 'Company Name', key: 'name', flex: 2 },
    { header: 'Supplier Name', key: 'name', flex: 2 },
    { header: 'Geo Mapping', key: 'name', flex: 2 },
    {
      header: 'Action',
      key: 'action',
      flex: 1.5,
      renderCell: (item) => (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handleView(item)} style={{ marginRight: 10 }}>
            <Ionicons name="eye-outline" size={20} color="#007bff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)}>
            <Ionicons name="trash-outline" size={20} color="#dc2626" />
          </TouchableOpacity>
        </View>
      ),
    },
  ];

  const data = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5', padding: 10 }}>
      {/* Header Row with Create New button */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Supplier</Text>
    
      </View>

      <SearchBar
        placeholder="Search Product"
        showDatePicker={true}
        onDateChange={handleDateSelect}
      />

      <Text style={styles.resultsTitle}>Search Results</Text>
      <AppTable
        columns={columns}
        data={data}
        message={`Total Records: ${data.length}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#1f3a8a',
    marginLeft: 5,
  },
  createNewButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f3a8a",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  createNewButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 10,
    color: "#333",
  },
});

export default Supplier;

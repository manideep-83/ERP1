import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ERPContext from '../../../Context/ERPContext'; // adjust path
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Supplier = () => {
  const navigation = useNavigation();
  const { suppliers, fetchSuppliers, loading } = useContext(ERPContext);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const handleView = (item) => {
    navigation.navigate('SupplierOverview', { supplier: item });
  };

  const handleDelete = (item) => {
    Alert.alert(
      'Delete Supplier',
      `Are you sure you want to delete ${item.vendor_name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted', item) },
      ]
    );
  };

  const columns = [
    { header: 'ID', key: 'contact_id', flex: 1 },
    { header: 'Company Name', key: 'company_name', flex: 2 },
    { header: 'Supplier Name', key: 'vendor_name', flex: 2 },
    {
      header: 'Action',
      key: 'action',
      flex: 1.5,
      renderCell: (item) => (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handleView(item)} style={{ marginRight: 10 }}>
             <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)}>
            <Text>D</Text>
          </TouchableOpacity>
        </View>
      ),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5', padding: 10 }}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Supplier</Text>
      </View>

      <SearchBar placeholder="Search Supplier" showDatePicker={true} onDateChange={() => {}} />

      <Text style={styles.resultsTitle}>Search Results</Text>
      <AppTable
        columns={columns}
        data={suppliers}
        message={loading ? 'Loading...' : `Total Records: ${suppliers.length}`}
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

import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import ERPContext from '../../../Context/ERPContext';
import AppButton from '../../../ReusableComponents/AppButton';

const Retailer = () => {
  const { FetchB2B, b2b, loading } = useContext(ERPContext);
    useEffect(() => {
        FetchB2B();
      }, []);
  const navigation = useNavigation();

  const handleDateSelect = (date) => {
    console.log('Selected date:', date);
  };

  const handleView = (item) => navigation.navigate('RetailerOverview', { item });

  const handleDelete = (item) => {
    Alert.alert('Delete', `Are you sure you want to delete ${item.name}?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted', item) }
    ]);
  };

  const columns = [
    { header: 'Outlet Name', key: 'company_name', flex: 2 },
    { header: 'Owner Name', key: 'contact_name', flex: 2 },
    { header: 'Outlet Category', key: 'custom_fields.outlet_category', flex: 2 },
    { header: 'Outstanding', key: 'custom_fields.available_credit', flex: 2 },
    { header: 'outlet id', key: 'custom_fields.outlet_id', flex: 2 },
    {
      header: 'Action',
      key: 'action',
      flex: 2,
      renderCell: (item) => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => handleView(item)} style={{ marginRight: 12 }}>
            <Text>👁️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)}>
          <Text>🗑️</Text>
          </TouchableOpacity>
        </View>
      )
    }
  ];


  return (
    <View style={styles.container}>
      {/* Header with Create Button */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>B2B Customers</Text>
        <AppButton 
            label="Create New"
            onPress={() => navigation.navigate("CreateCustomer")}
            style={styles.createButton}
            textStyle={styles.createButtonText}
          />
      </View>

      {/* Search Bar */}
      <SearchBar
        placeholder="Search Retailer"
        showDatePicker={true}
        onDateChange={handleDateSelect}
      />

      <Text style={styles.subTitle}>Search Results</Text>

      {/* Data Table */}
      <AppTable
        columns={columns}
        data={b2b}
        message={loading ? 'Loading...' : `Total Records: ${b2b.length}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 16, 
    backgroundColor: '#f9fafb'
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: '#1a3d7c' 
  },
  subTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    marginVertical: 12, 
    color: '#374151' 
  },
  createNewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f3a8a',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  createNewButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  createButton: {
    backgroundColor: "#1f3a8a",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6
  },
  createButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default Retailer;

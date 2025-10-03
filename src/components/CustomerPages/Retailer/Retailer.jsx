import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../../../ReusableComponents/AppButton';

const Retailer = () => {
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
    { header: 'Distributor Branch', key: 'id', flex: 1 },
    { header: 'Type', key: 'name', flex: 2 },
    { header: 'Distr Retailer Code', key: 'date', flex: 2 },
    {
      header: 'Action',
      key: 'action',
      flex: 2,
      renderCell: (item) => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => handleView(item)} style={{ marginRight: 12 }}>
            <Ionicons name="eye-outline" size={20} color="#2563eb" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)}>
            <Ionicons name="trash-outline" size={20} color="#dc2626" />
          </TouchableOpacity>
        </View>
      )
    }
  ];

  const data = [
    { id: 1, name: 'Product A', date: '12-08-2023' },
    { id: 2, name: 'Product B', date: '12-09-2023' },
  ];

  return (
    <View style={styles.container}>
      {/* Header with Create Button */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Retailer</Text>
        {/* <AppButton
          label="Create New"
          onPress={() => navigation.navigate('CreateRetailer')} 
          style={styles.createNewButton}
          textStyle={styles.createNewButtonText}
        /> */}
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
        data={data}
        message={`Total Records: ${data.length}`}
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
});

export default Retailer;

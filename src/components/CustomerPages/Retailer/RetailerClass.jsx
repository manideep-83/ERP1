import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const RetailerClass = () => {
  const navigation = useNavigation();

  const handleView = (item) => navigation.navigate('RetailerClassOverview', { item });

  const handleDelete = (item) => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete ${item.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted', item) },
      ]
    );
  };

  const handleDateSelect = (date) => {
    console.log('Selected date:', date);
  };

  const columns = [
    { header: 'Retailer Group Name', key: 'id', flex: 1 },
    { header: 'Retailer Class Code', key: 'name', flex: 2 },
    {
      header: 'Action',
      key: 'action',
      flex: 1,
      renderCell: (item) => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => handleView(item)} style={{ marginRight: 12 }}>
            <Ionicons name="eye-outline" size={20} color="#2563eb" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)}>
            <Ionicons name="trash-outline" size={20} color="#dc2626" />
          </TouchableOpacity>
        </View>
      ),
    },
  ];

  const data = [
    { id: 1, name: 'Product A', date: '12-08-2023' },
    { id: 2, name: 'Product B', date: '12-09-2023' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Retailer Class</Text>

      {/* Create New Button */}
      {/* <AppButton
        label="+ Create New"
        onPress={() => navigation.navigate('CreateRetailerClass')}
        style={styles.createNewButton}
        textStyle={styles.createNewButtonText}
      /> */}

      {/* Search Bar */}
      <SearchBar
        placeholder="Search Retailer Class"
        showDatePicker={true}
        onDateChange={handleDateSelect}
      />

      <Text style={styles.title}>Search Results</Text>

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
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1a3d7c',
  },
  createNewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f3a8a',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 16,
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
});

export default RetailerClass;

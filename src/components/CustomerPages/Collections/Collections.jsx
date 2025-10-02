
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Collections = () => {
  const navigation = useNavigation();
  const handleDateSelect = (date) => {
    console.log('Selected date:', date);
  };
  const handleView = (item) => navigation.navigate('CollectionsOverview', { item });
  const handleDelete = (item) => {
    Alert.alert('Delete', `Are you sure you want to delete ${item.name}?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted', item) }
    ]);
  };
  const columns = [
    { header: 'Claim Code', key: 'id', flex: 1 },
    { header: 'Claim Description', key: 'name', flex: 2 },
    { header: 'Claim Date', key: 'date', flex: 2 },
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
    { id: 1, name: 'Product A', date: '12-08-2023' },
    { id: 2, name: 'Product B', date: '12-09-2023' },
  ];
  return (
    <View>
      <Text style={styles.title}>Collections</Text>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('CreateCollections')}>
        <Text style={styles.buttonText}>+ Create new</Text>
      </TouchableOpacity>
      <SearchBar
        placeholder="Search Product"
        showDatePicker={true}
        onDateChange={handleDateSelect}
      />
      <Text style={styles.title}>Search Results</Text>
      <AppTable
        columns={columns}
        data={data}
        message={`Total Records: ${data.length}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '700', marginBottom: 16, color: '#1a3d7c' },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default Collections;

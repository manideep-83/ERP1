import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../../ReusableComponents/SearchBar'
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Godown = () => {
  const navigation = useNavigation();
  const handleDateSelect = (date) => {
    console.log('Selected date:', date);
  };
  const handleView = (item) => navigation.navigate('GodownOverview');
  const handleDelete = (item) => {
    Alert.alert('Delete', `Are you sure you want to delete ${item.name}?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted', item) }
    ]);
  };

  const columns = [
    { header: 'Code', key: 'id', flex: 1 },
    { header: 'Distributor Branch', key: 'name', flex: 2 },
    { header: 'Godown Name', key: 'date', flex: 2 },
     { header: 'Is Default', key: 'name', flex: 2 },
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
    { id: 1, name: 'Claim A', date: '12-08-2023' },
    { id: 2, name: 'Claim B', date: '12-09-2023' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>Godown</Text>
          <AppButton
            label="Create New"
            onPress={() => navigation.navigate('CreateGoDown')}
            style={styles.createNewButton}
            textStyle={styles.createNewButtonText}
          />
        </View>

        <SearchBar
          placeholder="Search Date"
          showDatePicker={true}
          onDateChange={handleDateSelect}
        />

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
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 20,
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#1f3a8a',
    marginLeft: 10,
  },
  createNewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f3a8a',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
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
  resultsContainer: {
    marginBottom: 20,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default Godown;

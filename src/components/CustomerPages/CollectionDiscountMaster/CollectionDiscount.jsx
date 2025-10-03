import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CollectionDiscount = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([
    { id: 1, name: 'Product A', date: '12-08-2023' },
    { id: 2, name: 'Product B', date: '12-09-2023' },
  ]);

  const handleView = (item) => navigation.navigate('CollectionDiscountOverview', { item });

  const handleDelete = (item) => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete ${item.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => setData(prev => prev.filter(row => row.id !== item.id)) },
      ]
    );
  };

  const handleDateSelect = (date) => console.log('Selected date:', date);

  const columns = [
    { header: 'Reference No', key: 'id', flex: 1 },
    { header: 'Customer Type', key: 'name', flex: 2 },
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>Collection Discount Master</Text>
          <AppButton
            label="+ Create New"
            onPress={() => navigation.navigate('CreateCollectionDiscount')}
            style={styles.createNewButton}
            textStyle={styles.createNewButtonText}
          />
        </View>

        {/* Search Bar */}
        <SearchBar
          placeholder="Search Product"
          showDatePicker={true}
          onDateChange={handleDateSelect}
        />

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
  scrollContent: { flexGrow: 1, padding: 10, backgroundColor: '#f5f5f5' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#1f3a8a', marginLeft: 10 },
  createNewButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1f3a8a', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5 },
  createNewButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  resultsContainer: { marginTop: 10 },
  resultsTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 },
});

export default CollectionDiscount;

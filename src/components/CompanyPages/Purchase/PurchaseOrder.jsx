import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PurchaseOrder = () => {
  const navigation = useNavigation();

  const handleDateSelect = (date) => {
    console.log("Selected date:", date);
  };

  const handleCreateNew = () => {
    navigation.navigate(''); // <-- Navigate to create screen
  };

  const handleView = (item) => {
    navigation.navigate('PurchaseOrderOverview', { po: item });
  };

  const handleDelete = (item) => {
    Alert.alert(
      'Delete Purchase Order',
      `Are you sure you want to delete ${item.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted', item) },
      ]
    );
  };

  const columns = [
    { header: 'Branch Code', key: 'id', flex: 1 },
    { header: 'PO Reference No', key: 'name', flex: 2 },
    { header: 'Company PO No', key: 'name', flex: 2 },
    { header: 'PO Reference No', key: 'name', flex: 2 },
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
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Purchase Order</Text>
        <AppButton
          label="Create New"
          onPress={handleCreateNew}
          style={styles.createNewButton}
          textStyle={styles.createNewButtonText}
        />
      </View>

      <SearchBar
        placeholder="Search Purchase Order"
        showDatePicker={true}
        onDateChange={handleDateSelect}
      />

      <Text style={styles.subTitle}>Search Results</Text>
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
    paddingHorizontal: 12,
    backgroundColor: "#f9f9f9",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#1f3a8a',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 12,
    color: "#333",
  },
  createNewButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f3a8a", // brighter blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  createNewButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default PurchaseOrder;

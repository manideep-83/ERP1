import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';

const SchemeScreen = () => {
  const navigation = useNavigation();

  // State to manage data for the table
  const [schemeData, setSchemeData] = useState([
    { id: 1, name: 'Product A', code: 'PRO-A' },
    { id: 2, name: 'Product B', code: 'PRO-B' },
  ]);

  const handleDateSelect = (date) => {
    console.log('Selected date:', date);
  };

  const handleCreateNew = () => {
    console.log('Navigate to Create New Scheme screen');
    // Assuming you have a 'CreateNewScheme' route defined in your navigator
    navigation.navigate('SecondarySchemeClaim'); 
  };

  const handleView = (item) => {
    console.log('Viewing item:', item);
    // Assuming a 'SchemeOverview' route
    navigation.navigate('SchemeOverview', { item: item });
  };
  
  const handleDelete = (itemToDelete) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this Scheme?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => {
        const updatedData = schemeData.filter(item => item.id !== itemToDelete.id);
        setSchemeData(updatedData);
        console.log('Scheme deleted:', itemToDelete);
      }},
    ]);
  };

  const columns = [
    { header: 'Scheme Code', key: 'code', flex: 1 },
    { header: 'Company Scheme code', key: 'name', flex: 2 },
    {
      header: 'Action',
      key: 'action',
      flex: 1,
      renderCell: (item) => (
        <View style={styles.actionCell}>
          <AppButton 
            onPress={() => handleView(item)} 
            icon="eye-outline" 
            style={styles.actionButton}
          />
          <AppButton 
            onPress={() => handleDelete(item)} 
            icon="trash-outline" 
            style={styles.actionButton}
            variant="danger"
          />
        </View>
      ),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Scheme</Text>
          <AppButton
            label="+ Create new"
            onPress={handleCreateNew}
            style={styles.createNewButton}
            textStyle={styles.createNewButtonText}
          />
        </View>
        <SearchBar
          placeholder="Search Product"
          showDatePicker={true}
          onDateChange={handleDateSelect}
        />
        <Text style={styles.title}>Search Results</Text>
        <AppTable
          columns={columns}
          data={schemeData}
          message={`Total Records: ${schemeData.length}`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  title: { 
    fontSize: 18, 
    fontWeight: '700', 
    marginBottom: 16, 
    color: '#1a3d7c' 
  },
  createNewButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f3a8a",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
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
  actionCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 0,
    marginVertical: 0,
    minWidth: 40,
  },
});

export default SchemeScreen;
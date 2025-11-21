import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';
import ERPContext from '../../../Context/ERPContext';

const Collections = () => {
  const navigation = useNavigation();

  const { FetchCollection, collection, loading } = useContext(ERPContext);

  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    FetchCollection("all");  // default load
  }, []);

  // When filter button clicked
  const applyFilter = (status) => {
    setActiveFilter(status);
    FetchCollection(status);
  };

  const handleView = (item) => {
    navigation.navigate('CollectionsOverview', { item });
  };

  const handleDelete = (item) => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete ${item.invoice_number}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted', item) }
      ]
    );
  };

  const columns = [
    { header: 'Customer Name', key: 'customer_name', flex: 2 },
    { header: 'Invoice No', key: 'invoice_number', flex: 2 },
    { header: 'Due Amount', key: 'due_amount', flex: 1 },
    { header: 'Status', key: 'status', flex: 2 },
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>Collections</Text>
          <AppButton 
            label="Create New"
            onPress={() => navigation.navigate("CreateCollections")}
            style={styles.createButton}
            textStyle={styles.createButtonText}
          />
        </View>

        {/* Search */}
        <SearchBar 
          placeholder="Search By Customer Name"
          showDatePicker={false}
        />

        {/* FILTER BUTTONS */}
        <View style={styles.filterRow}>
          {["all", "overdue", "due_today", "due_soon", "pending"].map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => applyFilter(filter)}
              style={[
                styles.filterButton,
                activeFilter === filter && styles.filterButtonActive
              ]}
            >
              <Text style={[
                styles.filterText,
                activeFilter === filter && styles.filterTextActive
              ]}>
                {filter.replace("_", " ").toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* RESULTS */}
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Search Results</Text>

          <AppTable
            columns={columns}
            data={collection}
            message={loading ? "Loading..." : `Total Records: ${collection.length}`}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Collections;

// ------------------- STYLES --------------------
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { flexGrow: 1, paddingHorizontal: 10 },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },

  title: { fontSize: 20, fontWeight: "bold", color: "#1f3a8a" },

  createButton: {
    backgroundColor: "#1f3a8a",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6
  },

  createButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },

  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#1f3a8a",
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },

  filterButtonActive: {
    backgroundColor: "#1f3a8a",
  },

  filterText: {
    color: "#1f3a8a",
    fontWeight: "bold",
  },

  filterTextActive: {
    color: "#fff",
  },

  resultsContainer: {
    marginTop: 10,
  },

  resultsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  }
});

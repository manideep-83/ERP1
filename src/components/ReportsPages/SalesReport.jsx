import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Data for each of the master buttons
const mastersData = [
  { "id": "1", "name": "Loading Sheet", "icon": "document-text-outline" },
  { "id": "2", "name": "Unloading Sheet Report", "icon": "document-text-outline" },
  { "id": "3", "name": "Sales Return Report", "icon": "receipt-outline" },
  { "id": "4", "name": "TMR Reports", "icon": "bar-chart-outline" },
  { "id": "5", "name": "LND Detail Report", "icon": "list-outline" },
  { "id": "6", "name": "Sales Return Product", "icon": "cube-outline" },
  { "id": "7", "name": "Product Wise Output", "icon": "analytics-outline" },
  { "id": "8", "name": "Monthly GST Report", "icon": "calendar-outline" },
  { "id": "9", "name": "Product Wise Input", "icon": "analytics-outline" },
  { "id": "10", "name": "SLI Credit Debit Note", "icon": "wallet-outline" },
  { "id": "11", "name": "Sub Stockist Stock", "icon": "home-outline" },
  { "id": "12", "name": "Bill Wise Retailer", "icon": "receipt-outline" },
  { "id": "13", "name": "Sales Return Summary", "icon": "clipboard-outline" },
  { "id": "14", "name": "Bill Wise Sales Report", "icon": "receipt-outline" },
  { "id": "15", "name": "Target Reports", "icon": "trending-up-outline" },
  { "id": "16", "name": "Retailer Credit Note", "icon": "wallet-outline" },
  { "id": "17", "name": "Retailer Wise Target", "icon": "person-outline" },
  { "id": "18", "name": "Tcs Tax Summary", "icon": "calculator-outline" },
  { "id": "19", "name": "Output Tax Summary", "icon": "calculator-outline" },
  { "id": "20", "name": "E Invoice Clear tax", "icon": "document-outline" },
  { "id": "21", "name": "Li Man Days Report", "icon": "calendar-outline" },
  { "id": "22", "name": "Over Sales Report", "icon": "stats-chart-outline" },
  { "id": "23", "name": "Pda Download Details", "icon": "cloud-download-outline" },
  { "id": "24", "name": "Midas Invoice Details", "icon": "document-text-outline" },
  { "id": "25", "name": "Sub Stockist Coverage", "icon": "location-outline" },
  { "id": "26", "name": "E Invoice Govt Report", "icon": "document-outline" },
  { "id": "27", "name": "Bill Wise Item Wise", "icon": "receipt-outline" },
  { "id": "28", "name": "Stockiest TMR Report", "icon": "bar-chart-outline" }
];

const SalesReport = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Sales Report</Text>
        <Text style={styles.subtitle}>Welcome back! Here's your business overview</Text>
        <View style={styles.gridContainer}>
          {mastersData.map((item,index ) => (
            <TouchableOpacity key={item.id} style={[styles.itemContainer,{ backgroundColor: colors[index % colors.length] }]}>
              <Ionicons name={item.icon} size={35} color="#1e3a8a" />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const colors=[ '#82D1DA', '#87CEFA', '#6495ED', '#4682B4', '#8AAEDD' ,'#4169E1'];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#f3f4f6', // Subtle gray background for the content area
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // Overlap with the header for a smooth transition
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '31%', // Roughly 1/3 of the container width
    aspectRatio: 1, // Keep items square
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    paddingBottom: 16,
    paddingLeft:8,
    paddingRight:8,
    paddingTop:16,
    marginBottom: 9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
itemName: {
//   fontFamily: 'Poppins-SemiBold',
  fontSize: 17,
  lineHeight: 20,
  letterSpacing: 0,
  textAlign: 'center',
  color: '#FFFFFF',
},


});

export default SalesReport;
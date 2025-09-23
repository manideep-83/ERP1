import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppHeader from './AppHeader'; // Assuming the AppHeader component is in a separate file

// Data for each of the master buttons
const mastersData = [
  { id: '1', name: 'Journal Master', icon: 'book-outline' },
  { id: '2', name: 'Ledger Master', icon: 'server-outline' },
  { id: '3', name: 'Item Master', icon: 'cube-outline' },
  { id: '4', name: 'Unit of Measure', icon: 'cellular-outline' },
  { id: '5', name: 'Scheme/Disco1unt', icon: 'ticket-outline' }
];

const Company = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Company</Text>
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

export default Company;
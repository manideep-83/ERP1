import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OrderOverview = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Overview</Text>
      <Row label="Branch Code" value="" />
      <Row label="Branch Name" value="" />
      <Row label="GRN Reference No" value="" />
      <Row label="PR Reference No" value="" />
      <Row label="Company Invoice No" value="" />
      <Row label="Purchase Return Date" value="" />
      <Row label="Supplier Name" value="" />
      <Row label="Return Amount" value="" />
      <Row label="Approval Status" value="" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.editButton]}>
          <Ionicons name="create-outline" size={16} color="#fff" />
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.deleteButton]}>
          <Ionicons name="trash-outline" size={16} color="#fff" />
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

/* Row Component */
const Row = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.colon}>:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
    color: '#1a3d7c',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
    flex: 3, // left column
  },
  colon: {
    fontSize: 14,
    color: '#333',
    flex: 0.3, // middle column (centered colon)
    textAlign: 'center',
  },
  value: {
    fontSize: 14,
    color: '#333',
    flex: 4, // right column
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 8,
  },
  editButton: {
    backgroundColor: '#1a3d7c',
  },
  deleteButton: {
    backgroundColor: '#1a3d7c',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default OrderOverview;

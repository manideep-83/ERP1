import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // ✅ Added navigation hook

// Reusable component for displaying a single address card
const AddressCard = ({ address, isPrimary, onEdit, onDelete, onSetPrimary }) => (
  <View style={[styles.addressCard, isPrimary && styles.primaryCard]}>
    <View style={styles.addressHeader}>
      <Text style={styles.addressLabel}>{address.label}</Text>
      {isPrimary && <Text style={styles.primaryTag}>PRIMARY</Text>}
    </View>

    <Text style={styles.addressText}>{address.line1}</Text>
    <Text style={styles.addressText}>{address.line2}</Text>
    <Text style={styles.addressText}>{address.city}, {address.state} - {address.pincode}</Text>
    <Text style={styles.addressText}>Contact: {address.phone}</Text>

    <View style={styles.addressActions}>
      <TouchableOpacity onPress={() => onEdit(address.id)}>
        <Text style={styles.actionButtonText}>Edit</Text>
      </TouchableOpacity>
      <Text style={styles.actionSeparator}>|</Text>
      <TouchableOpacity onPress={() => onDelete(address.id)}>
        <Text style={[styles.actionButtonText, styles.deleteText]}>Delete</Text>
      </TouchableOpacity>
      {!isPrimary && (
        <>
          <Text style={styles.actionSeparator}>|</Text>
          <TouchableOpacity onPress={() => onSetPrimary(address.id)}>
            <Text style={[styles.actionButtonText, styles.primaryText]}>Set Primary</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  </View>
);

const ManageAddressesScreen = () => {
  const navigation = useNavigation(); // ✅ useNavigation hook
  const [addresses, setAddresses] = useState([
    {
      id: 'addr1',
      label: 'Office (Primary)',
      line1: '101, Business Park Tower',
      line2: 'Near City Centre',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
      phone: '9876543210',
      isPrimary: true,
    },
    {
      id: 'addr2',
      label: 'Warehouse',
      line1: 'Plot No. 45, Industrial Area',
      line2: 'Electronic City Phase 1',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560100',
      phone: '9988776655',
      isPrimary: false,
    },
  ]);

  const handleAction = (action, id) => {
    Alert.alert(`Action: ${action}`, `Address ID: ${id}`);
    // In a real app, navigate or perform an API call here
  };

  const handleSetPrimary = (id) => {
    setAddresses(prev =>
      prev.map(addr => ({
        ...addr,
        isPrimary: addr.id === id,
      }))
    );
    Alert.alert('Primary Address Set', `Address ID ${id} is now the primary address.`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Back Button */}
        {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity> */}

        <Text style={styles.screenTitle}>Delivery Addresses</Text>
        <Text style={styles.screenSubtitle}>Manage your saved locations for quick ordering.</Text>

        {/* Add New Address Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddAddress')} // ✅ Example navigation to AddAddress screen
        >
          <Text style={styles.addButtonText}>+ Add New Address</Text>
        </TouchableOpacity>

        {/* List of Addresses */}
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            isPrimary={address.isPrimary}
            onEdit={(id) => handleAction('Edit', id)}
            onDelete={(id) => handleAction('Delete', id)}
            onSetPrimary={handleSetPrimary}
          />
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#1f75bcff',
    fontWeight: 'bold',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  screenSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#1f75bcff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addressCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  primaryCard: {
    borderColor: '#1f75bcff',
    borderWidth: 2,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  addressLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  primaryTag: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#1f75bcff',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    overflow: 'hidden',
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  addressActions: {
    flexDirection: 'row',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  deleteText: {
    color: '#dc3545',
    marginLeft: 10,
  },
  primaryText: {
    color: '#1f75bcff',
    marginLeft: 10,
  },
  actionSeparator: {
    color: '#CCC',
    marginHorizontal: 10,
  },
});

export default ManageAddressesScreen;

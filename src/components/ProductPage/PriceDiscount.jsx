import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PriceDiscount() {
  const [searchBasedOn, setSearchBasedOn] = useState('sku');
  const [retailerChannel, setRetailerChannel] = useState('');
  const [retailerGroup, setRetailerGroup] = useState('');
  const [retailerClass, setRetailerClass] = useState('');
  const [product, setProduct] = useState('');

  const handleGo = () => {
    console.log('Selected values:', {
      searchBasedOn,
      retailerChannel,
      retailerGroup,
      retailerClass,
      product,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Quick Search Header */}
      <Text style={styles.subHeader}>Quick Search</Text>

      {/* Search Based On */}
      <Text style={styles.label}>Search Based On</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={searchBasedOn}
          onValueChange={(itemValue) => setSearchBasedOn(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Specific SKU" value="sku" />
          <Picker.Item label="Category" value="category" />
        </Picker>
      </View>

      {/* Retailer Channel / Sub Channel */}
      <Text style={styles.label}>Retailer Channel/ Sub Channel *</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={retailerChannel}
          onValueChange={(itemValue) => setRetailerChannel(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select" value="" />
          <Picker.Item label="Online" value="online" />
          <Picker.Item label="Offline" value="offline" />
        </Picker>
      </View>

      {/* Retailer Group */}
      <Text style={styles.label}>Retailer Group *</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={retailerGroup}
          onValueChange={(itemValue) => setRetailerGroup(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select" value="" />
          <Picker.Item label="Group A" value="groupA" />
          <Picker.Item label="Group B" value="groupB" />
        </Picker>
      </View>

      {/* Retailer Class */}
      <Text style={styles.label}>Retailer Class *</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={retailerClass}
          onValueChange={(itemValue) => setRetailerClass(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select" value="" />
          <Picker.Item label="Class 1" value="class1" />
          <Picker.Item label="Class 2" value="class2" />
        </Picker>
      </View>

      {/* Product */}
      <Text style={styles.label}>Product *</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={product}
          onValueChange={(itemValue) => setProduct(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select" value="" />
          <Picker.Item label="Product 1" value="product1" />
          <Picker.Item label="Product 2" value="product2" />
        </Picker>
      </View>

      {/* GO Button */}
      <TouchableOpacity style={styles.button} onPress={handleGo}>
        <Ionicons name="search" size={18} color="#fff" />
        <Text style={styles.buttonText}> GO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
    marginTop: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: {
    height: 53,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: '#0033A0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

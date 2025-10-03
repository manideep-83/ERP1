import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const OrderToBilling = () => {
  // --- State for Filter Fields ---
  const [distributorBranch, setDistributorBranch] = useState('16622');
  const [fromDate, setFromDate] = useState('08/09/2025');
  const [toDate, setToDate] = useState('08/09/2025');
  const [customer, setCustomer] = useState('');
  const [location, setLocation] = useState('');
  const [route, setRoute] = useState('');
  const [salesman, setSalesman] = useState('');

  // Mock Pickers
  const salesmanOptions = ["Select Salesman", "SM01 - John", "SM02 - Jane"];
  const routeOptions = ["Select Route", "RT-A", "RT-B"];

  const handleHistory = () => console.log('Viewing Order to Billing History...');
  const handlePopulate = () => console.log('Populating orders based on filters...');

  // Helper functions
  const renderInput = (label, value, onChangeText, placeholder = '') => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );

  const renderDisplay = (label, value) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.displayValue}>{value}</Text>
    </View>
  );

  const renderPicker = (label, selectedValue, onValueChange, options) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={selectedValue} onValueChange={onValueChange} style={styles.picker}>
          {options.map((opt, i) => (
            <Picker.Item key={i} label={opt} value={opt} />
          ))}
        </Picker>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Order to Billing</Text>
        <TouchableOpacity style={styles.historyButton} onPress={handleHistory}>
          <Text style={styles.historyButtonText}>History</Text>
        </TouchableOpacity>
      </View>

      {/* --- Filter Form --- */}
      <View style={styles.formContainer}>
        {/* Row 1 */}
        <View style={styles.row}>
          <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
            {renderDisplay('Distributor Branch', distributorBranch)}
          </View>
          <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
            {renderDisplay('From Date', fromDate)}
          </View>
          <View style={styles.inputGroup}>
            {renderInput('Customer', customer, setCustomer)}
          </View>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
            {renderInput('Location', location, setLocation)}
          </View>
          <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
            {renderDisplay('To Date', toDate)}
          </View>
          <View style={styles.inputGroup}>
            {renderInput('Route', route, setRoute)}
          </View>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
            {renderInput('Salesman', salesman, setSalesman)}
          </View>
          <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
            <TouchableOpacity style={styles.salesmanAlert} onPress={() => console.log('Select Salesman')}>
              <Text style={styles.salesmanAlertText}>Select Salesman</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputGroup}>
            <TouchableOpacity style={styles.populateButton} onPress={handlePopulate}>
              <Text style={styles.populateButtonText}>Populate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* --- Placeholder for Listing Table --- */}
      <View style={styles.searchResultsPlaceholder}>
        <Text style={styles.placeholderText}>Order Listing Table goes here.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  headerText: { fontSize: 28, fontWeight: 'bold', color: '#1f3a8a' },
  historyButton: { backgroundColor: '#f0f0f0', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', elevation: 2 },
  historyButtonText: { color: '#333', fontWeight: 'bold' },

  formContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 10, elevation: 3, marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  inputGroup: { flex: 1 },
  inputGroupMarginRight: { marginRight: 10 },
  label: { fontSize: 12, color: '#666', marginBottom: 2 },
  input: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: Platform.OS === 'ios' ? 8 : 4, fontSize: 16 },
  displayValue: { fontSize: 16, fontWeight: 'bold', color: '#333', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: Platform.OS === 'ios' ? 8 : 4 },
  pickerContainer: { borderBottomWidth: 1, borderBottomColor: '#ccc', justifyContent: 'center', height: 40 },
  picker: { height: 40, width: '100%' },

  salesmanAlert: { backgroundColor: '#dc3545', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 5, alignItems: 'center' },
  salesmanAlertText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },

  populateButton: { backgroundColor: '#1f3a8a', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5, alignItems: 'center' },
  populateButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },

  searchResultsPlaceholder: { marginTop: 10, padding: 50, borderWidth: 1, borderColor: '#eee', borderStyle: 'dashed', borderRadius: 5, alignItems: 'center', backgroundColor: '#fff' },
  placeholderText: { color: '#ccc', fontStyle: 'italic' },
});

export default OrderToBilling;

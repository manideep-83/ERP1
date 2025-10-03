import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateBatchTransfer = () => {
  const [defaultGodown, setDefaultGodown] = useState(false);
  const [salesmanGodown, setSalesmanGodown] = useState(false);

  // Form fields
  const [branch, setBranch] = useState('16222');
  const [code, setCode] = useState('16222');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contactPerson, setContactPerson] = useState('');

  const handleSave = () => console.log('Save clicked');
  const handleDiscard = () => console.log('Discard clicked');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create New</Text>

      <View style={styles.formContainer}>
        {/* Two-column grid */}
        <View style={styles.row}>
          <View style={styles.column}>
            <InputField label="Distributor Branch" value={branch} onChangeText={setBranch} />
            <InputField label="User Ref. Number" value={name} onChangeText={setName} />
            <InputField label="Reason" value={country} onChangeText={setCountry} />
            <InputField label="Stock Type" value={city} onChangeText={setCity} />
            <InputField label="From Batch" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />
                        <InputField label="Input Text Product" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />

            <View style={styles.checkboxContainer}>
              <CheckBox value={defaultGodown} onValueChange={setDefaultGodown} />
              <Text style={styles.checkboxLabel}>Default Godown</Text>
            </View>
          </View>

          <View style={styles.column}>
            <InputField label="Code" value={code} onChangeText={setCode} />
            <InputField label="Address" value={address} onChangeText={setAddress} />
            <InputField label="State" value={state} onChangeText={setState} />
            <InputField label="Postal Code" value={postalCode} onChangeText={setPostalCode} />
            <InputField label="Contact Person" value={contactPerson} onChangeText={setContactPerson} />
            <View style={styles.checkboxContainer}>
              <CheckBox value={salesmanGodown} onValueChange={setSalesmanGodown} />
              <Text style={styles.checkboxLabel}>Salesman Godown</Text>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
            <Ionicons name="save-outline" size={18} color="#fff" />
            <Text style={styles.buttonText}> Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.discardButton]} onPress={handleDiscard}>
            <Ionicons name="close-circle-outline" size={18} color="#fff" />
            <Text style={styles.buttonText}> Discard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Reusable input field component
const InputField = ({ label, value, onChangeText, keyboardType = 'default' }) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f6fa',
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f3a8a',
    marginBottom: 15,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 14,
    paddingVertical: Platform.OS === 'ios' ? 8 : 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
    marginHorizontal: 5,
    elevation: 2,
  },
  saveButton: {
    backgroundColor: '#1f3a8a',
  },
  discardButton: {
    backgroundColor: '#dc2626',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CreateBatchTransfer;
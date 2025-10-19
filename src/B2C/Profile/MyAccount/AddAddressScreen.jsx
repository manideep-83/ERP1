import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  TextInput, 
  Alert, 
  Switch 
} from 'react-native';

const AddAddressScreen = () => {
  const [label, setLabel] = useState('');
  const [contactName, setContactName] = useState('');
  const [mobile, setMobile] = useState('');
  const [pincode, setPincode] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleSaveAddress = () => {
    // Basic form validation
    if (!label || !contactName || !mobile || !pincode || !line1) {
      Alert.alert('Missing Fields', 'Please fill in all required fields (Label, Name, Mobile, Pincode, and Address Line 1).');
      return;
    }
    if (mobile.length !== 10) {
      Alert.alert('Invalid Mobile', 'Mobile number must be 10 digits.');
      return;
    }
    if (pincode.length !== 6) {
      Alert.alert('Invalid Pincode', 'Pincode must be 6 digits.');
      return;
    }

    const newAddress = {
      label,
      contactName,
      mobile,
      pincode,
      line1,
      line2,
      isPrimary,
      // City and State would typically be determined by Pincode API lookup
    };

    // Mock API Call: Save the new address
    console.log('Saving new address:', newAddress);
    
    Alert.alert('Success', `${label} address saved successfully!`);
    
    // Clear the form after submission
    setLabel('');
    setContactName('');
    setMobile('');
    setPincode('');
    setLine1('');
    setLine2('');
    setIsPrimary(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Title and Subtitle */}
        <Text style={styles.screenTitle}>Add New Address</Text>
        <Text style={styles.screenSubtitle}>
          Enter the location details where you want your orders delivered.
        </Text>

        {/* --- ADDRESS DETAILS Section --- */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Address Details</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Address Label (e.g., Office, Warehouse)"
            value={label}
            onChangeText={setLabel}
            placeholderTextColor="#AAA"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Contact Name"
            value={contactName}
            onChangeText={setContactName}
            placeholderTextColor="#AAA"
          />

          <TextInput
            style={styles.input}
            placeholder="Mobile Number (10 digits)"
            keyboardType="numeric"
            maxLength={10}
            value={mobile}
            onChangeText={setMobile}
            placeholderTextColor="#AAA"
          />

          <TextInput
            style={styles.input}
            placeholder="Pincode (6 digits)"
            keyboardType="numeric"
            maxLength={6}
            value={pincode}
            onChangeText={setPincode}
            placeholderTextColor="#AAA"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Address Line 1 (Street/Building No.)"
            value={line1}
            onChangeText={setLine1}
            placeholderTextColor="#AAA"
          />
          
          <TextInput
            style={[styles.input, styles.lastInput]}
            placeholder="Address Line 2 (Landmark, Optional)"
            value={line2}
            onChangeText={setLine2}
            placeholderTextColor="#AAA"
          />
        </View>
        
        {/* --- SET AS PRIMARY Section --- */}
        <View style={styles.sectionCard}>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>Set as Primary Address</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#8a2be2" }}
                    thumbColor={isPrimary ? "#f4f3f4" : "#f4f3f4"}
                    onValueChange={setIsPrimary}
                    value={isPrimary}
                />
            </View>
        </View>

        {/* --- SAVE Button --- */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
          <Text style={styles.saveButtonText}>Save Address</Text>
        </TouchableOpacity>
        
        <View style={{height: 40}} />
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

  // --- Card Styles ---
  sectionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  // --- Input/Switch Styles ---
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  },
  lastInput: {
    marginBottom: 0,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  switchText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },

  // --- Save Button ---
  saveButton: {
    backgroundColor: '#8a2be2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddAddressScreen;

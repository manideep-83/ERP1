import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../../../ReusableComponents/AppButton';

export default function ClaimType() {
  const navigation = useNavigation();
  const [searchBy, setSearchBy] = useState('claimtype');
  const [searchInput, setSearchInput] = useState('');

  const handleCreateNew = () => {
    // Navigate to the 'CreateNewClaim' screen
    navigation.navigate('CreateNewClaimType');
  };

  const handleGo = () => {
    console.log('Selected values:', {
      searchBy,
      searchInput,
    });
    // Add your search logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.subHeader}>Claim Type</Text>
          <AppButton
            label="+ Create new"
            onPress={handleCreateNew}
            style={styles.createNewButton}
            textStyle={styles.createNewButtonText}
          />
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchRow}>
            {/* Search By */}
            <View style={styles.pickerContainer}>
              <Text style={styles.label}>Search By</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={searchBy}
                  onValueChange={(itemValue) => setSearchBy(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Claim Type" value="claimtype" />
                  <Picker.Item label="Other Claim" value="otherclaim" />
                </Picker>
              </View>
            </View>

            {/* Search Input */}
            <View style={styles.searchInputContainer}>
              <Text style={styles.label}>Search Input</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter search term"
                value={searchInput}
                onChangeText={setSearchInput}
              />
            </View>

          </View>
          
          {/* GO Button */}
          <AppButton
            label="GO"
            onPress={handleGo}
            style={styles.goButton}
            textStyle={styles.goButtonText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
  },
  createNewButton: {
    backgroundColor: "#1f3a8a",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 0,
  },
  createNewButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickerContainer: {
    flex: 1,
    marginRight: 10,
  },
  searchInputContainer: {
    flex: 1,
    marginLeft: 10,
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
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 45,
  },
  goButton: {
    backgroundColor: '#0033A0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 15,
    alignSelf: 'flex-end',
  },
  goButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
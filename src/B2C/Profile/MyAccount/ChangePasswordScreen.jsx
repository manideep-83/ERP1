import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    // 1. Basic Validation Checks
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'All password fields are required.');
      return;
    }

    if (newPassword.length < 8) {
      Alert.alert('Error', 'New password must be at least 8 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirmation password do not match.');
      return;
    }
    
    if (newPassword === currentPassword) {
      Alert.alert('Error', 'New password cannot be the same as your current password.');
      return;
    }

    // 2. Mock API Call (Replace with actual backend logic)
    // Here you would typically hash the new password and send it with the current password for verification.
    console.log('Attempting to change password...');
    
    // Simulate success
    Alert.alert('Success', 'Your password has been changed successfully! You will now be logged out.');
    
    // Clear fields after success
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    
    // In a real app, force logout after success
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Title and Subtitle */}
        <Text style={styles.screenTitle}>Change Password</Text>
        <Text style={styles.screenSubtitle}>
          Update your account password for enhanced security.
        </Text>

        {/* --- PASSWORD INPUTS --- */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Security Credentials</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            secureTextEntry={true}
            value={currentPassword}
            onChangeText={setCurrentPassword}
            placeholderTextColor="#AAA"
          />
          
          <TextInput
            style={styles.input}
            placeholder="New Password (min 8 characters)"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholderTextColor="#AAA"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor="#AAA"
          />
          
          <Text style={styles.passwordHint}>
            For security, please ensure your new password is unique and complex.
          </Text>
        </View>

        {/* --- SAVE Button --- */}
        <TouchableOpacity style={styles.saveButton} onPress={handleChangePassword}>
          <Text style={styles.saveButtonText}>Change Password</Text>
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

  // --- Input Styles ---
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
  passwordHint: {
    fontSize: 12,
    color: '#1f75bcff',
    marginTop: 5,
    paddingHorizontal: 5,
  },

  // --- Save Button ---
  saveButton: {
    backgroundColor: '#1f75bcff',
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

export default ChangePasswordScreen;

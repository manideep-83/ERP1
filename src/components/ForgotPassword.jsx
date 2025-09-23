import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ForgotPassword = ({ navigation }) => {
  const [captcha, setCaptcha] = useState('gWe57@'); // Example captcha

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4a69bd" />
      
      <Text style={styles.welcomeText}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Reset your password using your email or username</Text>

      {/* Logo */}
      <Image 
        source={require('../../Assets/login/Vector-4.png')} 
        style={{ width: 150, height: 100, resizeMode: 'contain' }} 
      />
      <Text style={styles.logoText}>Bahupada</Text>

      {/* Email/Username Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#fff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email/Username"
          placeholderTextColor="#d1d5db"
        />
      </View>

      {/* Captcha Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Captcha"
          placeholderTextColor="#d1d5db"
        />
      </View>
      <Text style={styles.captchaText}>{captcha}</Text> {/* Display captcha value */}

      {/* Action Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={[styles.actionButton, styles.sendButton]}>
          <Text style={styles.actionButtonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.cancelButton]} onPress={() => navigation.goBack()}>
          <Text style={styles.actionButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Resend Link */}
      <TouchableOpacity>
        <Text style={styles.resendText}>Resend</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a69bd', // Solid blue background
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#d1d5db',
    marginBottom: 40,
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 70,
    marginBottom: 5,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#fff',
    fontSize: 16,
  },
  captchaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    // Add background and border for the captcha display as in the image
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    width: '48%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: '#fff',
  },
  cancelButton: {
    backgroundColor: '#fff',
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b59a8',
  },
  resendText: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default ForgotPassword;
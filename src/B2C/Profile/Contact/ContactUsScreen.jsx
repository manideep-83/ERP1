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
} from 'react-native';

const ContactUsScreen = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!subject.trim() || !message.trim()) {
      Alert.alert(
        'Missing Fields',
        'Please enter both a subject and a message before sending.'
      );
      return;
    }

    // Mock API Call
    console.log('Sending message:', { subject, message });

    Alert.alert(
      'Message Sent',
      'Your message has been received! Our team will respond shortly.'
    );

    // Clear the form
    setSubject('');
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Title and Subtitle */}
        <Text style={styles.screenTitle}>Contact Us</Text>
        <Text style={styles.screenSubtitle}>
          We're here to help! Choose a method below to get in touch.
        </Text>

        {/* --- DIRECT CONTACT Section --- */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Direct Support</Text>

          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Phone Support</Text>
            <TouchableOpacity
              onPress={() =>
                Alert.alert('Calling', 'Calling +91 808-888-8888')
              }>
              <Text style={styles.contactValue}>+91 808-888-8888</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.contactRow, styles.lastContactRow]}>
            <Text style={styles.contactLabel}>Email Support</Text>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'Emailing',
                  'Opening email client for support@rootnshades.com'
                )
              }>
              <Text style={styles.contactValue}>support@rootnshades.com</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --- MESSAGE FORM Section --- */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Send Us a Message</Text>

          <TextInput
            style={styles.input}
            placeholder="Subject (e.g., Order Issue, Account Inquiry)"
            value={subject}
            onChangeText={setSubject}
            placeholderTextColor="#AAA"
            autoCapitalize="words"
          />

          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Your detailed message"
            multiline
            numberOfLines={5}
            value={message}
            onChangeText={setMessage}
            placeholderTextColor="#AAA"
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

        {/* Padding View at bottom */}
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
  screenTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  screenSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  sectionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 30,
    padding: 18,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#333',
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  lastContactRow: {
    borderBottomWidth: 0,
  },
  contactLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  contactValue: {
    fontSize: 16,
    color: '#8a2be2',
    fontWeight: '600',
  },
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
  messageInput: {
    minHeight: 120,
    paddingTop: 15,
  },
  sendButton: {
    backgroundColor: '#8a2be2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ContactUsScreen;

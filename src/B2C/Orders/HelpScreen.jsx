import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';

const HelpScreen = () => {
  const [issueDescription, setIssueDescription] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Use a dummy orderId for demonstration
  const orderId = 'ORD-2024-006';

  const commonTopics = [
    'My order is delayed',
    'Received a damaged item',
    'Incorrect item received',
    'Issue with payment',
    'Request to cancel order',
  ];

  const handleSubmit = () => {
    if (!issueDescription.trim() || !selectedTopic) {
      Alert.alert('Incomplete Form', 'Please select a topic and describe your issue.');
      return;
    }
    
    // Here you would integrate with your backend to send the support request
    console.log('Sending support request:', {
      orderId: orderId,
      topic: selectedTopic,
      description: issueDescription,
    });

    Alert.alert('Request Submitted', 'Your request has been sent to our support team. We will get back to you shortly.');
    
    // Reset the form
    setIssueDescription('');
    setSelectedTopic(null);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Need Help?</Text>
      <Text style={styles.subtitle}>
        <Text>Order ID: </Text>
        <Text style={styles.orderIdText}>{orderId}</Text>
      </Text>
      <Text style={styles.descriptionText}>
        Describe your issue with the order. A support representative will be in touch with you shortly.
      </Text>

      {/* Common Topics */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Select a common issue</Text>
        <View style={styles.topicsContainer}>
          {commonTopics.map((topic, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.topicButton,
                selectedTopic === topic && styles.topicButtonActive,
              ]}
              onPress={() => setSelectedTopic(topic)}
            >
              <Text style={[
                styles.topicText,
                selectedTopic === topic && styles.topicTextActive,
              ]}>
                {topic}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Description Input */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Describe your issue</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., The bread in my order was stale."
          multiline
          numberOfLines={5}
          value={issueDescription}
          onChangeText={setIssueDescription}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  orderIdText: {
    fontWeight: 'bold',
    color: '#8a2be2',
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  topicButton: {
    backgroundColor: '#e9e9e9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  topicButtonActive: {
    backgroundColor: '#6a0dad',
    borderColor: '#6a0dad',
  },
  topicText: {
    color: '#333',
    fontSize: 14,
  },
  topicTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#6a0dad',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HelpScreen;
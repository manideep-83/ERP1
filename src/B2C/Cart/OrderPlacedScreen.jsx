import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,Alert } from 'react-native';

const OrderPlacedScreen = () => {
  // Dummy data (in a real app, this would be passed via navigation params)
  const orderId = 'ORD-2024-10-11-8765';
  const totalAmount = 1399.50;

  const handleAction = (action) => {
    // Placeholder for navigation/API calls
    console.log(`Action requested: ${action}`);
    // In a real app, you would use navigation.navigate('ScreenName') here
    if (action === 'Home') {
      Alert.alert('Navigating', 'Go to Home Screen');
    } else if (action === 'Track') {
      Alert.alert('Navigating', `Go to Tracking for ${orderId}`);
    } else if (action === 'Invoice') {
      Alert.alert('Action', 'Downloading Invoice PDF...');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Success Icon/Indicator */}
        <View style={styles.iconContainer}>
          <Text style={styles.successIcon}>✓</Text>
        </View>

        {/* Confirmation Message */}
        <Text style={styles.title}>Order Placed Successfully!</Text>
        <Text style={styles.subtitle}>
          Your order has been confirmed and is now being processed.
        </Text>

        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Order ID</Text>
            <Text style={styles.summaryValue}>{orderId}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Amount</Text>
            <Text style={styles.summaryTotalValue}>₹{totalAmount.toFixed(2)}</Text>
          </View>
        </View>
        
        {/* Next Steps / Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => handleAction('Track')}
          >
            <Text style={styles.primaryButtonText}>Track Order</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => handleAction('Invoice')}
          >
            <Text style={styles.secondaryButtonText}>View Invoice</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.textButton}
            onPress={() => handleAction('Home')}
          >
            <Text style={styles.textButtonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // --- Icon ---
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4caf50', // Green color for success
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  successIcon: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
  },
  
  // --- Text ---
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  
  // --- Summary Card ---
  summaryCard: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  summaryTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8a2be2', // Primary purple color
  },

  // --- Actions ---
  actionContainer: {
    width: '100%',
    alignItems: 'center',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#8a2be2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: '#e6e6fa', // Light purple background
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#8a2be2',
  },
  secondaryButtonText: {
    color: '#8a2be2',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textButton: {
    padding: 10,
  },
  textButtonText: {
    color: '#666',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default OrderPlacedScreen;

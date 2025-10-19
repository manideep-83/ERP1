import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

// Reusable component for each transaction item
const TransactionItem = ({ transaction }) => (
  <View style={styles.transactionItem}>
    {/* Icon Section */}
    <View style={styles.transactionIcon}>
      <Text style={styles.iconText}>
        {transaction.type === 'Payment' ? '💳' : '🛍️'}
      </Text>
    </View>
    
    {/* Details Section */}
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionType}>{transaction.type}</Text>
      <Text style={styles.transactionDate}>{transaction.date}</Text>
    </View>
    
    {/* Amount and Status Section */}
    <View style={styles.transactionAmountContainer}>
      <Text style={[
        styles.transactionAmount, 
        transaction.amount >= 0 ? styles.positiveAmount : styles.negativeAmount
      ]}>
        {transaction.amount >= 0 ? `+₹${transaction.amount}` : `-₹${Math.abs(transaction.amount)}`}
      </Text>
      <Text style={[
        styles.transactionStatus, 
        transaction.status === 'Completed' ? styles.completedStatus : styles.debitedStatus
      ]}>
        {transaction.status}
      </Text>
    </View>
  </View>
);

// Main screen component
const PaymentHistoryScreen = () => {
  // Sample data to simulate API response
  const transactionData = [
    { id: '1', type: 'Payment', date: '2024-01-28', amount: 15000, status: 'Completed' },
    { id: '2', type: 'Purchase', date: '2024-01-08', amount: -8500, status: 'Debited' },
    { id: '3', type: 'Payment', date: '2024-01-05', amount: 22000, status: 'Completed' },
    { id: '4', type: 'Payment', date: '2024-01-28', amount: 15000, status: 'Completed' },
    { id: '5', type: 'Purchase', date: '2024-01-08', amount: -8500, status: 'Debited' },
    { id: '6', type: 'Purchase', date: '2024-01-08', amount: -8500, status: 'Debited' },
    { id: '7', type: 'Payment', date: '2024-01-05', amount: 22000, status: 'Completed' },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.container}>
        {/* Header with title and export button */}
        <View style={styles.header}>
          <Text style={styles.title}>Payment History</Text>
          <TouchableOpacity style={styles.exportButton}>
            <Text style={styles.exportButtonText}>Export CSV</Text>
          </TouchableOpacity>
        </View>

        {/* The FlatList for efficient rendering */}
        <View style={styles.listWrapper}>
            <FlatList
                data={transactionData}
                renderItem={({ item }) => <TransactionItem transaction={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  exportButton: {
    backgroundColor: '#1f75bcff', // Consistent primary color
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  exportButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listWrapper: {
    // Styling the container around the list for shadow/border effects
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden', // Ensures inner content respects border radius
  },
  listContainer: {
    paddingBottom: 0, // Remove bottom padding from scroll view
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  transactionIcon: {
    marginRight: 15,
    width: 30, // Fixed width for alignment
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  transactionAmountContainer: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  positiveAmount: {
    color: '#28a745', // Green for incoming/positive
  },
  negativeAmount: {
    color: '#dc3545', // Red for outgoing/negative
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  completedStatus: {
    color: '#28a745',
  },
  debitedStatus: {
    color: '#dc3545',
  },
});

export default PaymentHistoryScreen;

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Reusable component for each transaction item
const TransactionItem = ({ transaction }) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionIcon}>
      {/* Dynamic icon based on transaction type */}
      {transaction.type === 'Refund' ? (
       <Text>
        Refund
       </Text>
      ) : (
          <Text>
        Purchase
       </Text>
      )}
    </View>
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionType}>{transaction.type}</Text>
      <Text style={styles.transactionDate}>{transaction.date}</Text>
    </View>
    <View style={styles.transactionAmountContainer}>
      <Text style={[styles.transactionAmount, transaction.amount >= 0 ? styles.positiveAmount : styles.negativeAmount]}>
        {transaction.amount >= 0 ? `+₹${transaction.amount}` : `-₹${Math.abs(transaction.amount)}`}
      </Text>
      <Text style={[styles.transactionStatus, transaction.status === 'Completed' ? styles.completedStatus : styles.debitedStatus]}>
        {transaction.status}
      </Text>
    </View>
  </View>
);

// Main screen component
const PaymentHistoryScreen = () => {
  // Sample data to simulate API response
  const transactionData = [
    { id: '1', type: 'Refund', date: '2024-01-28', amount: 15000, status: 'Completed' },
    { id: '2', type: 'Purchase', date: '2024-01-08', amount: -8500, status: 'Debited' },
    { id: '3', type: 'Refund', date: '2024-01-05', amount: 22000, status: 'Completed' },
    { id: '4', type: 'Refund', date: '2024-01-28', amount: 15000, status: 'Completed' },
    { id: '5', type: 'Purchase', date: '2024-01-08', amount: -8500, status: 'Debited' },
    { id: '6', type: 'Purchase', date: '2024-01-08', amount: -8500, status: 'Debited' },
    { id: '7', type: 'Refund', date: '2024-01-05', amount: 22000, status: 'Completed' },
  ];

  return (
    <View style={styles.container}>
      {/* Header with title and export button */}
      <View style={styles.header}>
        <Text style={styles.title}>Payment History</Text>
        <TouchableOpacity style={styles.exportButton}>
          <Text style={styles.exportButtonText}>Export CSV</Text>
        </TouchableOpacity>
      </View>

      {/* The FlatList for efficient rendering */}
      <FlatList
        data={transactionData}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  exportButton: {
    backgroundColor: '#1f75bcff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  exportButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionIcon: {
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
  },
  transactionAmountContainer: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  positiveAmount: {
    color: 'green',
  },
  negativeAmount: {
    color: 'red',
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  completedStatus: {
    color: 'green',
  },
  debitedStatus: {
    color: 'red',
  },
});

export default PaymentHistoryScreen;
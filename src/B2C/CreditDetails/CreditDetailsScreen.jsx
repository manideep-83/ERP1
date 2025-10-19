import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TransactionItem = ({ transaction }) => (
  <View style={styles.transactionCard}>
    <View style={styles.transactionLeft}>
      <View style={styles.transactionIcon}>
        <Text style={styles.iconText}>
          {transaction.type === 'Purchase' ? '🛍️' : '💳'}
        </Text>
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionType}>{transaction.type}</Text>
        <Text style={styles.transactionDate}>{transaction.date}</Text>
      </View>
    </View>
    <View style={styles.transactionRight}>
      <Text
        style={[
          styles.transactionAmount,
          { color: transaction.amount > 0 ? '#28a745' : '#dc3545' },
        ]}
      >
        {transaction.amount > 0 ? `+₹${transaction.amount}` : `-₹${Math.abs(transaction.amount)}`}
      </Text>
      <Text
        style={[
          styles.transactionStatus,
          { color: transaction.status === 'Completed' ? '#28a745' : '#dc3545' },
        ]}
      >
        {transaction.status}
      </Text>
    </View>
  </View>
);

const CreditDetailsScreen = () => {
  const navigation = useNavigation();
  const OUTSTANDING_BALANCE = 25000;
  const [amountToPay, setAmountToPay] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const paymentHistoryData = [
    { id: '1', type: 'Refund', date: '2024-01-28', amount: 15000, status: 'Completed' },
    { id: '2', type: 'Purchase', date: '2024-01-08', amount: -8500, status: 'Debited' },
    { id: '3', type: 'Refund', date: '2024-01-05', amount: 22000, status: 'Completed' },
  ];

  const handleGenerateQR = () => {
    if (!amountToPay || isNaN(amountToPay) || parseFloat(amountToPay) <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid amount to generate QR.');
      return;
    }
    setShowQrCode(true);
    setIsInputDisabled(true);
  };

  const handlePayFull = () => {
    setAmountToPay(String(OUTSTANDING_BALANCE));
    setShowQrCode(true);
    setIsInputDisabled(true);
  };

  const handleConfirmPayment = () => {
    Alert.alert('Payment Confirmed', `Your payment of ₹${amountToPay} has been processed.`);
    setShowQrCode(false);
    setIsInputDisabled(false);
    setAmountToPay('');
  };

  const handleCancelPayment = () => {
    setShowQrCode(false);
    setIsInputDisabled(false);
    setAmountToPay('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Credit Details</Text>
      <Text style={styles.subtitle}>Manage your credit balance and payment history</Text>

      {/* Credit Info Cards */}
      <View style={styles.infoCardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Outstanding Balance</Text>
          <Text style={styles.cardValue}>₹{OUTSTANDING_BALANCE}</Text>
          <Text style={styles.cardSubtext}>ⓘ Due: 2024-01-25</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Credit Limit</Text>
          <Text style={styles.cardValue}>₹1,00,000</Text>
          <Text style={styles.cardSubtext}>⚠️ 25.0% Used</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Available Balance</Text>
          <Text style={styles.cardValue}>₹75,000</Text>
          <Text style={styles.cardSubtext}>✅ Ready to use</Text>
        </View>
      </View>

      {/* Make Payment Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Make Payment</Text>
        <TextInput
          style={[styles.input, isInputDisabled && { backgroundColor: '#eee' }]}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amountToPay}
          onChangeText={setAmountToPay}
          editable={!isInputDisabled}
        />

        {!showQrCode ? (
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={handleGenerateQR}>
              <Text>Generate QR Code</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={handlePayFull}
            >
              <Text style={styles.primaryButtonText}>Pay Full</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.qrCodeContainer}>
              <Text style={styles.qrText}>Scan to Pay ₹{amountToPay}</Text>
              <Image
                source={require('../../../Assets/QR.png')}
                style={styles.qrCodeImage}
                resizeMode="contain"
              />
              <Text style={styles.noteText}>
                Note: Please Click Confirm Payment if not automatically processed
              </Text>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.primaryButton]}
                onPress={handleConfirmPayment}
              >
                <Text style={styles.primaryButtonText}>Confirm Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { borderColor: '#dc3545' }]}
                onPress={handleCancelPayment}
              >
                <Text style={{ color: '#dc3545', fontWeight: 'bold' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      {/* Payment History */}
      <View style={[styles.sectionContainer, styles.historySection]}>
        <View style={styles.historyHeader}>
          <Text style={styles.sectionTitle}>Payment History</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PaymentHistory')}>
            <Text style={styles.showAllText}>Show All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={paymentHistoryData}
          renderItem={({ item }) => <TransactionItem transaction={item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  infoCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardLabel: { fontSize: 12, color: '#999', textAlign: 'center' },
  cardValue: { fontSize: 18, fontWeight: 'bold', marginVertical: 5 },
  cardSubtext: { fontSize: 10, color: '#666', textAlign: 'center' },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 15 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  primaryButton: { backgroundColor: '#1f75bcff', borderColor: '#1f75bcff' },
  primaryButtonText: { color: '#fff', fontWeight: 'bold' },
  historySection: { borderLeftWidth: 5, borderLeftColor: '#007aff' },
  historyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  showAllText: { color: '#007aff', fontWeight: 'bold' },
  transactionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionLeft: { flexDirection: 'row', alignItems: 'center' },
  transactionIcon: { fontSize: 24, marginRight: 10 },
  transactionDetails: { marginLeft: 10 },
  transactionType: { fontSize: 16, fontWeight: 'bold' },
  transactionDate: { fontSize: 12, color: '#999' },
  transactionRight: { alignItems: 'flex-end' },
  transactionAmount: { fontSize: 16, fontWeight: 'bold' },
  transactionStatus: { fontSize: 12, fontWeight: 'bold' },
  qrCodeContainer: { alignItems: 'center', marginTop: 20 },
  qrCodeImage: { width: 200, height: 200, marginTop: 10 },
  qrText: { fontSize: 16, fontWeight: 'bold', color: '#555' },
  noteText: { marginTop: 10, fontSize: 12, color: '#777', textAlign: 'center' },
});

export default CreditDetailsScreen;

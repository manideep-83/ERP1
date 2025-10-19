import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReturnCard = ({ returnItem }) => {
  const navigation = useNavigation();

  const handleTrackRefund = () => {
    navigation.navigate('TrackRefund', { refundDetails: returnItem });
  };

  return (
    <View style={styles.returnCard}>
      <View style={styles.header}>
        <Text style={styles.returnId}>{returnItem.id}</Text>
        <Text style={styles.returnDate}>{returnItem.date}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.reasonText}>{returnItem.reason}</Text>
        <Text style={styles.refundAmount}>₹{returnItem.refundAmount}</Text>
      </View>
      <View style={styles.footer}>
        <View
          style={[
            styles.statusTag,
            styles[returnItem.status.toLowerCase().replace(/\s/g, '')],
          ]}
        >
          <Text style={styles.statusText}>{returnItem.status}</Text>
        </View>
        <TouchableOpacity style={styles.trackRefundButton} onPress={handleTrackRefund}>
          <Text style={styles.trackRefundText}>Track Refund</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ReturnsScreen = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const allReturnsData = [
    { id: 'RET-2024-001', date: '2024-01-20', reason: 'Damaged item', refundAmount: 1500, status: 'Return Pending' },
    { id: 'RET-2024-002', date: '2024-01-18', reason: 'Wrong size delivered', refundAmount: 3000, status: 'Return Successful' },
    { id: 'RET-2024-003', date: '2024-01-15', reason: 'Changed mind', refundAmount: 550, status: 'Refund Initiated' },
    { id: 'RET-2024-004', date: '2024-01-10', reason: 'Item not as described', refundAmount: 2200, status: 'Refund Successful' },
    { id: 'RET-2024-005', date: '2024-01-05', reason: 'Defective product', refundAmount: 1800, status: 'Return Pending' },
  ];

  const filterReturns = (filter) => {
    if (filter === 'All') return allReturnsData;
    if (filter === 'Pending') return allReturnsData.filter(i => i.status === 'Return Pending');
    if (filter === 'Successful') return allReturnsData.filter(i => i.status === 'Return Successful' || i.status === 'Refund Successful');
    if (filter === 'In Progress') return allReturnsData.filter(i => i.status === 'Refund Initiated');
    return [];
  };

  const filteredData = filterReturns(activeFilter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Returns</Text>
      <Text style={styles.subtitle}>View and manage your return requests</Text>

      <View style={styles.filterContainer}>
        {['All', 'Pending', 'Successful', 'In Progress'].map(filter => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              activeFilter === filter && styles.filterButtonActive,
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text style={activeFilter === filter ? styles.filterTextActive : styles.filterText}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        style={{ flex: 1 }}
        data={filteredData}
        renderItem={({ item }) => <ReturnCard returnItem={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  filterButtonActive: {
    backgroundColor: '#1f75bcff',
  },
  filterText: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 12,
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  listContainer: { paddingBottom: 20 },
  returnCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  returnId: { fontSize: 16, fontWeight: 'bold' },
  returnDate: { fontSize: 12, color: '#999' },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reasonText: { fontSize: 14, color: '#333' },
  refundAmount: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statusTag: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 },
  statusText: { fontSize: 12, fontWeight: 'bold', color: '#fff' },
  returnpending: { backgroundColor: '#ff9800' },
  returnsuccessful: { backgroundColor: '#4caf50' },
  refundinitiated: { backgroundColor: '#2196f3' },
  refundsuccessful: { backgroundColor: '#00c853' },
  trackRefundButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  trackRefundText: { fontSize: 12, color: '#333' },
});

export default ReturnsScreen;

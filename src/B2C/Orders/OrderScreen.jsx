import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

// ✅ Reusable component for each order card
const OrderCard = ({ order }) => {
  const navigation = useNavigation();

  const handleViewDetails = () => {
    // Navigate to ViewDetails screen and pass order data
    navigation.navigate('ViewDetails', { orderDetails: order });
  };

  return (
    <View style={styles.orderCard}>
      <View style={styles.header}>
        <Text style={styles.orderId}>{order.id}</Text>
        <Text style={styles.orderDate}>{order.date}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.itemCount}>{order.items} items</Text>
        <Text style={styles.price}>₹{order.price}</Text>
      </View>

      <View style={styles.footer}>
        <View style={[styles.statusTag, styles[order.status.toLowerCase()]]}>
          <Text style={styles.statusText}>{order.status}</Text>
        </View>

        <TouchableOpacity style={styles.viewDetailsButton} onPress={handleViewDetails}>
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OrderScreen = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const allOrdersData = [
    { id: 'ORD-2024-005', date: '2024-01-18', items: 5, price: 8950, status: 'Processing' },
    { id: 'ORD-2024-006', date: '2024-01-19', items: 15, price: 2850, status: 'Confirmed' },
    { id: 'ORD-2024-007', date: '2024-01-17', items: 2, price: 500, status: 'Delivered' },
    { id: 'ORD-2024-008', date: '2024-01-16', items: 8, price: 1200, status: 'Cancelled' },
    { id: 'ORD-2024-009', date: '2024-01-15', items: 3, price: 450, status: 'Processing' },
    { id: 'ORD-2024-010', date: '2024-01-14', items: 1, price: 150, status: 'Rejected' },
    { id: 'ORD-2024-011', date: '2024-01-13', items: 12, price: 3500, status: 'Delivered' },
  ];

  const filterOrders = (filter) => {
    switch (filter) {
      case 'All':
        return allOrdersData;
      case 'Pending':
        return allOrdersData.filter(o => o.status === 'Processing' || o.status === 'Confirmed');
      case 'Completed':
        return allOrdersData.filter(o => o.status === 'Delivered');
      case 'Issue':
        return allOrdersData.filter(o => o.status === 'Cancelled' || o.status === 'Rejected');
      default:
        return [];
    }
  };

  const filteredData = filterOrders(activeFilter);
  const filterButtons = ['All', 'Pending', 'Completed', 'Issue'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
      <Text style={styles.subtitle}>Track and manage all your orders</Text>

      <View style={styles.filterContainer}>
        {filterButtons.map(status => (
          <TouchableOpacity
            key={status}
            style={[styles.filterButton, activeFilter === status && styles.filterButtonActive]}
            onPress={() => setActiveFilter(status)}
          >
            <Text style={activeFilter === status ? styles.filterTextActive : styles.filterText}>
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        style={{ flex: 1 }}
        data={filteredData}
        renderItem={({ item }) => <OrderCard order={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
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
    paddingHorizontal: 5,
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
    textAlign: 'center',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  orderCard: {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 12,
    color: '#999',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemCount: {
    fontSize: 14,
    color: '#333',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusTag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  processing: {
    backgroundColor: '#ff9800',
  },
  confirmed: {
    backgroundColor: '#4caf50',
  },
  delivered: {
    backgroundColor: '#17a2b8',
  },
  cancelled: {
    backgroundColor: '#dc3545',
  },
  rejected: {
    backgroundColor: '#6c757d',
  },
  viewDetailsButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  viewDetailsText: {
    fontSize: 12,
    color: '#333',
  },
});

export default OrderScreen;

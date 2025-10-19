import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute to get parameters

const ViewDetailsScreen = () => {
    const route = useRoute();
    // Get the orderDetails passed from the OrderScreen via route.params
    const orderDetails = route.params?.orderDetails || {
        id: 'N/A',
        date: 'N/A',
        status: 'Unknown',
        price: '0',
        items: [],
        deliveryAddress: 'No address provided',
        subtotal: 0,
        shippingFee: 0,
        discount: 0,
        total: 0,
        paymentMethod: 'N/A',
        trackingNumber: 'N/A'
    };
    
    // NOTE: For demonstration, the price passed from OrderScreen is just the total price (order.price).
    // In a real application, you would pass more detailed item data linked to the order ID.
    // For now, we will use the dummy item structure only if no detailed items are passed.

    // If order details are minimal (like from the OrderCard), we use hardcoded item data for visual completeness
    const detailedItems = orderDetails.items && orderDetails.items.length > 0 ? orderDetails.items : [
        { id: 'placeholder1', name: 'Product A (placeholder)', quantity: 2, total: 1000 },
        { id: 'placeholder2', name: 'Product B (placeholder)', quantity: 1, total: 80 },
    ];


  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return '#4caf50'; // Green for confirmed
      case 'Processing':
        return '#ff9800'; // Orange for processing
      case 'Delivered':
        return '#17a2b8'; // Blue for delivered
      case 'Cancelled':
        return '#dc3545'; // Red for cancelled
      default:
        return '#6c757d';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      
      {/* Order Info Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Information</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Order ID:</Text>
          <Text style={styles.value}>{orderDetails.id}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Order Date:</Text>
          <Text style={styles.value}>{orderDetails.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Status:</Text>
          <Text style={[styles.statusValue, { backgroundColor: getStatusColor(orderDetails.status) }]}>
            {orderDetails.status}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Tracking:</Text>
          <Text style={styles.value}>{orderDetails.trackingNumber || 'N/A'}</Text>
        </View>
      </View>

      {/* Product List Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Products</Text>
        {detailedItems.map(item => (
          <View key={item.id} style={styles.itemRow}>
            <Text style={styles.itemName}>{item.name} x {item.quantity}</Text>
            <Text style={styles.itemPrice}>₹{item.total || item.price * item.quantity}</Text>
          </View>
        ))}
      </View>

      {/* Price Summary Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Summary</Text>
        {/* We use the total price passed from the list if detailed summary isn't available */}
        <View style={styles.detailRow}>
          <Text style={styles.label}>Total Price (from list):</Text>
          <Text style={styles.value}>₹{orderDetails.price || orderDetails.total}</Text>
        </View>
        <Text style={styles.subtitle}>*Detailed financial breakdown requires a backend call using the Order ID.</Text>
      </View>
      
      {/* Action Button */}
{/*       <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Need Help with this Order?</Text>
      </TouchableOpacity> */}
      <View style={{height: 50}} />
    </ScrollView>
  );
};

// ... (Styles remain the same)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  statusValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    overflow: 'hidden', // Ensures the background color is contained within the border-radius on iOS
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1, // Allows text to wrap
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  actionButton: {
    backgroundColor: '#8a2be2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ViewDetailsScreen;

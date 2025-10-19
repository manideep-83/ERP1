import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../Context/CartContext';

// --- Local Placeholder Image ---
// NOTE: Ensure this path is correct for your project structure
const placeholderImage = require('../Products/apple.png'); 

/*
 * CartItem Component
 * Handles display, quantity update logic, and specific delete confirmation.
 */
const CartItem = ({ item, onUpdateQuantity, onDelete }) => {
  const price = item.price || 0;
  // Use a default quantity of 1 if the item somehow loses its quantity property
  const quantity = item.quantity || 1; 
  const discount = item.discount || 0;

  const finalPriceBeforeDiscount = price * quantity;
  const discountAmount = finalPriceBeforeDiscount * (discount / 100);
  const finalPriceAfterDiscount = finalPriceBeforeDiscount - discountAmount;

  // Logic for quantity change, including confirmation when going to zero
  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;

    if (newQuantity > 0) {
      // Normal increment or safe decrement
      onUpdateQuantity(item.id, newQuantity);
    } else if (newQuantity === 0) {
      // Trying to decrease quantity from 1 to 0 -> Show alert
      Alert.alert(
        'Remove Item',
        `Do you want to remove "${item.name}" from your cart?`,
        [
          // On Cancel, do nothing. Quantity remains 1 in the context.
          { text: 'Cancel', style: 'cancel' }, 
          // On Remove, call the delete function
          { text: 'Remove', style: 'destructive', onPress: () => onDelete(item.id) }
        ]
      );
    }
  };

  // Logic for explicit Delete button confirmation
  const handleDeleteConfirm = () => {
      Alert.alert(
          'Confirm Removal',
          `Are you sure you want to remove all units of "${item.name}" from your cart?`,
          [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Yes, Remove', style: 'destructive', onPress: () => onDelete(item.id) }
          ]
      );
  };

  // Improved image source logic
  let imageSource;
  if (typeof item.image === 'string' && item.image.startsWith('http')) {
    imageSource = { uri: item.image };
  } else if (item.image) {
    imageSource = item.image;
  } else {
    imageSource = placeholderImage;
  }

  return (
    <View style={styles.itemCard}>
      <Image 
        source={imageSource || placeholderImage} 
        style={styles.itemImage}
        onError={(e) => console.log(`Image load error for ${item.name}:`, e.nativeEvent.error)} 
      />

      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <View style={styles.itemPricing}>
          <Text style={styles.basePrice}>₹{price.toFixed(2)}</Text>
          {discount > 0 && <Text style={styles.discountTag}>{discount}% OFF</Text>}
        </View>
      </View>

      <View style={styles.itemControls}>
        <View style={styles.quantityControl}>
          <TouchableOpacity 
            style={[styles.quantityButton, quantity === 1 && styles.disabledButton]} 
            onPress={() => handleQuantityChange(-1)}
            disabled={quantity === 1} // Disable when quantity is 1
          >
            <Text style={[styles.controlText, quantity === 1 && styles.disabledText]}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(1)}>
            <Text style={styles.controlText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.totalPrice}>₹{finalPriceAfterDiscount.toFixed(2)}</Text>

        {/* Use the confirmation handler */}
        <TouchableOpacity style={styles.deleteButtonContainer} onPress={handleDeleteConfirm}>
          <Text style={styles.deleteButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/*
 * ShoppingCartScreen Component
 */
const ShoppingCartScreen = () => {
  const navigation = useNavigation();
  const { cartItems, addOrUpdateItem, deleteItem } = useContext(CartContext);

  const credit = { limit: 100000, outstanding: 25000, available: 75000 };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);
  const totalDiscount = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0) * ((item.discount || 0) / 100), 0);
  const total = subtotal - totalDiscount;

  const handleUpdateQuantity = (id, newQuantity) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      // Pass the new item object with the correct quantity to the context
      addOrUpdateItem({ ...item, quantity: newQuantity });
    }
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart Empty', 'Please add items to cart before placing order.');
      return;
    }
    Alert.alert('Order Placed', `Your order for ₹${total.toFixed(2)} has been placed!`, [
      { text: 'OK', onPress: () => navigation.navigate('Orders') }
    ]);
  };

  const handleContinueShopping = () => navigation.navigate('Products');

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.screenTitle}>Shopping Cart</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionCard}>
          {cartItems.length === 0 ? (
            <TouchableOpacity style={styles.emptyCartButton} onPress={handleContinueShopping}>
              <Text style={styles.emptyCartText}>Your cart is empty! 🛒 Tap to Shop</Text>
            </TouchableOpacity>
          ) : (
            cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onUpdateQuantity={handleUpdateQuantity} 
                onDelete={deleteItem}
              />
            ))
          )}
        </View>

        {cartItems.length > 0 && (
          <View style={styles.sectionCard}>
            <Text style={styles.summaryTitle}>Order Summary</Text>
            <View style={styles.summaryRow}><Text style={styles.summaryLabel}>Subtotal</Text><Text style={styles.summaryValue}>₹{subtotal.toFixed(2)}</Text></View>
            <View style={styles.summaryRow}><Text style={styles.summaryLabelDiscount}>Discount</Text><Text style={styles.summaryDiscountValue}>-₹{totalDiscount.toFixed(2)}</Text></View>
            <View style={styles.summaryTotalRow}><Text style={styles.summaryTotalLabel}>Total</Text><Text style={styles.summaryTotalValue}>₹{total.toFixed(2)}</Text></View>

            <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
              <Text style={styles.placeOrderButtonText}>Place Order (₹{total.toFixed(2)})</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <TouchableOpacity style={styles.continueShoppingButton} onPress={handleContinueShopping}>
          <Text style={styles.continueShoppingButtonText}>Continue Shopping</Text>
        </TouchableOpacity>

        <View style={styles.sectionCard}>
          <Text style={styles.summaryTitle}>Available Credit</Text>
          <View style={styles.summaryRow}><Text style={styles.summaryLabel}>Credit Limit</Text><Text style={styles.summaryValue}>₹{credit.limit.toLocaleString('en-IN', {minimumFractionDigits: 2})}</Text></View>
          <View style={styles.summaryRow}><Text style={styles.summaryLabelOutstanding}>Outstanding</Text><Text style={styles.summaryOutstandingValue}>₹{credit.outstanding.toLocaleString('en-IN', {minimumFractionDigits: 2})}</Text></View>
          <View style={styles.summaryRow}><Text style={styles.summaryLabelAvailable}>Available</Text><Text style={styles.summaryAvailableValue}>₹{credit.available.toLocaleString('en-IN', {minimumFractionDigits: 2})}</Text></View>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#F5F5F5', paddingTop: 10 },
  screenTitle: { fontSize: 28, fontWeight: '900', color: '#000', paddingHorizontal: 16, marginBottom: 10 },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 40 },
  sectionCard: { backgroundColor: 'white', borderRadius: 16, padding: 15, marginBottom: 20, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5 },

  // Cart Item
  itemCard: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  itemImage: { width: 60, height: 60, borderRadius: 8, marginRight: 10, backgroundColor: '#ccc' }, 
  itemDetails: { flex: 1, marginRight: 10 },
  itemName: { fontSize: 16, fontWeight: '600', color: '#333' },
  itemCategory: { fontSize: 12, color: '#888', marginBottom: 5 },
  itemPricing: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  basePrice: { fontSize: 14, fontWeight: 'bold', color: '#333', marginRight: 10 },
  discountTag: { fontSize: 12, fontWeight: 'bold', color: '#28a745', backgroundColor: '#e6ffe6', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  itemControls: { alignItems: 'flex-end', justifyContent: 'space-between', minHeight: 80 },
  quantityControl: { flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, overflow: 'hidden' },
  quantityButton: { backgroundColor: '#f9f9f9', paddingHorizontal: 10, paddingVertical: 5 },
  disabledButton: { backgroundColor: '#e0e0e0' }, 
  controlText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  disabledText: { color: '#888' }, 
  quantityText: { paddingHorizontal: 8, fontSize: 16, color: '#333' },
  totalPrice: { fontSize: 16, fontWeight: 'bold', color: '#333', marginVertical: 5 },
  deleteButtonContainer: { backgroundColor: '#f8d7da', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, marginTop: 5, alignItems: 'center', justifyContent: 'center' },
  deleteButtonText: { fontSize: 14, fontWeight: 'bold', color: '#dc3545' },

  // Summary
  summaryTitle: { fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 10 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 },
  summaryLabel: { fontSize: 14, color: '#555' },
  summaryLabelDiscount: { fontSize: 14, color: '#28a745' },
  summaryLabelOutstanding: { fontSize: 14, color: '#dc3545' },
  summaryLabelAvailable: { fontSize: 14, color: '#28a745' },
  summaryValue: { fontSize: 14, fontWeight: '500', color: '#333' },
  summaryDiscountValue: { fontSize: 14, fontWeight: '500', color: '#dc3545' },
  summaryTotalRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, marginTop: 5, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#eee' },
  summaryTotalLabel: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  summaryTotalValue: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  summaryOutstandingValue: { fontSize: 14, fontWeight: '500', color: '#dc3545' },
  summaryAvailableValue: { fontSize: 14, fontWeight: '500', color: '#28a745' },

  // Buttons and Empty State
  placeOrderButton: { backgroundColor: '#1f75bcff', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  placeOrderButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  continueShoppingButton: { backgroundColor: '#f0f0f0', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  continueShoppingButtonText: { color: '#333', fontWeight: 'bold', fontSize: 16 },
  emptyCartButton: { padding: 20, alignItems: 'center' },
  emptyCartText: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#555', fontWeight: '500' },
});

export default ShoppingCartScreen;
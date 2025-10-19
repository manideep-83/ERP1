import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, SafeAreaView, Alert } from 'react-native';
import { UserContext } from '../Context/UserContext';
import { CartContext } from '../Context/CartContext';

// --- Product Data ---
const productsData = [
  { id: '1', name: 'Apple', price: 250, unit: 'Kg', caseWeight: 25, image: { uri: 'data:image/jpeg;base64,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' } },
  { id: '2', name: 'Milk', price: 80, unit: 'L', caseWeight: 12, image: { uri: 'data:image/jpeg;base64,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' } },
  { id: '3', name: 'Bread', price: 50, unit: 'Loaf', caseWeight: 10, image: { uri: 'https://rootn-shade-b2-b.vercel.app/assets/bread-CsFbqXgG.jpeg' } },
];

/*
 * ProductCard Component
 * Fixed: Now correctly calculates total quantity (unit + case) and sends a single item object
 * to the CartContext's addOrUpdateItem function.
 */
const ProductCard = ({ item, loggedInUser }) => {
  const { cartItems, addOrUpdateItem } = useContext(CartContext);
  
  // Use local state to manage the quantities the user inputs
  const [unitQtyInput, setUnitQtyInput] = useState('');
  const [caseQtyInput, setCaseQtyInput] = useState('');

  // Find the current quantity of this item in the cart
  const currentCartItem = cartItems.find(i => i.id === item.id);
  
  // The cart logic now handles the addition/update
  // This function is called when the user blurs the input or confirms the quantity
  const handleAddToCart = () => {
    // 1. Calculate the final quantities to add (convert inputs to numbers, default to 0)
    const unitQuantity = Number(unitQtyInput || 0);
    const caseQuantity = loggedInUser === 'Business' ? Number(caseQtyInput || 0) : 0;
    
    // 2. Calculate the total equivalent unit quantity
    const totalUnitQuantity = unitQuantity + (caseQuantity * item.caseWeight);
    
    // Get the quantity currently in the cart (for showing the total)
    const currentQuantityInCart = currentCartItem ? currentCartItem.quantity : 0;

    // The new total quantity in the cart will be the existing + the new input
    const newTotalQuantity = totalUnitQuantity; // We are setting the final quantity in the cart to the input total

    if (newTotalQuantity <= 0) {
      // If the user clears the input or inputs 0, we can ignore the action or delete the item.
      // For this flow, we'll let the user explicitly remove from the cart screen.
      return; 
    }
    
    // 3. Create the final item object expected by CartContext
    const itemToUpdate = {
        ...item,
        // The crucial fix: Pass the combined total quantity for the item ID
        quantity: newTotalQuantity, 
        // Optional: Keep track of inputs for summary display, though not strictly needed for cart logic
        unitQty: unitQuantity,
        caseQty: caseQuantity,
    };

    // 4. Call the context function with the single, correctly structured item object
    addOrUpdateItem(itemToUpdate);
    
    // Clear inputs after adding to cart, mimicking a confirmed transaction
    setUnitQtyInput('');
    setCaseQtyInput('');
    
    // Show a quick success message
    Alert.alert('Added to Cart', `${item.name} total quantity updated to ${newTotalQuantity} ${item.unit}s.`);
  };

  const renderSummary = () => {
    const totalQuantity = currentCartItem ? currentCartItem.quantity : 0;
    
    if (totalQuantity === 0) return null;
    
    // Optional: If you want to show the breakdown in the summary, you need to track it,
    // but the main goal is to show the total quantity in cart.
    const unitPrice = item.price;
    const totalPrice = (totalQuantity * unitPrice).toFixed(2);
    
    return (
        <Text style={styles.summaryText}>
            Total in Cart: {totalQuantity} {item.unit}s (₹{totalPrice})
        </Text>
    );
  };
  
  // Helper to render the input or the 'Add' button
  const renderInputControl = (type) => {
    const isUnit = type === 'unit';
    const qtyState = isUnit ? unitQtyInput : caseQtyInput;
    const setQtyState = isUnit ? setUnitQtyInput : setCaseQtyInput;
    
    // Show the input field if a quantity has been entered OR if the user is focused
    const shouldShowInput = qtyState !== ''; 

    const labelText = isUnit ? item.unit : `Case (${item.caseWeight}${item.unit})`;

    return (
        <View style={styles.row}>
            <Text style={styles.label}>{labelText}:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={qtyState}
                onChangeText={(text) => setQtyState(text.replace(/[^0-9]/g, ''))} // Only allow digits
                placeholder="0"
                placeholderTextColor="#999"
                onBlur={handleAddToCart} // Commit changes on blur
            />
        </View>
    );
  };


  return (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₹{item.price} per {item.unit}</Text>

      {/* Unit Input */}
      {renderInputControl('unit')}

      {/* Case Input (Business Only) */}
      {loggedInUser === 'Business' && renderInputControl('case')}

      {/* Summary of what's currently in the cart */}
      {renderSummary()}
      
      {/* Central 'Update Cart' button for clarity, though input blur also works */}
       <TouchableOpacity style={styles.updateButton} onPress={handleAddToCart}>
           <Text style={styles.updateButtonText}>Update Cart</Text>
       </TouchableOpacity>
    </View>
  );
};

/*
 * ProductsScreen Component
 */
const ProductsScreen = () => {
  // Assuming UserContext provides a string like 'Business' or 'Retail'
  const { username } = useContext(UserContext); 

  // Fallback for user type if context is null/undefined
  const userType = username || 'Retail'; 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={productsData}
        renderItem={({ item }) => <ProductCard item={item} loggedInUser={userType} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.rowWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, marginLeft: 5, color: '#333' },
  rowWrapper: { justifyContent: 'space-between' },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    minWidth: 150,
    maxWidth: '48%',
    marginBottom: 10,
  },
  productImage: { width: '100%', height: 120, borderRadius: 8, backgroundColor: '#eee', marginBottom: 10 },
  productName: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  productPrice: { fontSize: 14, color: '#555', fontWeight: '500', marginBottom: 10, textAlign: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 6 },
  label: { fontSize: 14, color: '#333', flex: 1, marginRight: 10 },
  // Removed addButton and addText since we are using continuous input
  input: { 
    borderWidth: 1, 
    borderColor: '#1f75bc', 
    borderRadius: 8, 
    width: 70, 
    height: 38, 
    textAlign: 'center', 
    fontSize: 15, 
    color: '#000', 
    backgroundColor: '#fff', 
    paddingVertical: 5, 
    paddingHorizontal: 10 
  },
  updateButton: { 
    backgroundColor: '#1f75bc', 
    borderRadius: 8, 
    paddingVertical: 10, 
    marginTop: 10, 
    alignItems: 'center' 
  },
  updateButtonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 15 
  },
  summaryText: { fontSize: 13, color: '#008000', marginTop: 8, textAlign: 'center', fontStyle: 'italic', fontWeight: '600' },
});

export default ProductsScreen;
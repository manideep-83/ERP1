import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add new item or update existing item quantity
  // The item passed to this function MUST have the correct quantity property.
  const addOrUpdateItem = (newItem) => {
    setCartItems(prevItems => {
      const index = prevItems.findIndex(item => item.id === newItem.id);
      
      // Ensure newItem has a quantity property, defaulting to 1
      const itemWithQuantity = {
          ...newItem,
          quantity: newItem.quantity || 1, // Crucial: sets quantity to 1 if it's missing/null/0
      };

      if (index !== -1) {
        // Update existing item
        const updatedItems = [...prevItems];
        // Overwrite the old item with the new, updated object
        updatedItems[index] = itemWithQuantity; 
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, itemWithQuantity];
      }
    });
  };

  // Delete item from cart
  const deleteItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addOrUpdateItem, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};
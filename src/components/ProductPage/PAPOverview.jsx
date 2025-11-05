import { StyleSheet, View } from 'react-native';
import React from 'react';
import Overview from '../../ReusableComponents/Overview';
import { useRoute } from '@react-navigation/native';

const PAPOverview = () => {
  const route = useRoute();
  const { product } = route.params || {}; // Get selected product from navigation

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>No product data found.</Text>
      </View>
    );
  }

  // Map selected product data into label-value pairs for Overview component
  const rows = [
    { label: "Product Code", value: product.sku || "N/A" },
    { label: "Product Name", value: product.item_name || product.name || "N/A" },
    { label: "Distributor Product Code", value: product.item_id || "N/A" },
    { label: "Short Name", value: product.name || "N/A" },
    { label: "MRP", value: product.rate ? `₹${product.rate}` : "N/A" },
    { label: "Stock on Hold", value: product.stock_on_hand ?? "N/A" },
    { label: "Available Stock", value: product.available_stock ?? "N/A" },
    { label: "Warehouse", value: product.cf_warehouse_location || "N/A" },
    { label: "Created Time", value: product.created_time?.split("T")[0] || "N/A" },
    { label: "Last Modified", value: product.last_modified_time?.split("T")[0] || "N/A" },
  ];

  return (
    <View style={styles.container}>
      <Overview title="Product Overview" rows={rows} />
    </View>
  );
};

export default PAPOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});

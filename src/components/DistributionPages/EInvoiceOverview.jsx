import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Overview from "../../ReusableComponents/Overview";

const EInvoiceOverview = ({ route }) => {
  const { invoice } = route.params || {};

  if (!invoice) {
    return (
      <View style={{ padding: 20 }}>
        <Text>No Invoice Data Found</Text>
      </View>
    );
  }

  // -------- Invoice Summary --------
  const invoiceSummary = [
    { label: "Invoice No", value: invoice.invoice_number || "-" },
    { label: "Invoice Date", value: invoice.date || "-" },
    { label: "IRN Status", value: invoice.status || "-" },
    { label: "Invoice Type", value: invoice.type || "-" },
    { label: "Net Amount", value: `₹${invoice.total}` },
    { label: "Tax Amount", value: invoice.tax_total ? `₹${invoice.tax_total}` : "-" },
  ];

  // -------- Customer Details --------
  const cust = invoice;
  const billing = cust.billing_address || {};
  const shipping = cust.shipping_address || {};

  const customerDetails = [
    { label: "Customer Name", value: cust.customer_name || "-" },
    { label: "Customer Code", value: cust.customer_id || "-" },
    { label: "Customer Email", value: cust.email || "-" },
    { label: "Phone", value: cust.phone || "-" },
  ];

  const billingDetails = [
    { label: "Billing Address", value: billing.address || "-" },
    { label: "City", value: billing.city || "-" },
    { label: "State", value: billing.state || "-" },
    { label: "Pincode", value: billing.zipcode || "-" },
  ];

  const shippingDetails = [
    { label: "Shipping Address", value: shipping.address || "-" },
    { label: "City", value: shipping.city || "-" },
    { label: "State", value: shipping.state || "-" },
    { label: "Pincode", value: shipping.zipcode || "-" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Main Overview */}
      <Overview title="Invoice Overview" rows={invoiceSummary} />

      {/* Customer Details */}
      <View style={styles.card}>
        <Text style={styles.heading}>Customer Details</Text>
        {customerDetails.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>

      {/* Billing Address */}
      <View style={styles.card}>
        <Text style={styles.heading}>Billing Address</Text>
        {billingDetails.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>

      {/* Shipping Address */}
      <View style={styles.card}>
        <Text style={styles.heading}>Shipping Address</Text>
        {shippingDetails.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>

      {/* Line Items */}
      <View style={styles.card}>
        <Text style={styles.heading}>Invoice Line Items</Text>

        {(invoice.line_items || []).map((item, i) => (
          <View key={i} style={styles.itemRow}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQty}>Qty: {item.quantity}</Text>
            <Text style={styles.itemAmount}>₹{item.total}</Text>
          </View>
        ))}

        {(invoice.line_items || []).length === 0 && (
          <Text>No items found</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default EInvoiceOverview;

// ------------------- STYLES -------------------

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#F5F5F5",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    padding: 15,
    marginVertical: 10,
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  label: {
    fontSize: 14,
    color: "#444",
    flex: 1,
  },

  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111",
    flex: 1,
    textAlign: "right",
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.8,
    borderColor: "#ccc",
    paddingVertical: 8,
  },

  itemName: { width: "50%", fontWeight: "600" },
  itemQty: { width: "20%", textAlign: "center" },
  itemAmount: { width: "30%", textAlign: "right", fontWeight: "bold" },
});

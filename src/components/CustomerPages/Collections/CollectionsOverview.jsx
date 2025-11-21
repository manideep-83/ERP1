import React from "react";
import { View } from "react-native";
import Overview from "../../../ReusableComponents/Overview";

const CollectionsOverview = ({ route }) => {
  const { item } = route.params; // the selected invoice object

  const rows = [
    { label: "Customer Name", value: item.customer_name || "-" },
    { label: "Invoice Number", value: item.invoice_number || "-" },
    { label: "Invoice Date", value: item.invoice_date || "-" },
    { label: "Due Date", value: item.due_date || "-" },
    { label: "Total Amount", value: item.total_amount?.toString() || "-" },
    { label: "Due Amount", value: item.due_amount?.toString() || "-" },
    { label: "Status", value: item.status || "-" },
    { label: "Days Overdue", value: item.days_overdue?.toString() || "-" },
  ];

  return (
    <View>
      <Overview title="Collection Overview" rows={rows} />
    </View>
  );
};

export default CollectionsOverview;

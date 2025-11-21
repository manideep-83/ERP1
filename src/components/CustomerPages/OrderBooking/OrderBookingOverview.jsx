import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from "react-native";
import React from "react";

const OrderBookingOverview = ({ route }) => {

  const { item } = route.params;   // 👈 RECEIVE SELECTED SALES ORDER

  if (!item) {
    return (
      <View>
        <Text>No Order Data</Text>
      </View>
    );
  }

  const row = [
    { label: "Order No", value: item.salesorder_number || "-" },
    { label: "Order Date", value: item.date || "-" },
    { label: "Shipment Date", value: item.shipment_date || "-" },
    { label: "Status", value: item.status || "-" },
    { label: "Order Total", value: item.total ? `₹${item.total}` : "-" },
  
    { label: "Customer Name", value: item.customer_name || "-" },
    { label: "Customer Code", value: item.customer_id || "-" },
    { label: "Company Name", value: item.company_name || "-" },
  
    { label: "Salesperson", value: item.salesperson_name || "-" },
    { label: "Sales Channel", value: item.sales_channel_formatted || "-" },
  
    { label: "Order Reason", value: item.current_sub_status || "-" }
  ];
  

  return (
    <View>
      <Overview title="Overview" rows={row} />
    </View>
  );
};

export default OrderBookingOverview;

import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const OrderBookingOverview = () => {
  const row = [
    { label: "Order No", value: "" },
    { label: "Order Date", value: "" },
    { label: "Route", value: "" },
    { label: "Customer Code", value: "" },
    { label: "Retailer Name", value: "" },
    { label: "Status", value: "" },
    { label: "Order Type", value: "" },
    { label: "Order Reason", value: "" },

  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default OrderBookingOverview
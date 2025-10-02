import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const OrderBooking = () => {
  const row = [
    { label: "Order No", value: "" },
    {label: "Order Date", value: "" },
    { label: "Route", value: "" },
    { label: "Customer Code", value: "" },
   
  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default OrderBooking
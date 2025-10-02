import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const BillingProductOverview = () => {
  const row = [
   {
    "label": "Product Code",
    "value": ""
  },
  {
    "label": "Product Name",
    "value": ""
  },
  {
    "label": "Batch",
    "value": ""
  },
  {
    "label": "Order Qty",
    "value": ""
  },
  {
    "label": "Order Qty (BaseUOI)",
    "value": ""
  },
  {
    "label": "Free Qty",
    "value": ""
  },
  {
    "label": "MRP",
    "value": ""
  },
  {
    "label": "Sell Rate",
    "value": ""
  },
  {
    "label": "Gross Amt",
    "value": ""
  },
  {
    "label": "Line Disc. Amt",
    "value": ""
  },
  {
    "label": "PreTax Disc",
    "value": ""
  },
  {
    "label": "Cash Disc",
    "value": ""
  }
    


  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default BillingProductOverview
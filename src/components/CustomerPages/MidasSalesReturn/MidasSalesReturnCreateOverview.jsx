import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const MidasSalesReturnCreateOverview = () => {
  const row = [
  {
    "label": "Distr Prod Code",
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
    "label": "Saleable Qty",
    "value": ""
  },
  {
    "label": "Unsaleable Qty",
    "value": ""
  },
  {
    "label": "Offer Qty",
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
    "label": "Gross Amount",
    "value": ""
  },
  {
    "label": "Tax Amt",
    "value": ""
  },
  {
    "label": "Net Amt",
    "value": ""
  },
  {
    "label": "Line disc.amt",
    "value": ""
  }
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default MidasSalesReturnCreateOverview
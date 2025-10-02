import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const MidasSalesReturnOverview = () => {
  const row = [
  {
    "label": "Distributor",
    "value": ""
  },
  {
    "label": "Invoice Date",
    "value": ""
  },
  {
    "label": "Retailer Code",
    "value": ""
  },
  {
    "label": "Retailer Name",
    "value": ""
  },
  {
    "label": "Invoice No",
    "value": ""
  },
  {
    "label": "Return Status",
    "value": ""
  },
  {
    "label": "Status",
    "value": ""
  },
  
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default MidasSalesReturnOverview
import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const CollectionCreateOverview = () => {
  const row = [
  {
    "label": "Customer Code",
    "value": ""
  },
  {
    "label": "Retailer Name",
    "value": ""
  },
  {
    "label": "Collection Mode",
    "value": ""
  },
  {
    "label": "Total TDS Amount",
    "value": ""
  },
  {
    "label": "Collected Amount",
    "value": ""
  },
  {
    "label": "Adjusted on Account Amount",
    "value": ""
  },
  {
    "label": "Adjusted Cr/Dr Note Amount",
    "value": ""
  },
  {
    "label": "Adjusted Bill Amount",
    "value": ""
  },
  {
    "label": "Collection Discount Amt",
    "value": ""
  }
];
        
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default CollectionCreateOverview
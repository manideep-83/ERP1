import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const CollectionsOverview = () => {
  const row = [
  {
    "label": "Distributor Branch",
    "value": ""
  },
  {
    "label": "Retailer Name",
    "value": ""
  },
  {
    "label": "Reference No",
    "value": ""
  },
  {
    "label": "Collection Date",
    "value": ""
  },
  {
    "label": "Collection Mode",
    "value": ""
  },
  {
    "label": "Collected Amount",
    "value": ""
  }
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default CollectionsOverview
import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const CollectionDiscountOverview = () => {
  const row = [
  {
    "label": "Reference No.",
    "value": ""
  },
  {
    "label": "Customer Type",
    "value": ""
  },
  
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default CollectionDiscountOverview
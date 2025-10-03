import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const BatchTransferOverview = () => {
  const row = [
  {
    "label": "reference Number",
    "value": ""
  },
  {
    "label": "Doc Date",
    "value": ""
  },
  {
    "label": "Company Product Code",
    "value": ""
  },
    {
    "label": "Distr Product Code",
    "value": ""
  },
     {
    "label": "From Batch Code",
    "value": ""
  },
  
     {
    "label": "To Batch Code",
    "value": ""
  },
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default BatchTransferOverview;
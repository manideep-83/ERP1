import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const CreateCollectionDiscountOverview = () => {
  const row = [
  {
    "label": "Reference No.",
    "value": ""
  },
  {
    "label": "Customer Type",
    "value": ""
  },
  {
    "label": "Retailer",
    "value": ""
  },
  {
    "label": "Valid From",
    "value": ""
  },
  {
    "label": "Valid To",
    "value": ""
  },
  {
    "label": "From No.Of Days",
    "value": ""
  },
  {
    "label": "To No.Of Days",
    "value": ""
  },
  {
    "label": "Disc%",
    "value": ""
  },
  {
    "label": "Flat Amount",
    "value": ""
  },
  {
    "label": "Status",
    "value": ""
  }
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default CreateCollectionDiscountOverview
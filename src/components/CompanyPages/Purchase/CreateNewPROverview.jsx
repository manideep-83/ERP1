import { View, Text } from 'react-native'
import React from 'react'
import Overview from "../../../ReusableComponents/Overview";

const CreateNewPROverview = () => {
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
    "label": "CS/PCS Expiry Date",
    "value": ""
  },
  {
    "label": "UOM",
    "value": ""
  },
  {
    "label": "Invoice Qty",
    "value": ""
  },
  {
    "label": "Receive Qty",
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
    "label": "Purchase Rate",
    "value": ""
  },
  {
    "label": "Gross",
    "value": ""
  },
  {
    "label": "Tax Amount",
    "value": ""
  },
  {
    "label": "Net Amount",
    "value": ""
  }
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default CreateNewPROverview;
import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const PurchaseOrderOverview = () => {
  const row = [
  {
    "label": "Branch Code",
    "value": ""
  },
  {
    "label": "Branch Name",
    "value": ""
  },
  {
    "label": "Company PO No",
    "value": ""
  },
  {
    "label": "PO Reference No.",
    "value": ""
  },
  {
    "label": "PO Date",
    "value": ""
  },
  {
    "label": "Company PO Date",
    "value": ""
  },
  {
    "label": "Tentative Order Value",
    "value": ""
  },
  {
    "label": "Date",
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

export default PurchaseOrderOverview;
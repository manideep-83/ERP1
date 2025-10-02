import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const SalesReturnOverview = () => {
  const row = [
  {
    "label": "Sl. No",
    "value": ""
  },
  {
    "label": "Branch Code",
    "value": ""
  },
  {
    "label": "Reference No",
    "value": ""
  },
  {
    "label": "Date",
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
    "label": "SRN Net Amount",
    "value": ""
  },
  {
    "label": "Return Type",
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

export default SalesReturnOverview
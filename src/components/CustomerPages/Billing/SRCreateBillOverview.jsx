import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const SRCreateBillOverview = () => {
  const row = [
  {
    "label": "Bill No",
    "value": ""
  },
  {
    "label": "Bill Date",
    "value": ""
  },
  {
    "label": "Bill Net Amount",
    "value": ""
  },
  {
    "label": "Reason",
    "value": ""
  }
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default SRCreateBillOverview
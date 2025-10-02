import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const BankMasterOverview = () => {
  const row = [
  {
    "label": "Sl. No",
    "value": ""
  },
  {
    "label": "Bank Name",
    "value": ""
  },
  {
    "label": "Branch Details",
    "value": ""
  },
  
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default BankMasterOverview;
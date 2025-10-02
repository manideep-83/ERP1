import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const SupplierOverview = () => {
  const row = [
  {
    "label": "Branch Code",
    "value": ""
  },
  {
    "label": "Company Name",
    "value": ""
  },
  {
    "label": "Supplier Name",
    "value": ""
  },
   {
    "label": "Geo Mapping",
    "value": ""
  }
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default SupplierOverview;
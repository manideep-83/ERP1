import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'
import Retailer from "./Retailer";

const RetailerOverview = () => {
  const row =[
  {
    "label": "Distributor Branch",
    "value": ""
  },
  {
    "label": "Type",
    "value": ""
  },
  {
    "label": "Distr Retailer code",
    "value": ""
  },
  {
    "label": "Company Retailer code",
    "value": ""
  },
  {
    "label": "Retailer Name",
    "value": ""
  },
  {
    "label": "Phone",
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

export default RetailerOverview
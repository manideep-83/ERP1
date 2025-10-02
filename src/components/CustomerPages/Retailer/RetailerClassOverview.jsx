import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const RetailerClassOverview = () => {
  const row = [
    { label: "Retailer Group Name", value: "" },
    { label: "Retailer Class Code", value: "" },
    { label: "Retailer Class Name", value: "" },
    { label: "Turnover (Amount)", value: "" },

  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default RetailerClassOverview
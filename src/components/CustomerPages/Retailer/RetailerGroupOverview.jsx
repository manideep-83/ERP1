import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const RetailerGroupOverview = () => {
  const row = [
    { label: "Retailer Channel Name", value: "" },
    { label: "Retailer Group Code", value: "" },
    { label: "Retailer Group Name", value: "" },

  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default RetailerGroupOverview
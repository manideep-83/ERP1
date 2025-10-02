import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const RetailerChannelOverview = () => {
  const row = [
    { label: "Channel code", value: "" },
    { label: "Channel Name", value: "" },
   
  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default RetailerChannelOverview
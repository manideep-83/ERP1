import Overview from "../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const Overview2 = () => {
  const row = [
    { label: "State", value: "" },
    { label: "Tax Type", value: "" },
    { label: "Tax Code", value: "" },
    { label: "Effective Date", value: "" },
    { label: "Action", value: "" }
  ];
    return (
    <View>
      <Text>ProductOverview</Text>
      <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default Overview2
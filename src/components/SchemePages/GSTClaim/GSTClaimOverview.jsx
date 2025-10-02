import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const GSTClaimOverview = () => {
  const row = [
    { label: "Sanction No", value: "" },
    {label: "Output Tax Through Invoice", value: "" },
    { label: "Output Tax Sales Return", value: "" },
    { label: "Input Tax Through Invoice", value: "" },
    { label: "Input Tax Credit Notes", value: "" },
    { label: "Net Output Tax", value: "" },
    { label: "Net Input Tax", value: "" },
    { label: "Previous month Carry Forward Amt", value: "" },

  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default GSTClaimOverview
import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const SchemeOverview = () => {
  const row = [
    { label: "Scheme Code", value: "" },
    { label: "Company Scheme Code", value: "" },
    { label: "Scheme Name", value: "" },
    { label: "Scheme Base", value: "" },
    { label: "Payout Type", value: "" },
    { label: "Payout Type", value: "" },
    { label: "Scheme Start Date", value: "" },
    { label: "Scheme End Date", value: "" },
    { label: "Status", value: "" },

  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default SchemeOverview
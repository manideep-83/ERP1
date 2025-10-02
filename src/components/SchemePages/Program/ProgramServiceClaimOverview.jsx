import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'
import ProgramServiceClaim from "./ProgramServiceClaim";

const ProgramServiceClaimOverview = () => {
  const row = [
    { label: "Claim Code", value: "" },
    {label: "Claim Description", value: "" },
    { label: "Claim Date", value: "" },
    { label: "Claim Year", value: "" },
    { label: "Claim Month", value: "" },
    { label: "Claim Amount", value: "" },
    { label: "Remarks", value: "" },
    { label: "Status", value: "" },

  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default ProgramServiceClaimOverview
import Overview from '../../../ReusableComponents/Overview' 
import { View, Text } from 'react-native'
import React from 'react'

const ClaimOverview = () => {
  const row = [
    { label: "Invoice No", value: "" },
    {label: "Retailer Name", value: "" },
    { label: "Salesman", value: "" },
    { label: "Invoice Date", value: "" },
    { label: "Gross Amt", value: "" },
    { label: "Discount", value: "" },
    { label: "Scheme amt", value: "" },
    { label: "Tax amt", value: "" },
    { label: "Billing amt", value: "" },
    { label: "Collection status", value: "" },
    


  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default ClaimOverview
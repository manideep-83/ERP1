import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const CustomerCreditDebitNoteOverview = () => {
  const row = [
    { label: "Branch Code", value: "" },
    {label: "Reference No", value: "" },
    { label: "Date", value: "" },
    { label: "Customer Code", value: "" },
    { label: "Retailer Name", value: "" },
    { label: "Amount", value: "" },
    { label: "Status", value: "" },
    { label: "Balance Amount", value: "" },

  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default CustomerCreditDebitNoteOverview
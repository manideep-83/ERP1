import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const CompanyCreditDebitNoteScreenOverview = () => {
  const row = [
  {
    "label": "Branch Code",
    "value": ""
  },
  {
    "label": "Balance Amount",
    "value": ""
  },
  {
    "label": "Settled Monthly Status",
    "value": ""
  },
   {
    "label": "Reference No",
    "value": ""
  },
   {
    "label": "Supplier Name",
    "value": ""
  },
   {
    "label": "Company",
    "value": ""
  },
  
   {
    "label": "Amount",
    "value": ""
  },
   {
    "label": "Date",
    "value": ""
  },
   {
    "label": "Status",
    "value": ""
  },
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default CompanyCreditDebitNoteScreenOverview;
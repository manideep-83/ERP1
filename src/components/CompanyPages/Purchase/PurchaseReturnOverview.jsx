import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'
import PurchaseReturn from "./PurchaseReturn";

const PurchaseReturnOverview = () => {
  const row = [
  {
    "label": "Branch Code",
    "value": ""
  },
  {
    "label": "Branch Name",
    "value": ""
  },
  {
    "label": "GRN Reference No.",
    "value": ""
  },
   {
    "label": "PR Reference No.",
    "value": ""
  },
   {
    "label": "Company Inv No",
    "value": ""
  },
   {
    "label": "Purchase Return Date",
    "value": ""
  },
   {
    "label": "Supplier Return Date",
    "value": ""
  },
   {
    "label": "Supplier Name",
    "value": ""
  },
  
 {
    "label": "Return Amount",
    "value": ""
  },
  {
    "label": "Approval Status",
    "value": ""
  }
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default PurchaseReturnOverview;
import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const StockAdjustmentOverview = () => {
  const row = [
  {
    "label": "Reference Number",
    "value": ""
  },
  {
    "label": "Doc Date",
    "value": ""
  },
  {
    "label": "Godown",
    "value": ""
  },
    {
    "label": "Stock Status",
    "value": ""
  },
     {
    "label": "Transaction Type",
    "value": ""
  },
       {
    "label": "Approval Status",
    "value": ""
  },
         {
    "label": "Rejected Reason",
    "value": ""
  },
  
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default StockAdjustmentOverview;
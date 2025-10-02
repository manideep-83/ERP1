import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const CreateSKUOverview = () => {
  const row = [
   
  {
    "label": "SKU Code",
    "value": ""
  },
  {
    "label": "SKU Name",
    "value": ""
  },
  {
    "label": "MRP",
    "value": ""
  },
  {
    "label": "Batch Code",
    "value": ""
  },
  {
    "label": "Category",
    "value": ""
  },
  {
    "label": "Total Qty",
    "value": ""
  },
  {
    "label": "Expiry",
    "value": ""
  },
  {
    "label": "Pin Hole/Print Smear",
    "value": ""
  },
  {
    "label": "Bottle Damage",
    "value": ""
  },
  {
    "label": "MRP Missing",
    "value": ""
  },
  {
    "label": "Others",
    "value": ""
  },
  {
    "label": "Consumer complain",
    "value": ""
  },
  {
    "label": "Market Recall",
    "value": ""
  },
  {
    "label": "Rejected",
    "value": ""
  },
  {
    "label": "Total Approval Qty",
    "value": ""
  },
  {
    "label": "Message",
    "value": ""
  }


  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default CreateSKUOverview
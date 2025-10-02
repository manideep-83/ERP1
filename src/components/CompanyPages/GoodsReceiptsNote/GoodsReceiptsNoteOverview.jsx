import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const GoodsReceiptsNoteOverview = () => {
  const row = [
  {
    "label": "Branch Code",
    "value": ""
  },
  {
    "label": "GNT Reference No",
    "value": ""
  },
  {
    "label": "Company Invoice No",
    "value": ""
  },
  {
    "label": "GRN Date",
    "value": ""
  },
  {
    "label": "Supplier Name",
    "value": ""
  },
  {
    "label": "Company Name",
    "value": ""
  },
  {
    "label": "GRN Net Amount",
    "value": ""
  },
  {
    "label": "Status",
    "value": ""
  }
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default GoodsReceiptsNoteOverview;
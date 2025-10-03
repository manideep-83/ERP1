import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const GodownOverview = () => {
  const row = [
  {
    "label": "Code",
    "value": ""
  },
  {
    "label": "Distributor Name",
    "value": ""
  },
  {
    "label": "Godown Name",
    "value": ""
  },
    {
    "label": "Is Default",
    "value": ""
  },
     {
    "label": "Is Salesman Godown",
    "value": ""
  },
  
];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default GodownOverview;
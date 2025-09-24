import Overview from "../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'

const ProductOverview = () => {
  const row = [
    { label: "Product Code", value: "" },
    { label: "Product Name", value: "" },
    { label: "Distributor Product Code", value: "" },
    { label: "Short", value: "" },
    { label: "MRP", value: "" },
    { label: "Stock On Hold", value: "" }
  ];
    return (
    <View>
      <Text>ProductOverview</Text>
      <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default ProductOverview
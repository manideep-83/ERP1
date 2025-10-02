import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const PAPOverview = () => {
  const row = [
      { label: "Procut Code", value: "" },
      { label: "Product Name", value: "" },
    { label: "Distributor Product Code", value: "" },
    { label: "Short Name", value: "" },
    { label: "MRP", value: "" },
    { label: "Stock on hold", value: "" }
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default PAPOverview

const styles = StyleSheet.create({})
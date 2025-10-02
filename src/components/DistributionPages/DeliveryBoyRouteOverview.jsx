import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const DeliveryBoyRouteOverview = () => {
  const row = [
    { label: "Branch Code", value: "" },
    { label: "Delivery Boy Name", value: "" },
    { label: "Route code", value: "" },
    { label: "Route Name", value: "" }
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default DeliveryBoyRouteOverview

const styles = StyleSheet.create({})
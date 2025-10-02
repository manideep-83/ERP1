import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const VehicleAOverview = () => {
  const row = [
    { label: "Reference No", value: "" },
    { label: "Vehicle Allocation", value: "" },
    { label: "Delivery Boy Name", value: "" },
    { label: "Vehicle Number", value: "" },
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default VehicleAOverview

const styles = StyleSheet.create({})
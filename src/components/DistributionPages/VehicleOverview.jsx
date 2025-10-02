import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const VehicleOverview = () => {
  const row = [
    { label: "Code", value: "" },
    { label: "Distributor Branch", value: "" },
    { label: "Transporter Name", value: "" },
    { label: "Vehicle Type", value: "" },
    { label: "Register No", value: "" },
    { label: "Capacity", value: "" },
    { label: "Default Vehicle", value: "" },
    { label: "Status", value: "" },
    // { label: "Net Amount", value: "" }
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default VehicleOverview

const styles = StyleSheet.create({})
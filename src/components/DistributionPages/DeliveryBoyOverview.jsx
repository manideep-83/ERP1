import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const DeliveryBoyOverview = () => {
  const row = [
    { label: "Branch Code", value: "" },
    { label: "Delivery Boy Code", value: "" },
    { label: "Delivery Boy Name", value: "" },
    { label: "Phone Number", value: "" },
    
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default DeliveryBoyOverview

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const CustomerShippingAdressOverview = () => {
  const row = [
    { label: "Branch Code", value: "" },
    { label: "Reatiler Code", value: "" },
    { label: "Retailer Name", value: "" },
    { label: "Shipping Address", value: "" },
    { label: "is Default", value: "" }
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default CustomerShippingAdressOverview

const styles = StyleSheet.create({})
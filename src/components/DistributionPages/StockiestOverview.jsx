import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const StockiestOverview = () => {
  const row = [
    { label: "Reference Number", value: "" },
    { label: "Salesman", value: "" },
    { label: "Sub stockiest Route", value: "" },
    { label: "Sub Stockiest", value: "" },
    { label: "From Date", value: "" },
    {label:"To Date", value:""}
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default StockiestOverview

const styles = StyleSheet.create({})
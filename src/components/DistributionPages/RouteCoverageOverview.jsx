import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const RouteCoverageOverview = () => {
  const row = [
    { label: "Branch Name", value: "" },
    { label: "Salesman Name", value: "" },
    { label: "Date of visit", value: "" },
    { label: "Day of Visit", value: "" },
    { label: "Route Name", value: "" },
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default RouteCoverageOverview

const styles = StyleSheet.create({})
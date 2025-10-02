import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const RouttOverview = () => {
  const row = [
    { label: "Branch Code", value: "" },
    { label: "Route Type", value: "" },
    { label: "Route Code", value: "" },
    { label: "Route Name", value: "" },
    { label: "Route Gtm Type", value: "" },
    { label: "Is Active", value: "" },
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default RouttOverview

const styles = StyleSheet.create({})
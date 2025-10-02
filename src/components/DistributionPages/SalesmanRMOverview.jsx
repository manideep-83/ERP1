import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const SalesmanRMOverview = () => {
  const row = [
    { label: "Branch code", value: "" },
    { label: "Salesman code", value: "" },
    { label: "Salesman Name", value: "" },
    { label: "Route Code", value: "" },
    { label: "Route Name", value: "" },
   
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default SalesmanRMOverview

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const SalesmanOverview = () => {
  const row = [
    { label: "Branch code", value: "" },
    { label: "Salesman code", value: "" },
    { label: "Salesman Name", value: "" },
    { label: "Salesman ID", value: "" },
    { label: "Salesman Position Code", value: "" },
    { label: "Salesman Type", value: "" },
    { label: "Phone Number", value: "" },
    { label: "Is Active", value: "" }
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default SalesmanOverview

const styles = StyleSheet.create({})
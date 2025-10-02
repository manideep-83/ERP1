import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const ETLOverview = () => {
  const row = [
      { label: "Process Name", value: "" },
    { label: "File Name", value: "" },
    { label: "Start Date", value: "" },
    { label: "End Date", value: "" },
    { label: "status", value: "" },
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default ETLOverview

const styles = StyleSheet.create({})
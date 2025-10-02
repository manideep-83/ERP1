import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const GSTOverview = () => {
  const row = [
      { label: "State", value: "" },
    { label: "Tax Type", value: "" },
    { label: "Tax code", value: "" },
    { label: "Effective Date", value: "" },
    { label: "Action", value: "" },
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default GSTOverview

const styles = StyleSheet.create({})
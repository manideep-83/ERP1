import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const JCOverview = () => {
  const row = [
    { label: "Company", value: "" },
    { label: "Year", value: "" },
    { label: "Start Date", value: "" },
    { label: "End Date", value: "" },
    { label: "Months", value: "" },
    {label:"Weeks", value:""},
    {label:"Actions", value:""}
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default JCOverview

const styles = StyleSheet.create({})
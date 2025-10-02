import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const CreateScreenOverview = () => {
  const row = [
    { label: "Screen Name", value: "" },
    { label: "Create", value: "" },
    { label: "View", value: "" },
    { label: "Edit", value: "" },
    { label: "Delete", value: "" },
    {label:"Select All" , value:""}
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default CreateScreenOverview

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const CreateRCSOverview = () => {
  const row = [
    { label: "Date of visit", value: "" },
    { label: "Day of visit", value: "" },
    { label: "Route Name", value: "" },
    
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default CreateRCSOverview

const styles = StyleSheet.create({})
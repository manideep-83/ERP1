import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const CreateHolidayOverview = () => {
  const row = [
      { label: "Company", value: "" },
    { label: "Year", value: "" },
    { label: "Holiday Date", value: "" },
    { label: "Holiday", value: "" },
    // { label: "status", value: "" },
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default CreateHolidayOverview

const styles = StyleSheet.create({})
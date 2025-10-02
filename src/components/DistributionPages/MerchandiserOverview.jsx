import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const MerchandiserOverview = () => {
  const row = [
    { label: "Branch Code", value: "" },
    { label: "Salesman Code", value: "" },
    { label: "Salesman Name", value: "" },
    { label: "Phone Number", value: "" },
    { label: "IsActive", value: "" },
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default MerchandiserOverview

const styles = StyleSheet.create({})
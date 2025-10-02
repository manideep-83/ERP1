import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const MerchandiserRouteOverview = () => {
  const row = [
    { label: "Branch Code", value: "" },
    { label: "Salesman Code", value: "" },
    { label: "Salesman Name", value: "" },
    { label: "Route Name", value: "" },
    { label: "Route Code", value: "" },
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default MerchandiserRouteOverview

const styles = StyleSheet.create({})
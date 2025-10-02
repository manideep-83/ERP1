import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const UserGroupOverview = () => {
  const row = [
    
    { label: "User Group Code", value: "" },
    { label: "User Group Name", value: "" },
    
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default UserGroupOverview

const styles = StyleSheet.create({})
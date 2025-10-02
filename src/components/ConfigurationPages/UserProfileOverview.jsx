import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const UserProfileOverview = () => {
  const row = [
    { label: "Usergroup Name", value: "" },
    { label: "User Name", value: "" },
    { label: "User Login Code", value: "" },
    { label: "Designation", value: "" },
    // { label: "IsActive", value: "" },
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default UserProfileOverview

const styles = StyleSheet.create({})
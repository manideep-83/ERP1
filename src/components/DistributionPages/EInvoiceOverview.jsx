import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Overview from '../../ReusableComponents/Overview'
const EInvoiceOverview = () => {
  const row = [
    { label: "Invoice No", value: "" },
    { label: "Invoice Date", value: "" },
    { label: "IRN Status", value: "" },
    { label: "Invoice Type", value: "" },
    { label: "Customer Name", value: "" },
    { label: "Customer GSTIN", value: "" },
    { label: "Taxable Amount", value: "" },
    { label: "Tax Amount", value: "" },
    { label: "Net Amount", value: "" }
  ];
    return (
    <View>
       <Overview title="OverView" rows={row}/>
    </View>
  )
}

export default EInvoiceOverview

const styles = StyleSheet.create({})
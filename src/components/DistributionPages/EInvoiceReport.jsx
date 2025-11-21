import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import AppTable from '../../ReusableComponents/AppTable'
import { useNavigation } from "@react-navigation/native";
import ERPContext from "../../Context/ERPContext";
const EInvoiceReport = () => {
  const { EInvoiceDB, EInvoicee, loading } = useContext(ERPContext);

    useEffect(() => {
      EInvoiceDB();
      }, []);
  const navigation=useNavigation()
   const change=(name)=>{
      // console.error("pressed",id);
       return navigation.navigate(name);
    }
    const columns = [
      { header: 'Invoice No', key: 'invoice_number', flex: 2 },
      { header: 'IRN Status', key: 'status', flex: 2 },
      { header: 'Invoice Type', key: 'invoice_type', flex: 2 },
      { header: 'Amount', key: 'amount', flex: 2 },
    
      { 
        header: 'Action', 
        key: 'action', 
        flex: 1,
        renderCell: (item) => (
          <TouchableOpacity onPress={() => navigation.navigate("EInvoiceOverview", { invoice: item })}>
            <Text style={{ color: "blue" }}>Show</Text>
          </TouchableOpacity>
        )
      }
    ];
    

const data = [
  { id: 1, name: 'Product A' ,date:'12-08-2023'},
];
  const [transactionType, setTransactionType] = useState("Sales");

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>E-Invoice Report</Text>
        <TouchableOpacity style={styles.createBtn} onPress={() =>{change("CreateEI")}}>
          <Text style={styles.createBtnText}>+ Create New</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        <Text style={[styles.tab, styles.activeTab]}>E-Invoice</Text>
        <Text style={styles.tab}>E-Invoice Upload</Text>
      </View>

      {/* Status Summary */}
      <View style={styles.statusRow}>
        {["All Document", "IRN Generated", "IRN Failed", "IRN Not Generated", "IRN Cancelled"].map((item, i) => (
          <View key={i} style={styles.statusBox}>
            <Text style={styles.statusNum}>0</Text>
            <Text style={styles.statusLabel}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Filters */}
      <View style={styles.filterBox}>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <LabeledUnderlineInput label="From Date" placeholder="08/09/2025" />
          </View>
          <View style={styles.inputWrap}>
            <LabeledUnderlineInput label="To Date" placeholder="08/09/2025" />
          </View>
        </View>
        <View style={styles.row}>
        <View style={styles.inputWrap}>
           <LabeledUnderlineInput label="Retailer" placeholder="Retailer" />
        </View>
        <View style={styles.inputWrap}>
          <LabeledUnderlineInput label="Bill No" placeholder="Bill No" />
        </View>
        </View>
        <View style={styles.row}>
            <View style={styles.inputWrap}>
            <LabeledUnderlineInput label="Customer" placeholder="Registered" />
            </View>
        <View style={styles.inputWrap}>
          <Text style={styles.label}>Transaction Type</Text>
          <View style={styles.radioRow}>
            <RadioButton
              value="Sales"
              status={transactionType === "Sales" ? "checked" : "unchecked"}
              onPress={() => setTransactionType("Sales")}
            />
            <Text>Sales</Text>
            <RadioButton
              value="SalesReturn"
              status={transactionType === "SalesReturn" ? "checked" : "unchecked"}
              onPress={() => setTransactionType("SalesReturn")}
            />
            <Text>Sales Return</Text>
          </View>
        </View>
        </View>

        <View style={styles.inputWrap}>
          <LabeledUnderlineInput label="Invoice Status" placeholder="Pending" />
        </View>

        {/* Buttons */}
        {/* <View style={styles.row}>
          <TouchableOpacity style={styles.loadBtn}>
            <Text style={styles.btnText}>Load details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetBtn}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
        </View>
         */}
         <View style={styles.Brow}>
                 <TouchableOpacity style={styles.Buttons}>
                   <Text style={styles.buttonText}>Load details</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.Buttons}>
                   <Text style={styles.buttonText}> Reset</Text>
                 </TouchableOpacity>
        </View>
      </View>

      {/* Table */}
       <AppTable 
        columns={columns} 
        data={EInvoicee} 
        message={loading ? 'Loading...' : `Total Records: ${EInvoicee.length}`}
      />

      {/* Generate Button */}
      <TouchableOpacity style={styles.generateBtn}>
        <Text style={styles.generateBtnText}>Generate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const LabeledUnderlineInput = ({ label=' ', value = '', placeholder = '', editable = true, onChangeText = () => {} }) => (
  <View style={styles.field}>
  <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      placeholder={placeholder}
      editable={editable}
      onChangeText={onChangeText}
      style={[styles.underlineInput]}
    />
  </View>
);
const styles = StyleSheet.create({
  container: {  backgroundColor: "#fff", padding: 10 },

  // Header
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  header: { fontSize: 20, fontWeight: "700", color: "#1E3A8A" },
  createBtn: { backgroundColor: "#1E3A8A", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
  createBtnText: { color: "#fff", fontWeight: "600" },

  // Tabs
  tabRow: { flexDirection: "row", marginTop: 10, borderBottomWidth: 1, borderColor: "#ddd" },
  tab: { flex: 1, textAlign: "center", paddingVertical: 8, fontWeight: "500", color: "#555" },
  activeTab: { color: "#1E64CC", borderBottomWidth: 3, borderColor: "#1E64CC" },

  // Status row
  statusRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 15 },
  statusBox: { flex: 1, alignItems: "center" },
  statusNum: { fontSize: 16, fontWeight: "700" },
  statusLabel: { fontSize: 11, textAlign: "center", color: "#444" },

  // Filter box
  filterBox: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 10, marginBottom: 15 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  inputWrap: { flex: 1, marginBottom: 10, marginRight: 8 },
  label: { fontSize: 12, marginBottom: 4, color: "#333" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, padding: 8, fontSize: 14 },

  radioRow: { flexDirection: "row", alignItems: "center" },

  loadBtn: { flex: 1, backgroundColor: "#1E64CC", padding: 10, borderRadius: 5, marginRight: 5 },
  resetBtn: { flex: 1, backgroundColor: "#5A67D8", padding: 10, borderRadius: 5, marginLeft: 5 },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "600" },

  // Table
  tableBox: { marginBottom: 15 },
  tableHeader: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#ccc" },
  tableHead: { width: 100, padding: 6, fontSize: 12, fontWeight: "600", textAlign: "center" },
  tableRow: { padding: 10 },
  noRecord: { fontSize: 12, textAlign: "center", color: "#333" },

  // Generate button
  generateBtn: { backgroundColor: "#1E64CC", padding: 12, borderRadius: 8, marginBottom: 20 },
  generateBtnText: { textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "700" },
  Brow:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly"

  },
  Buttons: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F4E79",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },

field: { flex: 1, margin: 6 },
  label: { fontSize: 12, color: '#374151', marginBottom: 2 },
underlineInput: { borderBottomWidth: 1, borderBottomColor: '#9ca3af', fontSize: 14, paddingVertical: 4 },
});

export default EInvoiceReport;

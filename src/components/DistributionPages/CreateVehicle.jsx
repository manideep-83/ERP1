import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import LabeledUnderlineInput from '../../ReusableComponents/LabeledUnderlineInput'

const CreateVehicle = () => {
  const [status, setStatus] = useState("Active");
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Create New</Text>
      </View>


      {/* Filters */}
      <View style={styles.filterBox}>
        
          <View style={styles.inputWrap}>
            <LabeledUnderlineInput label="Distributor Branch Code" placeholder="16222" />
            <LabeledUnderlineInput label="Transporter Name" placeholder="" />
            <LabeledUnderlineInput label="Vehicle Type" placeholder="Two Wheeler" />
            <LabeledUnderlineInput label="Code" placeholder="" />
            <LabeledUnderlineInput label="Registration Number" placeholder="" />
            <LabeledUnderlineInput label="Capacity" placeholder="" />
            <LabeledUnderlineInput label="Rate per Case" placeholder="" />
            <LabeledUnderlineInput label="Rate per Tonne" placeholder="" />
            <LabeledUnderlineInput label="Rate per Km" placeholder="" />

            <View style={{display:"flex", flexDirection:"row",justifyContent:"space-evenly"}}>
            <Text style={styles.label}>Status</Text>
                <View style={styles.row}>
                    <TouchableOpacity
                    style={styles.radioRow}
                    onPress={() => setStatus("Active")}
                    >
                    <View style={[styles.radio, status === "Active" && styles.radioSelected]} />
                    <Text>Active</Text>
                    </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.radioRow}
                        onPress={() => setStatus("Inactive")}
                        >
                    <View style={[styles.radio, status === "Inactive" && styles.radioSelected]} />
                    <Text>Inactive</Text>
                    </TouchableOpacity>
                    </View>
                </View>
        </View>
       

       
         <View style={styles.Brow}>
                 <TouchableOpacity style={styles.Buttons}>
                   <Text style={styles.buttonText}>Save</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.Buttons}>
                   <Text style={styles.buttonText}> Discard</Text>
                 </TouchableOpacity>
        </View>
      </View>


     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {  backgroundColor: "#fff", padding: 10 },

  // Header
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  header: { fontSize: 20, fontWeight: "700", color: "#1E64CC" },
  createBtn: { backgroundColor: "#1E64CC", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
  createBtnText: { color: "#fff", fontWeight: "600" },




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

    radioRow: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 5,
  },
  radioSelected: { backgroundColor: "#1d3557" },

});

export default CreateVehicle;

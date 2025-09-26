import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CheckBoxx from "../../ReusableComponents/CheckBox";
import LabeledUnderlineInput from "../../ReusableComponents/LabeledUnderlineInput";

const CreateMerchandiser = () => {
    const [status, setStatus] = useState("Active");
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Create New</Text>
      </View>

      {/* Form */}
      <View style={styles.filterBox}>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Distributor Branch Code" placeholder="16222" />
          <LabeledUnderlineInput label="Code" placeholder="16222" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Name" placeholder="16222" />
          <LabeledUnderlineInput label="Attach Company" placeholder="" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Phone Number" placeholder="16222" />
          <LabeledUnderlineInput label="E-Mail ID" placeholder="" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Daily Allowance" placeholder="16222" />
          <LabeledUnderlineInput label="Monthly Salary" placeholder="" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Salesman Type" placeholder="16222" />
          <LabeledUnderlineInput label="Date of Birth" placeholder="" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Date of Join" placeholder="16222" />
          <LabeledUnderlineInput label="Seller Type" placeholder="" />
        </View>
        <View style={styles.Vrow}>
            <View style={{display:"flex", flexDirection:"Column",justifyContent:"space-evenly"}}>
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
                <TouchableOpacity style={styles.select}>
          <Text style={{color:'#0000'}}>Select Photo</Text>
        </TouchableOpacity>
            </View>
        
        </View>

      {/* Footer buttons */}
      <View style={styles.Brow}>
        <TouchableOpacity style={styles.Buttons}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttons}>
          <Text style={styles.buttonText}>Discard</Text>
        </TouchableOpacity>
        </View>
     
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    select:{flexDirection: "row",
    alignItems: "center",
    backgroundColor:"#dbcf2aff",
    paddingVertical: 5 ,
    paddingHorizontal: 10,
    borderRadius: 8,},
  container: { backgroundColor: "#fff", padding: 10 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  header: { fontSize: 20, fontWeight: "700", color: "#1E64CC" },

  Vrow: { flexDirection: "row", justifyContent: "space-between" },
  filterBox: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 10, marginBottom: 15 },

  card: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#8E97B0",
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
    position: "relative",
  },
  legend: {
    position: "absolute",
    top: -12,
    left: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 6,
  },
  legendText: { fontSize: 14, color: "#1F4E79" },
  legendBold: { fontWeight: "bold" },
  daysRow: { flexDirection: "row", flexWrap: "wrap" },

  Brow: { flexDirection: "row", justifyContent: "space-evenly", marginTop: 10 },
  Buttons: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:"#1F4E79",
    paddingVertical: 5 ,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
   radioRow: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 5,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  radioSelected: { backgroundColor: "#1d3557" },
});

export default CreateMerchandiser;

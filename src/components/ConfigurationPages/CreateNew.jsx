import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const CreateNew = () => {
  const [status, setStatus] = useState("Active");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Create New</Text>

      {/* User Group */}
      <View style={styles.field}>
        <Text style={styles.label}>User Group</Text>
        <Picker
          selectedValue={selectedGroup}
          onValueChange={(val) => setSelectedGroup(val)}
          style={styles.picker}
        >
          <Picker.Item label="Select" value="" />
        </Picker>
      </View>

      {/* User Name */}
      <View style={styles.field}>
        <Text style={styles.label}>User Name</Text>
        <TextInput style={styles.input} />
      </View>

      {/* Login + Designation */}
      <View style={styles.row}>
        <View style={[styles.field, styles.half]}>
          <Text style={styles.label}>User login code</Text>
          <TextInput style={styles.input} value="MIL" />
        </View>
        <View style={[styles.field, styles.half]}>
          <Text style={styles.label}>Designation</Text>
          <TextInput style={styles.input} value="0.00" />
        </View>
      </View>

      {/* Email + Mobile */}
      <View style={styles.row}>
        <View style={[styles.field, styles.half]}>
          <Text style={styles.label}>Email Id</Text>
          <TextInput style={styles.input} value="08/09/2025" />
        </View>
        <View style={[styles.field, styles.half]}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput style={styles.input} />
        </View>
      </View>

      {/* Employee code */}
      <View style={styles.field}>
        <Text style={styles.label}>Employee code</Text>
        <TextInput style={styles.input} value="0.00" />
      </View>

      {/* Region */}
      <View style={styles.field}>
        <Text style={styles.label}>Region / HO</Text>
        <Picker
          selectedValue={selectedRegion}
          onValueChange={(val) => setSelectedRegion(val)}
          style={styles.picker}
        >
          <Picker.Item label="Select" value="" />
        </Picker>
      </View>

      {/* Password Button */}
      <TouchableOpacity style={styles.passwordBtn}>
        <Text style={styles.passwordText}>Set user Password</Text>
      </TouchableOpacity>

      {/* Note */}
      <Text style={styles.note}>
        Please Choose only <Text style={{ fontWeight: "bold" }}>pdf</Text> if the
        file size is less than 1MB
      </Text>

      {/* Photo Button */}
      <TouchableOpacity style={styles.photoBtn}>
        <Text style={styles.photoText}>+ Select Photo</Text>
      </TouchableOpacity>

      {/* User Branch Mapping */}
      <View style={styles.table}>
        <View style={styles.tableRowHeader}>
          <Text style={[styles.tableText, styles.bold]}>Distributor Branch</Text>
          <Text style={[styles.tableText, styles.bold]}>Access Rights</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableText}>
            16622-16622-SRI VENTAKESHWARA AGENCIES
          </Text>
          <Text style={styles.tableText}>Restrict Access</Text>
        </View>
      </View>

      {/* Status */}
      <View style={{display:"flex", flexDirection:"row",justifyContent:"space-evenly"}}>
      <Text style={styles.label}>Status</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.radioRow}
          onPress={() => setStatus("Active")}
          >
        <View
        style={[styles.radio, status === "Active" && styles.radioSelected]}
        />
        <Text>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioRow}
          onPress={() => setStatus("Inactive")}
          >
          <View
            style={[styles.radio, status === "Inactive" && styles.radioSelected]}
            />
          <Text>Inactive</Text>
        </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.btnText}>💾 Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.btnText}>✖ Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {  padding: 15, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#1d3557" },
  field: { marginBottom: 10 },
  label: { fontSize: 14, marginBottom: 2, color: "#000" },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    fontSize: 14,
    paddingVertical: 5,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  half: { width: "48%" },
  picker: {
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
  },
  passwordBtn: {
    backgroundColor: "#1d3557",
    padding: 8,
    borderRadius: 3,
    marginVertical: 8,
    alignSelf: "flex-start",
  },
  passwordText: { color: "#fff", fontSize: 13 },
  note: { fontSize: 12, marginVertical: 8 },
  photoBtn: {
    backgroundColor: "#f1fa8c",
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  photoText: { color: "#000" },
  table: {
    borderWidth: 1,
    borderColor: "#bbb",
    marginVertical: 12,
  },
  tableRowHeader: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    padding: 6,
  },
  tableRow: { flexDirection: "row", padding: 6 },
  tableText: { flex: 1, fontSize: 12 },
  bold: { fontWeight: "bold" },
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
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  saveBtn: {
    backgroundColor: "#1d3557",
    padding: 12,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
  },
  cancelBtn: {
    backgroundColor: "#6c757d",
    padding: 12,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "bold" },
});

export default CreateNew;

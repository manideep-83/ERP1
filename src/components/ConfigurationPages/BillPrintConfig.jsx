import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "react-native-vector-icons/Ionicons";

const BillPrintConfig = () => {
  const [selectedOption, setSelectedOption] = useState("Invoice");
  const [template, setTemplate] = useState("EInvoiceMarico");
  const [design, setDesign] = useState("FP_PDF");

  const options = [
    "Invoice",
    "SalesReturn",
    "Cr/Db Supplier",
    "Cr/Db Customer",
    "Sample Issue",
    "Sample Return",
    "Inter Distributor Transfer"
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bill Print Configuration</Text>

      {/* Radio Buttons */}
      <View style={styles.radioGroup}>
        {options.map((opt, index) => (
          <TouchableOpacity
            key={index}
            style={styles.radioRow}
            onPress={() => setSelectedOption(opt)}
          >
            <View style={styles.radioOuter}>
              {selectedOption === opt && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Dropdowns */}
      <View style={styles.field}>
        <Text style={styles.label}>Template</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={template}
            onValueChange={(val) => setTemplate(val)}
            style={styles.picker}
          >
            <Picker.Item label="EInvoiceMarico" value="EInvoiceMarico" />
            <Picker.Item label="Template 2" value="Template2" />
          </Picker>
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Default Design</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={design}
            onValueChange={(val) => setDesign(val)}
            style={styles.picker}
          >
            <Picker.Item label="FP_PDF" value="FP_PDF" />
            <Picker.Item label="Design 2" value="Design2" />
          </Picker>
        </View>
      </View>

      {/* Text Info */}
      <Text style={styles.text}>
        Whether the tax is payable on reverse change biasNo
      </Text>
      <Text style={styles.text}>Declaration</Text>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveBtn}>
          <Ionicons name="save" size={18} color="#fff" />
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn}>
          <Ionicons name="close" size={18} color="#fff" />
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E4A7B",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  radioGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#1E4A7B",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1E4A7B",
  },
  radioLabel: {
    fontSize: 14,
    color: "#000",
  },
  field: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "500",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
  },
  picker: {
    height: 50,
    width: "auto",
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
  },
  saveBtn: {
    flexDirection: "row",
    backgroundColor: "#1E4A7B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 15,
    alignItems: "center",
  },
  cancelBtn: {
    flexDirection: "row",
    backgroundColor: "#1E4A7B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "bold",
  },
});

export default BillPrintConfig;

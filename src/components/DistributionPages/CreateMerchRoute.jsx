import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CheckBoxx from "../../ReusableComponents/CheckBox";
import LabeledUnderlineInput from "../../ReusableComponents/LabeledUnderlineInput";

const CreateMerchRoute = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Create New</Text>
      </View>

      {/* Form */}
      <View style={styles.filterBox}>
        
          <LabeledUnderlineInput label="Distributor Branch Code" placeholder="16222" />
          <LabeledUnderlineInput label="Salesman " placeholder="" />
          <LabeledUnderlineInput label="Attach Route" placeholder="Two Wheeler" />
            <View style={styles.Brow}>
            <TouchableOpacity style={styles.Buttons}>
          <Text style={styles.buttonText}>Add Route</Text>
          </TouchableOpacity>
        </View>

        {/* Calls Section */}
        
        <Text>Table</Text>
      </View>

      {/* Footer buttons */}
      <View style={styles.Brow}>
        <TouchableOpacity style={styles.Buttons}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttons}>
          <Text style={styles.buttonText}>Discard</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const SectionCard = ({ title1, title2, children }) => (
  <View style={styles.card}>
    <View style={styles.legend}>
      <Text style={styles.legendText}>
        {title1} {title2 !== "" && <Text style={styles.legendBold}>{title2}</Text>}
      </Text>
    </View>
    <View>{children}</View>
  </View>
);

const styles = StyleSheet.create({
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
});

export default CreateMerchRoute;

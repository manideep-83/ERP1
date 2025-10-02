import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CheckBoxx from "../../ReusableComponents/CheckBox";
import LabeledUnderlineInput from "../../ReusableComponents/LabeledUnderlineInput";
import AppTable from "../../ReusableComponents/AppTable";

const CreateRCS = () => {
  const columns = [
  { header: 'Date of visit', key: 'date', flex: 1 },
  { header: 'Day of  visit', key: 'date', flex: 2 },
  { header: 'Route Name', key: 'name', flex: 2 },
  // { header: 'Amount', key: 'date', flex: 2 },

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => alert(`Clicked ${item.name}`)}>
        <Text>Show</Text>
      </TouchableOpacity>
      
    )
  }
];

const data = [
  { id: 1, name: 'Product A' ,date:'12-08-2023'},
];
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
          <LabeledUnderlineInput label="Salesman Name" placeholder="" />
        </View>
        

        {/* Calls Section */}
        <SectionCard title1="Calls" title2="Day">
          <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Visit Date" placeholder="" />
          <LabeledUnderlineInput label="Route" placeholder="No Coverage" />
          
          <TouchableOpacity style={styles.Buttons}>
          <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        </SectionCard>
        <View style={styles.Brow}>
          
        <TouchableOpacity style={styles.Buttons}>
          <Text style={styles.buttonText}>Generate Pattern</Text>
        </TouchableOpacity>
        </View>
        <Text>Table</Text>
        <AppTable 
        columns={columns} 
        data={data} 
        message={`Total Records: ${data.length}`} 
      />
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

export default CreateRCS;

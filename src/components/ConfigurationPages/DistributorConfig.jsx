import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,TextInput } from "react-native";
const DistributorConfig = () => {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Distributor Configuration</Text>

      {/* Table */}
      <View style={styles.table}>

        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerText]}>Description</Text>
          <Text style={[styles.cell, styles.headerText]}>Status</Text>
        </View>

        {/* Table Row */}
        <View style={styles.row}>
          <Text style={styles.cell}>
            Allow Sales Return Credit Note to Adjust in Bill
          </Text>
          <TextInput
      value={text}
      placeholder={"YES"}
      editable={true}
      onChangeText={(value)=>{onChangeText(value)}}
      style={styles.underlineInput}
    />
        </View>
    </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>💾 Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const LabeledUnderlineInput = ({ label, value = '', placeholder = '', editable = true, onChangeText = () => {} }) => (
  <View style={styles.field}>
    
  </View>
);

const styles = StyleSheet.create({
     underlineInput: { borderBottomWidth: 1, borderBottomColor: '#9ca3af', fontSize: 14, paddingVertical: 4 },
    container: {
        display:"flex",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1E3A8A",
        marginBottom: 15,
    },
    card: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 15,
        marginBottom: 20,
    },
    row: {
        display:"flex", 
        flexDirection:"row",
        justifyContent:"space-evenly",
        // alignItems:"center",
        marginBottom: 15
    },
    label: {
        fontSize: 14,
        color: "#444",
    },
    value: {
        fontSize: 14,
        color: "#777",
        marginTop: 2,
    },
    picker: {
        height: 40,
        marginTop: 5,
    },
    buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
},
saveButton: {
    backgroundColor: "#1a3d7c",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
},

  buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },


title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E3A8A", // same blue as your screenshot
    marginBottom: 15,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  headerRow: {
    backgroundColor: "#f8f8f8",
  },
  cell: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: "#333",
  },
  headerText: {
    fontWeight: "bold",
    color: "#1E3A8A",
  },



});

export default DistributorConfig;

  
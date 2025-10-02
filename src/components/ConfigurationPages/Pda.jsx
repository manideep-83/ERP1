import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
const Pda = () => {
  const [salesman, setSalesman] = useState("");
  const [route, setRoute] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pda Export</Text>

      <View style={styles.card}>
        {/* Process Type */}
        <View style={styles.row}>
            <LabeledUnderlineInput label="Process Type" placeholder="Cross Beat" />
        </View>

        {/* Salesman */}

        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
            <LabeledUnderlineInput label="Salesman" placeholder="Select" />
          <LabeledUnderlineInput label="Route" placeholder="Select" />
          {/* <Text style={styles.label}>Salesman</Text> */}
          {/* <Picker
            selectedValue={salesman}
            style={styles.picker}
            onValueChange={(itemValue) => setSalesman(itemValue)}
            >
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Salesman 1" value="s1" />
            <Picker.Item label="Salesman 2" value="s2" />
          </Picker> */}
        </View>

       
        </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>💾 Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>❌ Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const LabeledUnderlineInput = ({ label, value = '', placeholder = '', editable = true, onChangeText = () => {} }) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      placeholder={placeholder}
      editable={editable}
      onChangeText={onChangeText}
      style={[styles.underlineInput, !editable && styles.disabled]}
    />
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
        marginBottom: 15,
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
    marginRight: 10,
},
cancelButton: {
    backgroundColor: "#1a3d7c",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    marginRight: 10,
  },
  buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
});

export default Pda;
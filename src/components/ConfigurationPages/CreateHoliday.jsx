import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import AppTable from "../../ReusableComponents/AppTable";
const CreateHoliday = () => {
     const columns = [
  { header: 'Company', key: 'name', flex: 1 },
  { header: 'year', key: 'name', flex: 2 },
  { header: 'Action', key: 'name', flex: 2 },
//   { header: 'Invoice Date', key: 'date', flex: 2 },

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => alert(`Clicked ${item.name}`)}>
        <Ionicons name="eye-outline" size={20} color="#007bff" />
      </TouchableOpacity>
      
    )
  }
];

const data = [
  {},
];
  const [salesman, setSalesman] = useState("");
  const [route, setRoute] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pda Export</Text>

      <View style={styles.card}>
        {/* Process Type */}
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
            <LabeledUnderlineInput label="Company Name" placeholder="Marico India Limited" />
          <LabeledUnderlineInput label="Holiday" placeholder="" />
          
        </View>
        <View style={styles.row}>
            <LabeledUnderlineInput label="Year" placeholder="2025" />
        </View>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
             <LabeledUnderlineInput label="Holiday Date" placeholder="08/09/2025" />
             <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>+ Add</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <Text>Screen Name</Text>
            
        <AppTable
        columns={columns} 
        data={data} 
        message={`Total Records: ${data.length}`} 
        />
        </View>

        {/* Salesman */}


       
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
},
cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
});

export default CreateHoliday;
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import AppTable from "../../ReusableComponents/AppTable";
const CreateScreenName = () => {
  const [salesman, setSalesman] = useState("");
  const [route, setRoute] = useState("");
  const columns = [
  { header: 'Screen Name', key: 'name', flex: 1 },
  { header: 'Create', key: 'name', flex: 2 },

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
    <View style={styles.container}>
      <Text style={styles.title}>Create</Text>

      <View style={styles.card}>
        {/* Process Type */}
        <View style={styles.row}>
            <LabeledUnderlineInput label="Group Code" placeholder="" />
             <LabeledUnderlineInput label="Group Name" placeholder="" />
             <LabeledUnderlineInput label="Module Name" placeholder="Select Module" />
        </View>
        <Text style={styles.label}>Screen Name</Text>
        {/* <Text style={styles.label}>Table</Text> */}
        <AppTable 
        columns={columns} 
        data={data} 
        message={`Total Records: ${data.length}`} 
      />
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
        color: "#3151AC",
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
    backgroundColor: "#1F4E79",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
},
cancelButton: {
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
    field: {  margin: 6 },
});

export default CreateScreenName;
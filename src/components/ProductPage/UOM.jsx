import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import LabeledUnderlineInput from "../../ReusableComponents/LabeledUnderlineInput";
import AppTable from "../../ReusableComponents/AppTable";
const UOM = () => {
  const [salesman, setSalesman] = useState("");
  const [route, setRoute] = useState("");
 const columns = [
  { header: 'Report Uom Code', key: 'name', flex: 1 },
  { header: 'UOM Name', key: 'name', flex: 2 },
//   { header: 'SalAesman', key: 'date', flex: 2 },
//   { header: 'Invoice Date', key: 'date', flex: 2 },

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => alert(`Clicked ${item.name}`)}>
        <Text>!</Text>
        {/* <Ionicons name="eye-outline" size={20} color="#007bff" /> */}
      </TouchableOpacity>
      
    )
  }
];

const data = [
  {},
];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UOM Master</Text>

      
        {/* Process Type */}
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
           <Text style={styles.label}>Report Uom Code*</Text>
           <Text style={styles.label}>UOM Name</Text>
         
        </View>
        <View style={{display:"flex",flexDirection:"row",}}>
            <LabeledUnderlineInput label="" placeholder="" />
            <TouchableOpacity style={styles.btn}>
          <Text style={styles.buttonText}>+Add</Text>
        </TouchableOpacity>
        </View>

        {/* Salesman */}

        
    <AppTable 
        columns={columns} 
        data={data} 
        message={`Total Records: ${data.length}`} 
      />
       


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


const styles = StyleSheet.create({
     underlineInput: { borderBottomWidth: 1, borderBottomColor: '#9ca3af', fontSize: 14, paddingVertical: 4 },
    container: {
        display:"flex",
        padding: 20,
        backgroundColor: "#fff",
    },
    btn:{
        flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
        padding:10,
    borderRadius: 8,
    margin: 10,
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

export default UOM;
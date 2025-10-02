import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppTable from "../../ReusableComponents/AppTable";

const ETL = () => {
    const columns = [
  { header: 'Process Name', key: 'name', flex: 1 },
  { header: 'File Name', key: 'name', flex: 2 },
  { header: 'Start Date', key: 'date', flex: 2 },

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
//   { id: 1, name: 'Product A' ,date:'12-08-2023'},
{}
];
  const [selectedOption, setSelectedOption] = useState("Stockiest Opening Stock");

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>ETL</Text>

      <View style={styles.card}>
        {/* Dropdown */}
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={(val) => setSelectedOption(val)}
            style={styles.picker}
          >
            <Picker.Item label="Stockiest Opening Stock" value="Stockiest Opening Stock" />
            <Picker.Item label="Option 2" value="Option2" />
            <Picker.Item label="Option 3" value="Option3" />
          </Picker>
        </View>

        {/* Buttons */}
        <View style={{display:"flex",flexDirection:"column",padding:10,alignItems:"center"}}>
        <TouchableOpacity style={styles.downloadBtn}>
          <Text style={styles.downloadText}>Download Format</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadBtn}>
          <Text style={styles.uploadText}>+ Upload File</Text>
        </TouchableOpacity>
        </View>
      </View>
      <AppTable 
        columns={columns} 
        data={data} 
        message={`Total Records: ${data.length}`} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E4A7B",
    marginBottom: 15,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginRight: 10,
    width: 180,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  downloadBtn: {
    backgroundColor: "#1E4A7B",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 4,
  },
  downloadText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  uploadBtn: {
    marginTop:5,
    backgroundColor: "#FFD700",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#1E4A7B",
  },
  uploadText: {
    color: "#1E4A7B",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default ETL;

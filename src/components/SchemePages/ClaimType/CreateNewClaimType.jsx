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

const CreateNewClaimType = () => {
  const [claimType, setClaimType] = useState("Manual"); // Separate state for 'Type' radio buttons
  const [goodsOrServices, setGoodsOrServices] = useState("Services Based"); // Separate state for 'Services/Goods' radio buttons
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Create New</Text>

      {/* User Group */}
      <View style={styles.field}>
        <Text style={styles.label}>Claim Type</Text>
        <Picker
          selectedValue={selectedGroup}
          onValueChange={(val) => setSelectedGroup(val)}
          style={styles.picker}
        >
          <Picker.Item label="Select" value="" />
        </Picker>
      </View>

      {/* Type */}
      <View style={styles.field}>
        <Text style={styles.label}>Type</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setClaimType("Manual")}
          >
            <View
              style={[
                styles.radio,
                claimType === "Manual" && styles.radioSelected,
              ]}
            />
            <Text>Manual</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Services/Goods */}
      <View style={styles.field}>
        <Text style={styles.label}>Services/Goods</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setGoodsOrServices("Services Based")}
          >
            <View
              style={[
                styles.radio,
                goodsOrServices === "Services Based" && styles.radioSelected,
              ]}
            />
            <Text>Services Based</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setGoodsOrServices("Goods Based")}
          >
            <View
              style={[
                styles.radio,
                goodsOrServices === "Goods Based" && styles.radioSelected,
              ]}
            />
            <Text>Goods Based</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.btnText}>💾 Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn
        }>
          <Text style={styles.btnText}>✖ Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 15, 
    backgroundColor: "#fff",
    flexGrow: 1, // Ensures content fills the screen
  },
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 15, 
    color: "#1d3557" 
  },
  field: { 
    marginBottom: 15 
  },
  label: { 
    fontSize: 14, 
    marginBottom: 5, 
    color: "#000" 
  },
  picker: {
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
  },
  radioGroup: { 
    flexDirection: "row", 
    justifyContent: "flex-start",
    marginTop: 5,
  },
  radioRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginRight: 20 
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 5,
    backgroundColor: '#fff', // Unselected state color
  },
  radioSelected: { backgroundColor: "#1d3557" }, // Selected state color
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

export default CreateNewClaimType;
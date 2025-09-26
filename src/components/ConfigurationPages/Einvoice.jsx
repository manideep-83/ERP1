import { StyleSheet, Text, View, ScrollView ,TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const Einvoice = () => {
  const [authToken, setAuthToken] = useState("yi");
  const [ownerId, setOwnerId] = useState("");
  const [gstin, setGstin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>E-Invoice Authentication</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Authentication Token</Text>
          <LabeledUnderlineInput
            value={authToken}
            placeholder="Enter authentication token"
            onChangeText={setAuthToken}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Owner Id</Text>
          <LabeledUnderlineInput
            value={ownerId}
            placeholder="Enter owner ID"
            onChangeText={setOwnerId}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>GSTIN Number</Text>
          <LabeledUnderlineInput
            value={gstin}
            placeholder="Enter GSTIN number"
            onChangeText={setGstin}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>User Name</Text>
          <LabeledUnderlineInput
            value={username}
            placeholder="Enter username"
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Password</Text>
          <LabeledUnderlineInput
            value={password}
            placeholder="Enter password"
            onChangeText={setPassword}
          />
        </View>
      </View>


      <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.buttonText}>💾 Save</Text>
              </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const LabeledUnderlineInput = ({
  value = "",
  placeholder = "",
  editable = true,
  onChangeText = () => {},
}) => (
  <TextInput
    mode="flat"
    value={value}
    placeholder={placeholder}
    editable={editable}
    onChangeText={onChangeText}
    style={styles.underlineInput}
    underlineColor="#9ca3af"
    activeUnderlineColor="#1E3A8A"
  />
);

export default Einvoice;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
  },
  label: {
    fontSize: 14,
    color: "#374151",
    width: 130, // fixed width so inputs align
  },
  underlineInput: {
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 14,
    paddingVertical: 6,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    margin:30
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
   buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

const CreateEI = () => {
  const [selectedTab, setSelectedTab] = useState("E-Invoice");

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>E-Invoice Report</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "E-Invoice" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("E-Invoice")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "E-Invoice" && styles.activeTabText,
            ]}
          >
            E-Invoice
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "E-Invoice Upload" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("E-Invoice Upload")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "E-Invoice Upload" && styles.activeTabText,
            ]}
          >
            E-Invoice Upload
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download Format</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.buttonText}>Select</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload File</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateEI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    borderRadius: 6,
    marginBottom: 15,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  activeTab: {
    backgroundColor: "#dbe4f3",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  tabText: {
    fontSize: 14,
    color: "#1F3C88",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#1F3C88",
  },
  card: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  button: {
    backgroundColor: "#1F3C88",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginVertical: 8,
  },
  smallButton: {
    backgroundColor: "#1F3C88",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    width: "100%",
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#999",
    height: 35,
  },
});

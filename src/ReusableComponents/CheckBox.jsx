import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "@react-native-community/checkbox"; // Better for cross-platform

const CheckBoxx = ({ text = "", value, onValueChange }) => {
  return (
    <View style={styles.checkboxContainer}>
       {/* <CheckBox
        value={value}
        onValueChange={onValueChange}
        tintColors={{ true: "#1E64CC", false: "#9ca3af" }}
      /> */}
      <Text style={styles.label}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    color: "#374151",
  },
});

export default CheckBoxx;

import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const SearchBar = ({ onSearch, onDateSelect, onViewAll }) => {
  const [searchText, setSearchText] = useState("");
  const [date, setDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setShowPicker(false);
      return;
    }
    setShowPicker(Platform.OS === "ios"); // Keep open only for iOS
    if (selectedDate) {
      setDate(selectedDate);
      onDateSelect && onDateSelect(selectedDate);
    }
  };

  return (
    <View>

    <Text>Quick Search</Text>
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter atleast 3 characters"
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          if (text.length >= 3) {
            onSearch && onSearch(text);
          }
        }}
        />

      {/* Date Picker Button */}
      <TouchableOpacity style={styles.dateButton} onPress={() => setShowPicker(true)}>
        <Text style={styles.dateText}>
          {date ? date.toLocaleDateString() : "Select  Date"}
        </Text>
      </TouchableOpacity>

      {/* Calendar Picker */}
      {showPicker && (
        <DateTimePicker
        value={date || new Date()}
        mode="date"
        display="default"
        onChange={handleDateChange}
        />
      )}

      {/* View All Button */}
      <TouchableOpacity style={styles.viewAllButton} onPress={onViewAll}>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
    </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  dateButton: {
    flex: 1.5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 10,
    justifyContent: "center",
    marginRight: 8,
  },
  dateText: { color: "#555", fontSize: 13 },
  viewAllButton: {
    backgroundColor: "#1a3d7c",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
  },
  viewAllText: { color: "#fff", fontWeight: "600" },
});

export default SearchBar;

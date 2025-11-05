import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // npm install @react-native-community/datetimepicker
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppDatePicker = ({ label, value, onChange, placeholder = 'Select Date', required = false }) => {
  const [show, setShow] = useState(false);

  const handleChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      const dateStr = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
      onChange(dateStr);
    }
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}
      <TouchableOpacity onPress={() => setShow(true)} style={styles.dateInput}>
        <Text style={value ? styles.dateText : styles.placeholderText}>
          {value || placeholder}
        </Text>
        <Ionicons name="calendar-outline" size={20} color="#888" />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { fontSize: 14, color: '#333', marginBottom: 5, fontWeight: '500' },
  required: { color: 'red' },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  dateText: { fontSize: 16, color: '#333' },
  placeholderText: { fontSize: 16, color: '#999' },
});

export default AppDatePicker;

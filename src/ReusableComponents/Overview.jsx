import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Overview = ({ title, rows = [], onEdit, onDelete }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {rows.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={onEdit}
        >
          {/* <Ionicons name="create-outline" size={16} color="#fff" /> */}
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={onDelete}
        >
          {/* <Ionicons name="trash-outline" size={16} color="#fff" /> */}
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flexGrow: 1 },
  title: { fontSize: 18, fontWeight: '700', textAlign: 'center', marginBottom: 16, color: '#1a3d7c' },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  label: { flex: 3, fontSize: 14, color: '#333' },
  colon: { flex: 0.3, fontSize: 14, color: '#333', textAlign: 'center' },
  value: { flex: 4, fontSize: 14, color: '#333' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  button: { flexDirection: 'row', alignItems: 'center', padding: 10, borderRadius: 6, marginHorizontal: 8 },
  editButton: { backgroundColor: '#1a3d7c' },
  deleteButton: { backgroundColor: '#1a3d7c' },
  buttonText: { color: '#fff', marginLeft: 6, fontWeight: '600' },
});

export default Overview;

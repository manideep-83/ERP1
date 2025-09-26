import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const LabeledUnderlineInput = ({label='',  value = '', placeholder = '', editable = true, onChangeText = () => {} }) => {
  return (
    <View style={styles.field}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
        value={value}
        placeholder={placeholder}
        editable={editable}
        onChangeText={onChangeText}
        style={[styles.underlineInput]}
        />
  </View>
  )
};

export default LabeledUnderlineInput;

const styles = StyleSheet.create({

 field: { flex: 1, margin: 6 },
  label: { fontSize: 12, color: '#374151', marginBottom: 2 },
  underlineInput: { borderBottomWidth: 1, borderBottomColor: '#9ca3af', fontSize: 14, paddingVertical: 4 }

});
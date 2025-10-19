import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from  '../../Context/UserContext'
const EditableField = ({ label, value, onChangeText, keyboardType = 'default', isEditable = true }) => (
  <View style={styles.fieldRow}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <TextInput
      style={[styles.fieldValue, !isEditable && styles.readOnly]}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      editable={isEditable}
      placeholder={`Enter ${label}`}
      placeholderTextColor="#AAA"
    />
  </View>
);

const PickerField = ({ label, value, onChange }) => {
  const options = ['Retailer', 'Wholesaler', 'Supermarket'];
  return (
    <View style={styles.fieldRow}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {options.map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.categoryOption, value === opt && styles.selectedCategory]}
            onPress={() => onChange(opt)}
          >
            <Text style={[styles.categoryText, value === opt && styles.selectedCategoryText]}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const ActionLink = ({ label, onPress }) => (
  <TouchableOpacity style={styles.actionLink} onPress={onPress}>
    <Text style={styles.actionLinkText}>{label}</Text>
    <Text style={styles.arrowIcon}>›</Text>
  </TouchableOpacity>
);

const MyAccountScreen = () => {
  const navigation = useNavigation();
  const { username } = useContext(UserContext);  // e.g., 'Business' or 'Individual'

  const [name, setName] = useState(username);
  const [email, setEmail] = useState(`${username.toLowerCase()}@gmail.com`);
  const [phone] = useState('9876543210');
  const [gstin] = useState('29ABCDE1234F1Z5');

  const [shopName, setShopName] = useState('');
  const [category, setCategory] = useState('');

  const handleSave = () => {
    Alert.alert('Success', 'Your account details have been updated!');
    console.log('Saved:', { name, email, phone, shopName, category });
  };

  const handleChangePassword = () => navigation.navigate('ChangePassword');
  const handleManageAddresses = () => navigation.navigate('ManageAddress');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.screenTitle}>My Account</Text>
        <Text style={styles.screenSubtitle}>
          View and update your personal and business information.
        </Text>

        {/* Personal Info */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <EditableField label="Full Name" value={name} onChangeText={setName} />
          <EditableField label="Email ID" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <EditableField label="Mobile Number" value={phone} keyboardType="phone-pad" isEditable={false} />
        </View>

        {/* Business Info - Only for Business users */}
        {username === 'Business' && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Business Information</Text>
            <EditableField label="Shop Name" value={shopName} onChangeText={setShopName} />
            <PickerField label="Category" value={category} onChange={setCategory} />
            <EditableField label="GSTIN" value={gstin} isEditable={false} />
          </View>
        )}

        {/* Security & Management */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Security & Management</Text>
          <ActionLink label="Manage Delivery Addresses" onPress={handleManageAddresses} />
          <ActionLink label="Change Password" onPress={handleChangePassword} />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles (keep your existing styles)
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F5F5' },
  scrollContainer: { paddingHorizontal: 15, paddingTop: 10, paddingBottom: 20 },
  screenTitle: { fontSize: 24, fontWeight: 'bold', color: '#000', marginBottom: 5 },
  screenSubtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  sectionCard: { backgroundColor: 'white', borderRadius: 12, marginBottom: 20, padding: 15, borderWidth: 1, borderColor: '#E0E0E0', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10, paddingBottom: 8, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  fieldRow: { marginBottom: 10, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F7F7F7' },
  fieldLabel: { fontSize: 12, color: '#1f75bcff', fontWeight: 'bold', marginBottom: 4 },
  fieldValue: { fontSize: 16, color: '#000', padding: 0 },
  readOnly: { color: '#666', backgroundColor: '#f9f9f9', padding: 8, borderRadius: 4 },
  actionLink: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  actionLinkText: { fontSize: 16, color: '#007AFF' },
  arrowIcon: { fontSize: 18, color: '#AAA', fontWeight: 'bold' },
  saveButton: { backgroundColor: '#1f75bcff', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 },
  saveButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  categoryOption: { borderWidth: 1, borderColor: '#1f75bcff', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6, marginRight: 10 },
  selectedCategory: { backgroundColor: '#1f75bcff' },
  categoryText: { color: '#1f75bcff', fontSize: 14 },
  selectedCategoryText: { color: '#fff', fontWeight: 'bold' },
});

export default MyAccountScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ensure this package is installed

// Reusable Components (adjust paths as needed)
// NOTE: I've integrated these components into this file for a single-file solution.
// In a real project, you would import them from their respective files.

// === AppTextInput Component ===
const AppTextInput = ({ label, value, onChangeText, placeholder, keyboardType, multiline = false, numberOfLines = 1, editable = true, required = false }) => (
  <View style={appTextInputStyles.container}>
    {label && (
      <Text style={appTextInputStyles.label}>
        {label}
        {required && <Text style={appTextInputStyles.requiredIndicator}> *</Text>}
      </Text>
    )}
    <TextInput
      style={[appTextInputStyles.input, multiline && appTextInputStyles.multilineInput, !editable && appTextInputStyles.disabledInput]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      multiline={multiline}
      numberOfLines={numberOfLines}
      editable={editable}
      placeholderTextColor="#999"
    />
  </View>
);

const appTextInputStyles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { fontSize: 14, color: '#333', marginBottom: 5, fontWeight: '500' },
  requiredIndicator: { color: 'red' },
  input: { borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, fontSize: 16, color: '#333', backgroundColor: '#fff' },
  multilineInput: { height: 80, textAlignVertical: 'top', paddingVertical: 12 },
  disabledInput: { backgroundColor: '#f5f5f5', color: '#777' },
});

// === AppDatePicker Component ===
const AppDatePicker = ({ label, value, onChange, placeholder, required = false }) => (
  <View style={appDatePickerStyles.container}>
    {label && (
      <Text style={appDatePickerStyles.label}>
        {label}
        {required && <Text style={appDatePickerStyles.requiredIndicator}> *</Text>}
      </Text>
    )}
    <TouchableOpacity onPress={() => console.log("Date picker opened")} style={appDatePickerStyles.dateInput}>
      <Text style={value ? appDatePickerStyles.dateText : appDatePickerStyles.placeholderText}>
        {value || placeholder}
      </Text>
      <Ionicons name="calendar-outline" size={20} color="#888" />
    </TouchableOpacity>
  </View>
);

const appDatePickerStyles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { fontSize: 14, color: '#333', marginBottom: 5, fontWeight: '500' },
  requiredIndicator: { color: 'red' },
  dateInput: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, backgroundColor: '#fff' },
  dateText: { fontSize: 16, color: '#333' },
  placeholderText: { fontSize: 16, color: '#999' },
});

// === RadioButton Component ===
const RadioButton = ({ label, selected, onSelect }) => (
  <TouchableOpacity style={radioButtonStyles.radioButtonContainer} onPress={onSelect}>
    <Ionicons name={selected ? 'radio-button-on' : 'radio-button-off'} size={20} color={selected ? '#4CAF50' : '#888'} />
    <Text style={radioButtonStyles.radioLabel}>{label}</Text>
  </TouchableOpacity>
);

const radioButtonStyles = StyleSheet.create({
  radioButtonContainer: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
  radioLabel: { marginLeft: 8, fontSize: 16, color: '#333' },
});

// === AppTable Component ===
const AppTable = ({ columns, data, message }) => (
  <View style={appTableStyles.tableContainer}>
    <View style={appTableStyles.headerRow}>
      {columns.map((col, index) => (
        <Text key={index} style={[appTableStyles.headerCell, { flex: col.flex }]}>{col.header}</Text>
      ))}
    </View>
    {data.length > 0 ? (
      data.map((item, rowIndex) => (
        <View key={rowIndex} style={appTableStyles.dataRow}>
          {columns.map((col, colIndex) => (
            <View key={colIndex} style={[appTableStyles.dataCell, { flex: col.flex }]}>
              {col.renderCell ? col.renderCell(item) : <Text style={appTableStyles.dataText}>{item[col.key]}</Text>}
            </View>
          ))}
        </View>
      ))
    ) : (
      <Text style={appTableStyles.noDataMessage}>{message || 'No data available'}</Text>
    )}
  </View>
);

const appTableStyles = StyleSheet.create({
  tableContainer: { backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#e0e0e0', overflow: 'hidden', marginBottom: 20 },
  headerRow: { flexDirection: 'row', backgroundColor: '#f5f5f5', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#e0e0e0' },
  headerCell: { fontWeight: 'bold', fontSize: 12, color: '#555', textAlign: 'center', paddingHorizontal: 5 },
  dataRow: { flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#f0f0f0' },
  dataCell: { justifyContent: 'center', paddingHorizontal: 5 },
  dataText: { fontSize: 12, color: '#333', textAlign: 'center' },
  noDataMessage: { textAlign: 'center', paddingVertical: 20, fontSize: 14, color: '#777' },
});

// === Main Screen Component ===
const CreatePurchaseOrder = () => {
    // const navigation = useNavigation();

    // --- Purchase Order Details State ---
    const [poDetails, setPoDetails] = useState({
      distributorBranchCode: '16622',
      distributorBranchName: '16622-SRI VENKATESWARA AGEN',
      companyName: 'Marico India Limited',
      supplierName: 'Marico Limited - Vijaywada',
      poReferenceNo: '',
      poDate: '', // YYYY-MM-DD
      companyPoNo: '',
      companyPoDate: '', // YYYY-MM-DD
      tentativeOrderValue: '',
      deliveryDate: '', // YYYY-MM-DD
      paymentTerms: 'Net 30',
      status: 'Active',
      shippingAddress: 'Main Warehouse, Mumbai',
      billingAddress: 'Head Office, Mumbai',
      remarks: '',
    });

    // --- Product Selection State ---
    const [productForm, setProductForm] = useState({
      productCode: '',
      productName: '',
      quantity: '',
      unitPrice: '',
      uom: 'PCS',
      totalAmount: '',
      description: '',
    });
    const [productList, setProductList] = useState([]);

    const handlePoDetailChange = (key, value) => {
      setPoDetails(prev => ({ ...prev, [key]: value }));
    };

    const handleProductFormChange = (key, value) => {
      setProductForm(prev => ({ ...prev, [key]: value }));
    };

    const handleAddProduct = () => {
      if (!productForm.productCode || !productForm.quantity || !productForm.unitPrice) {
        Alert.alert('Validation Error', 'Product Code, Quantity, and Unit Price are required.');
        return;
      }
      setProductList(prev => [...prev, { ...productForm, id: Date.now() }]);
      setProductForm({ productCode: '', productName: '', quantity: '', unitPrice: '', uom: 'PCS', totalAmount: '', description: '' });
    };

    const handleDeleteProduct = (id) => {
      setProductList(prev => prev.filter(p => p.id !== id));
    };

    const handleSave = () => {
      // Final validation and save logic
      console.log('Saving Purchase Order', { poDetails, productList });
      Alert.alert('Success', 'Purchase Order saved successfully!');
    };

    const handleCancel = () => {
    //   navigation.goBack();
    };

    // --- AppTable Columns for Product List ---
    const productTableColumns = [
      { header: 'PRODUCT CODE', key: 'productCode', flex: 2 },
      { header: 'PRODUCT NAME', key: 'productName', flex: 2.5 },
      { header: 'QUANTITY', key: 'quantity', flex: 1.5 },
      { header: 'UNIT PRICE', key: 'unitPrice', flex: 2 },
      { header: 'UOM', key: 'uom', flex: 1 },
      { header: 'TOTAL AMOUNT', key: 'totalAmount', flex: 2 },
      { header: 'DESCRIPTION', key: 'description', flex: 3 },
      { header: 'ACTION', key: 'action', flex: 1, renderCell: (item) => (
        <TouchableOpacity onPress={() => handleDeleteProduct(item.id)}>
          <Ionicons name="trash-outline" size={20} color="#dc2626" />
        </TouchableOpacity>
      )},
    ];

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.container}>
            <Text style={styles.screenTitle}>Create Purchase Order</Text>

            {/* --- Purchase Order Details Section --- */}
            <View style={styles.sectionHeader}>
              <Ionicons name="document-text-outline" size={20} color="#333" />
              <Text style={styles.sectionHeaderText}>Purchase Order Details</Text>
            </View>
            <View style={styles.formContainer}>
              <AppTextInput label="Distributor Branch Code" value={poDetails.distributorBranchCode} editable={false} />
              <AppTextInput label="Distributor Branch Name" value={poDetails.distributorBranchName} editable={false} />
              <AppTextInput label="Company Name" value={poDetails.companyName} editable={false} required />
              <AppTextInput label="Supplier Name" value={poDetails.supplierName} editable={false} required />
              <AppTextInput label="PO Reference No" value={poDetails.poReferenceNo} onChangeText={(v) => handlePoDetailChange('poReferenceNo', v)} required />
              <AppDatePicker label="PO Date" value={poDetails.poDate} onChange={(v) => handlePoDetailChange('poDate', v)} required />
              <AppTextInput label="Company PO No" value={poDetails.companyPoNo} onChangeText={(v) => handlePoDetailChange('companyPoNo', v)} />
              <AppDatePicker label="Company PO Date" value={poDetails.companyPoDate} onChange={(v) => handlePoDetailChange('companyPoDate', v)} />
              <AppTextInput label="Tentative Order Value" value={poDetails.tentativeOrderValue} onChangeText={(v) => handlePoDetailChange('tentativeOrderValue', v)} keyboardType="numeric" required />
              <AppDatePicker label="Delivery Date" value={poDetails.deliveryDate} onChange={(v) => handlePoDetailChange('deliveryDate', v)} />
              <AppTextInput label="Payment Terms" value={poDetails.paymentTerms} onChangeText={(v) => handlePoDetailChange('paymentTerms', v)} />
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Status</Text>
                <View style={styles.radioGroup}>
                  <RadioButton label="Active" selected={poDetails.status === 'Active'} onSelect={() => handlePoDetailChange('status', 'Active')} />
                  <RadioButton label="Inactive" selected={poDetails.status === 'Inactive'} onSelect={() => handlePoDetailChange('status', 'Inactive')} />
                </View>
              </View>
              <AppTextInput label="Shipping Address" value={poDetails.shippingAddress} editable={false} />
              <AppTextInput label="Billing Address" value={poDetails.billingAddress} editable={false} />
              <AppTextInput label="Remarks" value={poDetails.remarks} onChangeText={(v) => handlePoDetailChange('remarks', v)} multiline />
            </View>

            {/* --- Product Selection Section --- */}
            <View style={styles.sectionHeader}>
              <Ionicons name="cube-outline" size={20} color="#333" />
              <Text style={styles.sectionHeaderText}>Product Selection</Text>
            </View>
            <View style={styles.formContainer}>
              <AppTextInput label="Product Code" value={productForm.productCode} onChangeText={(v) => handleProductFormChange('productCode', v)} required />
              <AppTextInput label="Product Name" value={productForm.productName} onChangeText={(v) => handleProductFormChange('productName', v)} />
              <AppTextInput label="Quantity" value={productForm.quantity} onChangeText={(v) => handleProductFormChange('quantity', v)} keyboardType="numeric" required />
              <AppTextInput label="Unit Price" value={productForm.unitPrice} onChangeText={(v) => handleProductFormChange('unitPrice', v)} keyboardType="numeric" required />
              <AppTextInput label="UOM" value={productForm.uom} editable={false} />
              <AppTextInput label="Total Amount" value={productForm.totalAmount} editable={false} />
              <AppTextInput label="Description" value={productForm.description} onChangeText={(v) => handleProductFormChange('description', v)} multiline />
              <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>

            {/* --- Product List Table --- */}
            <View style={styles.productTableContainer}>
              <AppTable
                columns={productTableColumns}
                data={productList}
                message="No products added yet"
              />
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>₹{productList.reduce((sum, p) => sum + (parseFloat(p.totalAmount) || 0), 0).toFixed(2)}</Text>
              </View>
            </View>

            {/* --- Save/Cancel Buttons --- */}
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity style={[styles.actionButton, styles.cancelButton]} onPress={handleCancel}>
                <Ionicons name="close-outline" size={20} color="#fff" />
                <Text style={styles.actionButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.saveButton]} onPress={handleSave}>
                <Ionicons name="save-outline" size={20} color="#fff" />
                <Text style={styles.actionButtonText}>Save Purchase Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    scrollViewContent: { flexGrow: 1, padding: 15, backgroundColor: '#f5f5f5' },
    container: { backgroundColor: '#fff', borderRadius: 8, padding: 15 },
    screenTitle: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 20 },
    sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 10 },
    sectionHeaderText: { marginLeft: 10, fontSize: 18, fontWeight: '600', color: '#555' },
    formContainer: { marginBottom: 20 },
    inputGroup: { marginBottom: 15 },
    label: { fontSize: 14, color: '#333', marginBottom: 5, fontWeight: '500' },
    radioGroup: { flexDirection: 'row' },
    addButton: { backgroundColor: '#6200EE', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    productTableContainer: { borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, overflow: 'hidden', marginBottom: 20 },
    totalRow: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderTopWidth: 1, borderTopColor: '#e0e0e0', backgroundColor: '#f5f5f5' },
    totalLabel: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    totalValue: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    actionButtonsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    actionButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
    actionButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
    cancelButton: { backgroundColor: '#777' },
    saveButton: { backgroundColor: '#6200EE' },
});

export default CreatePurchaseOrder;
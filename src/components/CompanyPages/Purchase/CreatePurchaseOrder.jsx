import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ERPContext from '../../../Context/ERPContext';
import LabeledUnderlineInput from '../../../ReusableComponents/LabeledUnderlineInput';
import AppDatePicker from '../../../ReusableComponents/AppDatePicker';
import RadioButton from '../../../ReusableComponents/RadioButton';
import AppTable from '../../../ReusableComponents/AppTable';

const CreatePurchaseOrder = () => {
  const navigation = useNavigation();
  const { poDet, setPoDet, productList, setProductList ,createPO} = useContext(ERPContext);

  // --- Local product form state for input fields ---
  const [productForm, setProductForm] = useState({
  productCode: '',   // for display
  productName: '',
  quantity: '',
  unitPrice: '',
  uom: 'PCS',
  totalAmount: '',
  description: '',
  itemId: '',        // actual item_id for API
});

  // --- Handlers ---
 const handlePoDetChange = (key, value, id) => {
  setPoDet(prev => ({
    ...prev,
    [key]: value,   // for UI display
  }));
};


  const handleProductFormChange = (key, value) => {
  setProductForm(prev => {
    const updated = { ...prev, [key]: value };

    // Calculate total amount if quantity & unitPrice are present
    if (updated.quantity && updated.unitPrice) {
      updated.totalAmount = (parseFloat(updated.quantity) * parseFloat(updated.unitPrice)).toFixed(2);
    }

    // If user selects a product code from a list, also set the corresponding itemId

    return updated;
  });
};


  const handleAddProduct = () => {
  if (!productForm.itemId || !productForm.quantity || !productForm.unitPrice) {
    Alert.alert('Validation Error', 'Product Code, Quantity, and Unit Price are required.');
    return;
  }

  // Add product with both display and ID
  setProductList(prev => [
    ...prev, 
    { 
      ...productForm, 
      id: Date.now() // unique for UI table
    }
  ]);

  // Reset form (keep fields for UI)
  setProductForm({
    productCode: '',
    productName: '',
    quantity: '',
    unitPrice: '',
    uom: 'PCS',
    totalAmount: '',
    description: '',
    itemId: '',
  });
};


  const handleDeleteProduct = (id) => {
    setProductList(prev => prev.filter(p => p.id !== id));
  };

  const handleSave = async () => {
  if (!productList.length) {
    Alert.alert('Error', 'Please add at least one product.');
    return;
  }

  const line_items = productList.map(p => ({
    item_id: p.itemId, 
    item_name:p.productName,          // use internal ID
    rate: parseFloat(p.unitPrice),
    quantity: parseFloat(p.quantity),
    tax_id: "",                  // optional
  }));

  const payload = {
    vendor_id: poDet.supplierId,  // use internal supplierId
    date: poDet.poDate,
    due_date: poDet.deliveryDate,
    reference_number: poDet.poReferenceNo,
    line_items,
    exchange_rate: 1,
    notes: poDet.remarks,
    terms: poDet.paymentTerms,
  };

  try {
    const response = await createPO(payload);
    if (response.success) {
      Alert.alert('Success', 'Purchase Order created successfully!');
      setPoDet({
        distributorBranchCode: "",
        distributorBranchName: "",
        companyName: "",
        supplierName: "",
        supplierId: "",
        poReferenceNo: "",
        poDate: "",
        companyPoNo: "",
        companyPoDate: "",
        tentativeOrderValue: "",
        deliveryDate: "",
        paymentTerms: "",
        status: "Active",
        shippingAddress: "",
        billingAddress: "",
        remarks: "",
      });
      setProductList([]);
    }
  } catch (err) {
    console.error(err);
    Alert.alert('Error', 'Failed to create Purchase Order.');
  }
};



  const handleCancel = () => {
    navigation.goBack();
  };

  // --- Product Table Columns ---
  const productTableColumns = [
    { header: 'CODE', key: 'productCode', flex: 2 },
    { header: 'NAME', key: 'productName', flex: 2.5 },
    { header: 'QTY', key: 'quantity', flex: 1.5 },
    { header: 'UNIT PRICE', key: 'unitPrice', flex: 2 },
    { header: 'UOM', key: 'uom', flex: 1 },
    { header: 'TOTAL', key: 'totalAmount', flex: 2 },
    { header: 'DESC', key: 'description', flex: 3 },
    {
      header: 'ACTION',
      key: 'action',
      flex: 1,
      renderCell: (item) => (
        <TouchableOpacity onPress={() => handleDeleteProduct(item.id)}>
          <Ionicons name="trash-outline" size={20} color="#dc2626" />
        </TouchableOpacity>
      ),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.screenTitle}>Create Purchase Order</Text>

          {/* --- Purchase Order Details --- */}
          <View style={styles.sectionHeader}>
            <Ionicons name="document-text-outline" size={20} color="#333" />
            <Text style={styles.sectionHeaderText}>Purchase Order Details</Text>
          </View>
          <View style={styles.formContainer}>
            <LabeledUnderlineInput label="Distributor Branch Code" value={poDet.distributorBranchCode} editable={false} />
            <LabeledUnderlineInput label="Distributor Branch Name" value={poDet.distributorBranchName} editable={false} />
            <LabeledUnderlineInput label="Company Name" value={poDet.companyName} editable={false} />
            <LabeledUnderlineInput label="Supplier Name" value={poDet.supplierId} onChangeText={v => handlePoDetChange('supplierId', v)} />
            <LabeledUnderlineInput
              label="PO Reference No"
              value={poDet.poReferenceNo}
              onChangeText={v => handlePoDetChange('poReferenceNo', v)}
            />
            <AppDatePicker
              label="PO Date"
              value={poDet.poDate}
              onChange={v => handlePoDetChange('poDate', v)}
            />
            <LabeledUnderlineInput
              label="Company PO No"
              value={poDet.companyPoNo}
              onChangeText={v => handlePoDetChange('companyPoNo', v)}
            />
            <AppDatePicker
              label="Company PO Date"
              value={poDet.companyPoDate}
              onChange={v => handlePoDetChange('companyPoDate', v)}
            />
            <LabeledUnderlineInput
              label="Tentative Order Value"
              value={poDet.tentativeOrderValue}
              onChangeText={v => handlePoDetChange('tentativeOrderValue', v)}
            />
            <AppDatePicker
              label="Delivery Date"
              value={poDet.deliveryDate}
              onChange={v => handlePoDetChange('deliveryDate', v)}
            />
            <LabeledUnderlineInput
              label="Payment Terms"
              value={poDet.paymentTerms}
              onChangeText={v => handlePoDetChange('paymentTerms', v)}
            />

            {/* Status Radio Buttons */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Status</Text>
              <View style={styles.radioGroup}>
                <RadioButton label="Active" selected={poDet.status === 'Active'} onSelect={() => handlePoDetChange('status', 'Active')} />
                <RadioButton label="Inactive" selected={poDet.status === 'Inactive'} onSelect={() => handlePoDetChange('status', 'Inactive')} />
              </View>
            </View>

            <LabeledUnderlineInput label="Shipping Address" value={poDet.shippingAddress} editable={false} />
            <LabeledUnderlineInput label="Billing Address" value={poDet.billingAddress} editable={false} />
            <LabeledUnderlineInput
              label="Remarks"
              value={poDet.remarks}
              onChangeText={v => handlePoDetChange('remarks', v)}
              multiline
            />
          </View>

          {/* --- Product Selection --- */}
          <View style={styles.sectionHeader}>
            <Ionicons name="cube-outline" size={20} color="#333" />
            <Text style={styles.sectionHeaderText}>Product Selection</Text>
          </View>
          <View style={styles.formContainer}>
            <LabeledUnderlineInput label="Product Code" value={productForm.itemId} onChangeText={v => handleProductFormChange('itemId', v)} />
            <LabeledUnderlineInput label="Product Name" value={productForm.productName} onChangeText={v => handleProductFormChange('productName', v)} />
            <LabeledUnderlineInput label="Quantity" value={productForm.quantity} onChangeText={v => handleProductFormChange('quantity', v)} />
            <LabeledUnderlineInput label="Unit Price" value={productForm.unitPrice} onChangeText={v => handleProductFormChange('unitPrice', v)} />
            <LabeledUnderlineInput label="UOM" value={productForm.uom} editable={false} />
            <LabeledUnderlineInput label="Total Amount" value={productForm.totalAmount} editable={false} />
            <LabeledUnderlineInput label="Description" value={productForm.description} onChangeText={v => handleProductFormChange('description', v)} multiline />
            <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
              <Text style={styles.addButtonText}>Add Product</Text>
            </TouchableOpacity>
          </View>

          {/* --- Product Table --- */}
          <View style={styles.productTableContainer}>
            <AppTable columns={productTableColumns} data={productList} message="No products added yet" />
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>
                ₹{productList.reduce((sum, p) => sum + (parseFloat(p.totalAmount) || 0), 0).toFixed(2)}
              </Text>
            </View>
          </View>

          {/* --- Save / Cancel Buttons --- */}
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

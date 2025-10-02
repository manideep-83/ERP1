import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTable from '../../../ReusableComponents/AppTable'; // Assuming this path is correct

const CreateBilling = () => {
    // --- State for Header/Invoice Information ---
    const [orderNo, setOrderNo] = useState('');
    const [route, setRoute] = useState('');
    const [salesman, setSalesman] = useState('');
    const [retailerName, setRetailerName] = useState('');

    // --- State for Product Search/Input ---
    const [productSearch, setProductSearch] = useState('');
    const [companyProductCode, setCompanyProductCode] = useState('');
    const [uom, setUom] = useState('');
    const [orderQty, setOrderQty] = useState('');

    // --- State for Summary/Discount ---
    const [cashDiscountChecked, setCashDiscountChecked] = useState(false);
    const [cashDiscountAmount, setCashDiscountAmount] = useState('0.00');
    const [cashDiscountPercent, setCashDiscountPercent] = useState('0.00');
    const [summaryRemarks, setSummaryRemarks] = useState('');

    // Mock Data for Pickers
    const orderNoOptions = ["ORD-001", "ORD-002", "ORD-003"];
    const routeOptions = ["RT-A", "RT-B", "RT-C"];
    const salesmanOptions = ["S-001", "S-002", "S-003"];
    const uomOptions = ["PCS", "BOX", "CASE"];

    // Mock Data for Table (Items added to the invoice)
    const tableData = [
        { id: 1, productCode: 'P-101', productName: 'Pepsi Can', batch: 'B123', orderQty: 10 },
        { id: 2, productCode: 'P-102', productName: 'Coke Bottle', batch: 'B456', orderQty: 5 },
    ];

    // Table Column Configuration
    const columns = [
        { header: 'Product Code', key: 'productCode', flex: 2 },
        { header: 'Product Name', key: 'productName', flex: 3 },
        { header: 'Batch', key: 'batch', flex: 1.5 },
        { header: 'Order Qty', key: 'orderQty', flex: 1.5 },
        {
            header: 'Action',
            key: 'action',
            flex: 1.5,
            renderCell: (item) => (
                <View style={styles.actionCell}>
                    <TouchableOpacity onPress={() => console.log(`View product ${item.productCode}`)} style={{ marginRight: 10 }}>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(`Delete product ${item.productCode}`)}>
                    </TouchableOpacity>
                </View>
            )
        }
    ];

    // Mock Data for calculated amounts (Summary section)
    const calculatedAmounts = {
        schemeDiscAmount: '0.00',
        totalInvoiceQuantity: '0',
        creditNoteAdjustment: '0.00',
        debtNoteAdjustment: '0.00',
        grossAmount: '0.00',
        taxableGrossAmt: '0.00',
        totalAddition: '0.00',
        totalDeduction: '0.00',
        netAmount: '0.00',
    };

    const handleViewScheme = () => console.log('Viewing schemes...');
    const handleCreditDebitAdjustments = () => console.log('Handling Credit/Debit Adjustments...');
    const handleSave = () => console.log('Saving invoice...');
    const handleCancel = () => console.log('Cancelling invoice...');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create New</Text>
            </View>

            {/* --- Main Invoice Form Container --- */}
            <View style={styles.formContainer}>
                <View style={styles.rowTitle}>
                    <Text style={styles.sectionTitle}>Invoice</Text>
                    <Text style={styles.sectionTitle}>Additinal information</Text>
                </View>

                {/* Invoice Header Rows (Order No, Salesman, Product Search) */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Order No</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={orderNo}
                                onValueChange={(itemValue) => setOrderNo(itemValue)}
                            >
                                <Picker.Item label="select" value="" />
                                {orderNoOptions.map((option, index) => (
                                    <Picker.Item key={index} label={option} value={option} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Rout</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={route}
                                onValueChange={(itemValue) => setRoute(itemValue)}
                            >
                                <Picker.Item label="select" value="" />
                                {routeOptions.map((option, index) => (
                                    <Picker.Item key={index} label={option} value={option} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Salesman</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={salesman}
                                onValueChange={(itemValue) => setSalesman(itemValue)}
                            >
                                <Picker.Item label="select" value="" />
                                {salesmanOptions.map((option, index) => (
                                    <Picker.Item key={index} label={option} value={option} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Retailer Name</Text>
                        <TextInput style={styles.input} value={retailerName} onChangeText={setRetailerName} placeholder="Coustomer Search" />
                    </View>
                </View>

                {/* Product Search & Input Fields */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Product Search</Text>
                        <TextInput style={styles.input} value={productSearch} onChangeText={setProductSearch} />
                    </View>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Input Text: Product *</Text>
                        <TextInput style={styles.input} value={companyProductCode} onChangeText={setCompanyProductCode} placeholder="Enter at least 3 characters" />
                    </View>
                </View>

                {/* Product Input Row (CS/PCS/UPC, Stock, UOM, Order Qty) */}
                <View style={styles.inputRow}>
                    <View style={styles.inputGroupTiny}>
                        <Text style={styles.label}>CS/PCS/UPC</Text>
                        <Text style={styles.displayValue}>0</Text>
                    </View>
                    <View style={styles.inputGroupTiny}>
                        <Text style={styles.label}>Tot MRP Stock</Text>
                        <Text style={styles.displayValue}>0</Text>
                    </View>
                    <View style={styles.inputGroupTiny}>
                        <Text style={styles.label}>Stock On Hand</Text>
                        <Text style={styles.displayValue}>0</Text>
                    </View>
                    <View style={styles.inputGroupTiny}>
                        <Text style={styles.label}>UOM *</Text>
                        <View style={[styles.pickerContainer, { height: 30, paddingHorizontal: 0 }]}>
                             <Picker
                                selectedValue={uom}
                                onValueChange={(itemValue) => setUom(itemValue)}
                            >
                                <Picker.Item label="select" value="" />
                                {uomOptions.map((option, index) => (
                                    <Picker.Item key={index} label={option} value={option} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.inputGroupTiny}>
                        <Text style={styles.label}>Order Qty *</Text>
                        <TextInput style={styles.input} value={orderQty} onChangeText={setOrderQty} keyboardType="numeric" />
                    </View>
                </View>
            </View>
            
            {/* --- AppTable Component --- */}
            <AppTable
                columns={columns}
                data={tableData}
                message={tableData.length === 0 ? 'No matching record(s) found' : `Total Products: ${tableData.length}`}
            />

            {/* --- Summary Section --- */}
            <View style={styles.summaryContainer}>
                <View style={styles.summaryHeader}>
                    <Text style={styles.summaryTitle}>Summary</Text>
                </View>

                {/* Cash Discount */}
                <View style={styles.discountRow}>
                    <View style={styles.discountCheckboxGroup}>
                        <TouchableOpacity 
                            style={styles.checkbox} 
                            onPress={() => setCashDiscountChecked(!cashDiscountChecked)}
                        >
                        </TouchableOpacity>
                        <Text style={styles.discountLabel}>Invoice Special Cash Discount</Text>
                    </View>
                </View>
                <View style={styles.discountInputRow}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Cash Discount Amount</Text>
                        <TextInput style={[styles.input, { borderBottomColor: '#666' }]} value={cashDiscountAmount} editable={cashDiscountChecked} keyboardType="numeric" />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>%: {cashDiscountPercent}</Text>
                        <TextInput style={[styles.input, { borderBottomColor: '#666' }]} value={cashDiscountPercent} editable={false} />
                    </View>
                </View>

                <View style={[styles.inputGroupFull, { marginBottom: 15 }]}>
                    <Text style={styles.label}>Remarks</Text>
                    <TextInput style={styles.input} value={summaryRemarks} onChangeText={setSummaryRemarks} />
                </View>

                {/* Calculated Amounts */}
                <View style={styles.calculatedGrid}>
                    <View style={styles.calculatedColumn}>
                        <Text style={styles.calculatedText}>Scheme Disc Amount: <Text style={styles.calculatedValue}>{calculatedAmounts.schemeDiscAmount}</Text></Text>
                        <Text style={styles.calculatedText}>Total Invoice Quantity: <Text style={styles.calculatedValue}>{calculatedAmounts.totalInvoiceQuantity}</Text></Text>
                        <Text style={styles.calculatedText}>Credit Note Adjustment: <Text style={styles.calculatedValue}>{calculatedAmounts.creditNoteAdjustment}</Text></Text>
                        <Text style={styles.calculatedText}>Debit Note Adjustment: <Text style={styles.calculatedValue}>{calculatedAmounts.debtNoteAdjustment}</Text></Text>
                    </View>
                    <View style={styles.calculatedColumn}>
                        <Text style={styles.calculatedText}>Gross Amount: <Text style={styles.calculatedValue}>{calculatedAmounts.grossAmount}</Text></Text>
                        <Text style={styles.calculatedText}>Taxable Gross Amt: <Text style={styles.calculatedValue}>{calculatedAmounts.taxableGrossAmt}</Text></Text>
                        <Text style={styles.calculatedText}>Total Addition: <Text style={styles.calculatedValue}>{calculatedAmounts.totalAddition}</Text></Text>
                        <Text style={styles.calculatedText}>Total Deduction(-): <Text style={styles.calculatedValue}>{calculatedAmounts.totalDeduction}</Text></Text>
                        <View style={styles.netAmountBox}>
                            <Text style={styles.netAmountText}>Net Amount: <Text style={styles.netAmountValue}>{calculatedAmounts.netAmount}</Text></Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* --- Action Buttons --- */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]} onPress={handleViewScheme}>
                    <Text style={styles.secondaryButtonText}>View Scheme</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]} onPress={handleCreditDebitAdjustments}>
                    <Text style={styles.secondaryButtonText}>Credit/Debit Adjustments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.saveButton]} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.secondaryButton, styles.cancelButton]} onPress={handleCancel}>
                    <Text style={styles.secondaryButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    header: {
        paddingVertical: 15,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1f3a8a',
        marginLeft: 20,
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
    },
    rowTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f3a8a',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputGroup: {
        flex: 1,
    },
    inputGroupMarginRight: {
        marginRight: 10, // Reduced margin
    },
    inputGroupTiny: {
        width: '18%', // Space for 5 columns roughly
        marginRight: '2%',
    },
    inputGroupFull: {
        flex: 1,
    },
    label: {
        fontSize: 12,
        color: '#666',
        marginBottom: 2,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: Platform.OS === 'ios' ? 8 : 4,
        fontSize: 16,
    },
    displayValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: Platform.OS === 'ios' ? 8 : 4,
    },
    pickerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
        height: 40,
        // Added horizontal padding to counter default picker padding
        paddingHorizontal: Platform.OS === 'ios' ? 0 : -8, 
    },
    picker: {
        height: 40,
        width: '100%',
        backgroundColor: 'transparent', // Good practice for visibility
    },
    actionCell: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // --- Summary Styles ---
    summaryContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
    },
    summaryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 5,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f3a8a',
    },
    discountRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    discountCheckboxGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 10,
    },
    discountLabel: {
        fontSize: 16,
        color: '#333',
    },
    discountInputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    calculatedGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10,
    },
    calculatedColumn: {
        width: '49%',
    },
    calculatedText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    calculatedValue: {
        color: '#1f3a8a',
        fontWeight: '600',
    },
    netAmountBox: {
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#f9f9f9', // Added light background for emphasis
        padding: 5,
        borderRadius: 5,
    },
    netAmountText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    netAmountValue: {
        color: '#dc2626',
    },
    // --- Action Button Styles ---
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginBottom: 20,
    },
    actionButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    saveButton: {
        backgroundColor: '#1f3a8a', // Primary blue
    },
    secondaryButton: {
        backgroundColor: '#f8f8f8', // Light background for secondary actions
        borderWidth: 1,
        borderColor: '#ccc',
    },
    cancelButton: {
        // Inherits from secondaryButton
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    secondaryButtonText: {
        color: '#1f3a8a',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default CreateBilling;

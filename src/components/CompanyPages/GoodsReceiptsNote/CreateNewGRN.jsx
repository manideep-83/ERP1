import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; // Retaining Picker for potential future use
import AppTable from '../../../ReusableComponents/AppTable'; // Assuming this path is correct

const CreateNewGRN = () => {
    // --- State for GRN Header Form Fields ---
    const [distributorBranchCode, setDistributorBranchCode] = useState('16222');
    const [purchaseOrderNo, setPurchaseOrderNo] = useState('16222');
    const [transporterName, setTransporterName] = useState('');
    const [distributorBranchName, setDistributorBranchName] = useState('16222-SRI AGENCY');
    const [companyInvoiceNo, setCompanyInvoiceNo] = useState('');
    const [lrNo, setLrNo] = useState('');
    const [companyName, setCompanyName] = useState('Bahupada');
    const [invoiceDate, setInvoiceDate] = useState('08/09/2025');
    const [lrDate, setLrDate] = useState('08/09/2025');
    const [supplierName, setSupplierName] = useState('Bahupada');
    const [goodsReceiptDate, setGoodsReceiptDate] = useState('08/09/2025');
    const [handlingCharges, setHandlingCharges] = useState('');
    const [godownName, setGodownName] = useState('Main Godown');
    const [manualGoodsReceiptDate, setManualGoodsReceiptDate] = useState('08/09/2025');
    const [invoiceType, setInvoiceType] = useState('GST');
    const [relatedParty, setRelatedParty] = useState('No'); // Radio button state

    // --- State for Product Search Fields ---
    const [companyProductCode, setCompanyProductCode] = useState('');
    const [productInput, setProductInput] = useState('');
    const [grnUom, setGrnUom] = useState('');
    const [productCode, setProductCode] = useState('');
    const [stockOnHand, setStockOnHand] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [mrp, setMrp] = useState('');
    const [invoiceQty, setInvoiceQty] = useState('');
    const [receivedQty, setReceivedQty] = useState('');
    const [offerQty, setOfferQty] = useState('');
    const [schemeDiscPerc, setSchemeDiscPerc] = useState('');
    const [schemeDiscAmt, setSchemeDiscAmt] = useState('');

    // --- Table Data (Products Added) ---
    const tableData = [
        // No data found with given criteria
    ];

    // --- Summary Totals Mock Data ---
    const summaryTotals = {
        totalGrossAmount: '0.00',
        totalTaxAmount: '0.00',
        totalDiscount: '0.00',
        invoiceDiscount: '0.00',
        netAmount: '0.00',
        invoiceNetPayable: '0.00',
        difference: '0.00',
        totalAdjustmentAmount: '0.00',
    };

    // Table Column Configuration (Wide table for detailed product input)
    const columns = [
        { header: 'Distr Prod Code', key: 'distrProdCode', flex: 2 },
        { header: 'Product', key: 'product', flex: 2.5 },
        { header: 'Batch', key: 'batch', flex: 1.5 },
        { header: 'CS/PCS/UPC', key: 'cspcsupc', flex: 1.5 },
        { header: 'UOM', key: 'uom', flex: 1 },
        { header: 'Inv Qty', key: 'invQty', flex: 1.5 },
        { header: 'Recv Qty', key: 'recvQty', flex: 1.5 },
        { header: 'Offer Qty', key: 'offerQty', flex: 1.5 },
        { header: 'MRP', key: 'mrp', flex: 1.5 },
        { header: 'Pur Rate', key: 'purRate', flex: 1.5 },
        { header: 'Gross Amt', key: 'grossAmt', flex: 2 },
        { header: 'Tax Amt', key: 'taxAmt', flex: 1.5 },
        { header: 'Net Amt', key: 'netAmt', flex: 2 },
        { header: 'Action', key: 'action', flex: 1.5, renderCell: () => (
            <View style={styles.actionCell}>
                <Ionicons name="eye-outline" size={20} color="#007bff" style={{ marginRight: 5 }} />
                <Ionicons name="trash-outline" size={20} color="#dc2626" />
            </View>
        )}
    ];

    const handleAdd = () => console.log('Adding product to GRN...');
    const handleSave = () => console.log('Saving GRN...');
    const handleTaxInfo = () => console.log('Viewing Tax Info...');
    const handleDiscount = () => console.log('Applying Discount...');
    const handleDiscard = () => console.log('Discarding changes...');

    // Helper functions (Simplified from previous implementation, assuming standard inputs/displays)
    const renderDisplay = (label, value) => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.displayValue}>{value}</Text>
        </View>
    );

    const renderInput = (label, value, setter, placeholder = '', keyboardType = 'default') => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} value={value} onChangeText={setter} keyboardType={keyboardType} placeholder={placeholder} />
        </View>
    );

    // Custom Radio Button Renderer for Related Party (Yes/No)
    const renderRelatedPartyRadio = (label, value) => (
        <TouchableOpacity style={styles.radioOption} onPress={() => setRelatedParty(value)}>
            <View style={styles.customRadio}>
                <View style={styles.radioOutline}>
                    {relatedParty === value && <View style={styles.radioFill} />}
                </View>
            </View>
            <Text style={styles.radioLabel}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create New GRN</Text>
            </View>

            {/* --- GRN HEADER Form Container (Three Columns) --- */}
            <View style={styles.formContainer}>
                
                {/* Row 1: Distributor Branch Code | Purchase Order No. | Status */}
                <View style={styles.row}>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderDisplay('Distributor Branch Code', distributorBranchCode)}
                    </View>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderDisplay('Purchase Order No.', purchaseOrderNo)}
                    </View>
                    <View style={styles.inputGroupThird}>
                        <Text style={styles.label}>Distributor Branch Name</Text>
                        <Text style={styles.displayValue}>{distributorBranchName}</Text>
                    </View>
                </View>

                {/* Row 2: Transporter Name | LR No | Company Invoice No */}
                <View style={styles.row}>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderInput('Transporter Name', transporterName, setTransporterName)}
                    </View>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderInput('LR No', lrNo, setLrNo)}
                    </View>
                    <View style={styles.inputGroupThird}>
                        {renderInput('Company Invoice No', companyInvoiceNo, setCompanyInvoiceNo)}
                    </View>
                </View>
                
                {/* Row 3: Company Name | Invoice Date | Supplier Name */}
                <View style={styles.row}>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderDisplay('Company Name', companyName)}
                    </View>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderDisplay('Invoice Date', invoiceDate)}
                    </View>
                    <View style={styles.inputGroupThird}>
                        {renderDisplay('Supplier Name', supplierName)}
                    </View>
                </View>
                
                {/* Row 4: LR Date | Goods Receipt Date | Handling Charges */}
                <View style={styles.row}>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderDisplay('LR Date', lrDate)}
                    </View>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderDisplay('Goods Receipt Date', goodsReceiptDate)}
                    </View>
                    <View style={styles.inputGroupThird}>
                        {renderInput('Handling Charges', handlingCharges, setHandlingCharges, '0.00', 'numeric')}
                    </View>
                </View>

                {/* Row 5: Godown Name | Manual Goods Receipt Date | Related Party */}
                <View style={styles.row}>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderDisplay('Godown Name', godownName)}
                    </View>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderDisplay('Manual Goods Receipt Date', manualGoodsReceiptDate)}
                    </View>
                    <View style={styles.inputGroupThird}>
                        <Text style={styles.label}>Related Party</Text>
                        <View style={styles.radioGroup}>
                            {renderRelatedPartyRadio('Yes', 'Yes')}
                            {renderRelatedPartyRadio('No', 'No')}
                        </View>
                    </View>
                </View>
                
                {/* Row 6: Invoice Type */}
                <View style={[styles.row, { marginBottom: 0 }]}>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]}>
                        {renderDisplay('Invoice Type', invoiceType)}
                    </View>
                    <View style={[styles.inputGroupThird, styles.inputGroupMarginRight]} />
                    <View style={styles.inputGroupThird} />
                </View>

            </View>

            {/* --- Product Search On Section --- */}
            <View style={styles.searchOnContainer}>
                <Text style={styles.sectionHeader}>Search On</Text>
                
                {/* Row 1: Product Search | Product Input */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Product Search', companyProductCode, setCompanyProductCode, 'Company Product Code')}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Input Text - Product', productInput, setProductInput, 'Enter atleast 3 characters')}
                    </View>
                </View>

                {/* Row 2: GRN UOM | Product Code */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('GRN UOM', grnUom, setGrnUom)}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Product Code', productCode, setProductCode)}
                    </View>
                </View>

                {/* Row 3: Stock on Hand | Expiry Date */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Stock on Hand', stockOnHand, setStockOnHand, '0.00', 'numeric')}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Expiry Date', expiryDate, setExpiryDate, '08/09/2025')}
                    </View>
                </View>
                
                {/* Row 4: MRP | Invoice Qty */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('MRP', mrp, setMrp, '0.00', 'numeric')}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Invoice Qty', invoiceQty, setInvoiceQty, '0', 'numeric')}
                    </View>
                </View>
                
                {/* Row 5: Received Qty | Offer Qty */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Received Qty', receivedQty, setReceivedQty, '0', 'numeric')}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Offer Qty', offerQty, setOfferQty, '0', 'numeric')}
                    </View>
                </View>

                {/* Row 6: Scheme Disc Perc | Scheme Disc Amt */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        {renderInput('Scheme Disc Perc', schemeDiscPerc, setSchemeDiscPerc, '0.00', 'numeric')}
                    </View>
                    <View style={styles.inputGroup}>
                        {renderInput('Scheme Disc Amt', schemeDiscAmt, setSchemeDiscAmt, '0.00', 'numeric')}
                    </View>
                </View>
                
                <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>

            {/* --- AppTable Component (Product Listing) --- */}
            <View style={styles.tableContainer}>
                <AppTable
                    columns={columns}
                    data={tableData}
                    message={tableData.length === 0 ? 'No data found with given Criteria' : `${tableData.length} products found`}
                />
            </View>
            
            {/* --- Summary Section --- */}
            <View style={styles.summaryContainer}>
                <Text style={styles.sectionHeader}>Summary</Text>
                <View style={styles.summaryContent}>
                    <View style={styles.summaryColumn}>
                        <Text style={styles.summaryText}>Total Gross Amount : <Text style={styles.summaryValue}>{summaryTotals.totalGrossAmount}</Text></Text>
                        <Text style={styles.summaryText}>Total Discount : <Text style={styles.summaryValue}>{summaryTotals.totalDiscount}</Text></Text>
                        <Text style={styles.summaryText}>Invoice Discount : <Text style={styles.summaryValue}>{summaryTotals.invoiceDiscount}</Text></Text>
                        <Text style={styles.summaryText}>Net Amount : <Text style={styles.summaryValue}>{summaryTotals.netAmount}</Text></Text>
                        <Text style={styles.summaryText}>Invoice Net Payable : <Text style={styles.summaryValue}>{summaryTotals.invoiceNetPayable}</Text></Text>
                    </View>
                    <View style={styles.summaryColumn}>
                        <Text style={styles.summaryText}>Total Tax Amount : <Text style={styles.summaryValue}>{summaryTotals.totalTaxAmount}</Text></Text>
                        <Text style={styles.summaryText}>Total Deduction : <Text style={styles.summaryValue}>{summaryTotals.totalDiscount}</Text></Text>
                        <Text style={styles.summaryText}>Difference : <Text style={styles.summaryValue}>{summaryTotals.difference}</Text></Text>
                        <Text style={styles.summaryText}>Total Adjustment Amount : <Text style={styles.summaryValue}>{summaryTotals.totalAdjustmentAmount}</Text></Text>
                    </View>
                </View>
            </View>


            {/* --- Action Buttons --- */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.actionButton, styles.saveButton]} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.taxInfoButton]} onPress={handleTaxInfo}>
                    <Text style={styles.buttonText}>Tax Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.discountButton]} onPress={handleDiscount}>
                    <Text style={styles.buttonText}>Discount</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.discardButton]} onPress={handleDiscard}>
                    <Text style={styles.buttonText}>Discard</Text>
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1f3a8a',
        marginLeft: 10,
    },
    // --- Form Containers ---
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
    searchOnContainer: {
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputGroup: {
        flex: 1,
    },
    inputGroupThird: {
        flex: 1, // Ensures 3 columns of equal width in the main form
    },
    inputGroupMarginRight: {
        marginRight: 10,
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
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f3a8a',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 5,
    },
    // --- Radio Buttons ---
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    customRadio: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    radioOutline: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#1f3a8a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioFill: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#1f3a8a',
    },
    radioLabel: {
        fontSize: 14,
        color: '#333',
    },
    // --- Product Search/Add Button ---
    addButton: {
        backgroundColor: '#1f3a8a',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // --- Table & Summary ---
    tableContainer: {
        marginBottom: 20,
    },
    actionCell: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    summaryContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    summaryColumn: {
        width: '49%',
    },
    summaryText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
        textAlign: 'right',
    },
    summaryValue: {
        color: '#333',
        fontWeight: 'bold',
    },
    // --- Action Buttons ---
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginBottom: 20,
        marginTop: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        flex: 1,
        justifyContent: 'center',
    },
    saveButton: {
        backgroundColor: '#1f3a8a',
    },
    taxInfoButton: {
        backgroundColor: '#5cb85c', // Greenish color
    },
    discountButton: {
        backgroundColor: '#ffc107', // Yellowish/Orange color
    },
    discardButton: {
        backgroundColor: '#dc2626',
    },
    buttonIcon: {
        marginRight: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CreateNewGRN;

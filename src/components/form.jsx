import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FormComp = () => {
  const [form, setForm] = useState({
    distributorBranchCode: '16222',
    purchaseOrderNo: '16222',
    transporterName: '',
    distributorBranchName: '16222 - SRI AGENCY',
    companyInvoiceNo: '',
    lrNo: '',
    companyName: 'Bahupada',
    invoiceDate: '08/09/2025',
    lrDate: '08/09/2025',
    supplierName: 'Bahupada',
    goodsReceiptDate: '08/09/2025',
    handlingCharges: '',
    godownName: 'Main Godown',
    manualGoodsReceipt: '08/09/2025',
    invoiceType: 'GST',
    relatedPartyYes: false,
  });

  const setField = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Section: Create New GRN */}
        <SectionCard title1="Create New" title2="GRN">
          <View style={styles.row}>
            <LabeledUnderlineInput label="Distributor Branch Code" value={form.distributorBranchCode} editable={false} />
            <LabeledUnderlineInput label="Purchase Order No." value={form.purchaseOrderNo} editable={false} />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Transporter Name" value={form.transporterName} onChangeText={v => setField('transporterName', v)} />
            <LabeledUnderlineInput label="Distributor Branch Name" value={form.distributorBranchName} editable={false} />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Company Invoice No" value={form.companyInvoiceNo} onChangeText={v => setField('companyInvoiceNo', v)} />
            <LabeledUnderlineInput label="LR No" value={form.lrNo} onChangeText={v => setField('lrNo', v)} />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Company Name" value={form.companyName} editable={false} />
            <LabeledUnderlineInput label="Invoice Date" value={form.invoiceDate} editable={false} />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="LR Date" value={form.lrDate} editable={false} />
            <LabeledUnderlineInput label="Supplier Name" value={form.supplierName} editable={false} />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Goods Receipt Date" value={form.goodsReceiptDate} editable={false} />
            <LabeledUnderlineInput label="Handling Charges" value={form.handlingCharges} onChangeText={v => setField('handlingCharges', v)} />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Godown Name" value={form.godownName} editable={false} />
            <LabeledUnderlineInput label="Manual Goods Receipt" value={form.manualGoodsReceipt} editable={false} />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Invoice Type" value={form.invoiceType} />
            <RelatedPartyToggle value={form.relatedPartyYes} onToggle={() => setField('relatedPartyYes', !form.relatedPartyYes)} />
          </View>
        </SectionCard>

        {/* Section: Search On */}
        <SectionCard title1="Search" title2="On">
          <View style={styles.row}>
            <LabeledUnderlineInput label="Product Search" placeholder="Company/Product Code" />
            <LabeledUnderlineInput label="Input Text - Product" placeholder="Enter atleast 3 characters" />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="GRN UOM" />
            <LabeledUnderlineInput label="Product Code" />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Stock on Hand" />
            <LabeledUnderlineInput label="Expiry Date" />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="MRP" />
            <LabeledUnderlineInput label="Invoice Qty" />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Received Qty" />
            <LabeledUnderlineInput label="Offer Qty" />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Scheme Disc Perc" />
            <LabeledUnderlineInput label="Scheme Disc Amt" />
          </View>

          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </SectionCard>

        {/* Section: Table */}
        <SectionCard title1="Table" title2="">
          <Text style={styles.tableText}>No data found with given Criteria</Text>
        </SectionCard>

        {/* Section: Summary */}
        <SectionCard title1="Summary" title2="">
          <View style={styles.summaryRow}><Text>Total Gross Amount :</Text><Text>0.00</Text></View>
          <View style={styles.summaryRow}><Text>Total Tax Amount :</Text><Text>0.00</Text></View>
          <View style={styles.summaryRow}><Text>Total Discount :</Text><Text>0.00</Text></View>
          <View style={styles.summaryRow}><Text>Invoice Discount :</Text><Text>0.00</Text></View>
          <View style={styles.summaryRow}><Text>Net Amount :</Text><Text>0.00</Text></View>
          <View style={styles.summaryRow}><Text>Invoice Net Payable :</Text><Text>0.00</Text></View>
          <View style={styles.summaryRow}><Text>Difference :</Text><Text>0.00</Text></View>
          <View style={styles.summaryRow}><Text>Total Adjustment Amount :</Text><Text>0.00</Text></View>
        </SectionCard>

      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.footer}>
        <FooterBtn icon="save" label="Save"  />
        <FooterBtn icon="document-text" label="Tax Info" />
        <FooterBtn icon="pricetags" label="Discount" />
        <FooterBtn icon="close-circle" label="Discard" />
      </View>
    </SafeAreaView>
  );
};

/* Section Card with legend */
const SectionCard = ({ title1, title2, children }) => (
  <View style={styles.card}>
    <View style={styles.legend}>
      <Text style={styles.legendText}>
        {title1} {title2 !== '' && <Text style={styles.legendBold}>{title2}</Text>}
      </Text>
    </View>
    <View>{children}</View>
  </View>
);

/* Reusable underline input */
const LabeledUnderlineInput = ({ label, value = '', placeholder = '', editable = true, onChangeText = () => {} }) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      placeholder={placeholder}
      editable={editable}
      onChangeText={onChangeText}
      style={[styles.underlineInput, !editable && styles.disabled]}
    />
  </View>
);

const RelatedPartyToggle = ({ value, onToggle }) => (
  <View style={styles.field}>
    <Text style={styles.label}>Related Party</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={onToggle} style={styles.radioCircle}>{value ? <View style={styles.radioDot} /> : null}</TouchableOpacity>
      <Text style={{ marginRight: 12 }}>Yes</Text>
      <TouchableOpacity onPress={onToggle} style={styles.radioCircle}>{!value ? <View style={styles.radioDot} /> : null}</TouchableOpacity>
      <Text>No</Text>
    </View>
  </View>
);

const FooterBtn = ({ icon, label }) => (
  <TouchableOpacity style={styles.footerBtn}>
    <Ionicons name={icon} size={18} color="#fff" />
    <Text style={styles.footerText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 10, paddingBottom: 60 },

  card: {
    borderWidth: 1,
    borderColor: '#8E97B0',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
    position: 'relative',
  },

  /* Legend Style */
  legend: {
    position: 'absolute',
    top: -12,
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
  },
  legendText: { fontSize: 14, color: '#1F4E79' },
  legendBold: { fontWeight: 'bold' },

  row: { flexDirection: 'row', justifyContent: 'space-between' },
  field: { flex: 1, margin: 6 },
  label: { fontSize: 12, color: '#374151', marginBottom: 2 },
  underlineInput: { borderBottomWidth: 1, borderBottomColor: '#9ca3af', fontSize: 14, paddingVertical: 4 },
  disabled: { color: '#9ca3af' },

  addBtn: { alignSelf: 'center', backgroundColor: '#3151AC', paddingHorizontal: 30, paddingVertical: 8, borderRadius: 20, marginTop: 10 },
  addBtnText: { color: '#fff', fontWeight: 'bold' },

  tableText: { color: '#9ca3af', textAlign: 'center' },

  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },

  footer: { flexDirection: 'row', justifyContent: 'space-around', padding: 12 },
  footerBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#3151AC', padding:5 , borderRadius:10 },
  footerText: { color: '#fff', marginLeft: 6, fontWeight: '600' },

  radioCircle: { width: 18, height: 18, borderRadius: 9, borderWidth: 1, borderColor: '#374151', justifyContent: 'center', alignItems: 'center', marginRight: 4 },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#3151AC' },
});

export default FormComp;

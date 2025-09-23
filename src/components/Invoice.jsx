import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";

const Invoice = () => {
  const [purchaseMode, setPurchaseMode] = useState("Without Reference");

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Section: Create New (NO legend here) */}
        <View style={styles.cardNoLegend}>
          <Text style={styles.noLegendTitle}>Create New</Text>
          <View style={styles.row}>
            <LabeledUnderlineInput label="Distributor Branch" />
            <LabeledUnderlineInput label="Date" />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.label}>Purchase Return Mode</Text>
            <View
              style={{
                marginLeft: 10,
                maxWidth: 170,
                borderWidth: 1.5,
                borderRadius: 10,
                padding: 10,
                borderColor: "#8E97B0",
              }}
            >
              <RadioButton
                label="Without Reference"
                selected={purchaseMode === "Without Reference"}
                onPress={() => setPurchaseMode("Without Reference")}
              />
              <RadioButton
                label="With Reference"
                selected={purchaseMode === "With Reference"}
                onPress={() => setPurchaseMode("With Reference")}
              />
            </View>
          </View>
        </View>

        {/* Section: Search On */}
        <SectionCard title1="Search On" title2="">
          <View style={styles.row}>
            <LabeledUnderlineInput
              label="Godown"
              placeholder="Company Product Code"
            />
            <LabeledUnderlineInput
              label="Supplier Name"
              placeholder="Enter atleast 3 characters"
            />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Product Search" />
            <LabeledUnderlineInput label="Input Text-Product" />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="UOM" />
            <LabeledUnderlineInput label="Product Code" />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Stock on Hand" />
            <LabeledUnderlineInput label="Expiry Date" />
          </View>

          <View style={styles.row}>
            <LabeledUnderlineInput label="Stock on Hand (Offer Qty)" />
            {/* <LabeledUnderlineInput label="Return Qty" placeholder="Saleable" /> */}
          </View>
            <View styles={{} }>
                {/* <text>Mani</text> */}
                <Text>Return Qty</Text>
            </View>
          <View style={styles.row}>
            <LabeledUnderlineInput label="Saleable" />
            <LabeledUnderlineInput label="Reason" />
          </View>
          <View style={styles.row}>
            <LabeledUnderlineInput label="Offer" />
          </View>

          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </SectionCard>

        {/* Section: Table */}
        <SectionCard title1="" title2="">
          <Text style={styles.tableText}>No data found with given Criteria</Text>
        </SectionCard>

        {/* Section: Summary */}
        <SectionCard title1="Summary" title2="" >
            <View style={{display:"flex", flexDirection:"row"}}>

          <LabeledUnderlineInput label="Remarks" />
          <View style={{marginLeft:50}}>
          <View style={styles.summaryRow}>
            <Text>Total Gross Amount :</Text>
            <Text>0.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Total Tax Amount :</Text>
            <Text>0.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Total Discount :</Text>
            <Text>0.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>PRN Net Amount :</Text>
            <Text>0.00</Text>
          </View>
          </View>
        </View>
        </SectionCard>
      </ScrollView>

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <FooterBtn label="Save" />
        <FooterBtn label="Discard" />
      </View>
    </SafeAreaView>
  );
};

/* Section Card with legend */
const SectionCard = ({ title1, title2, children }) => (
  <View style={styles.card}>
    {title1 !== "" && (
      <View style={styles.legend}>
        <Text style={styles.legendText}>
          {title1} {title2 !== "" && <Text style={styles.legendBold}>{title2}</Text>}
        </Text>
      </View>
    )}
    <View>{children}</View>
  </View>
);

const LabeledUnderlineInput = ({ label, placeholder = "" }) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}</Text>
    <TextInput placeholder={placeholder} style={styles.underlineInput} />
  </View>
);

const RadioButton = ({ label, selected, onPress }) => (
  <TouchableOpacity style={styles.radioOption} onPress={onPress}>
    <View style={styles.radioCircle}>
      {selected && <View style={styles.radioDot} />}
    </View>
    <Text style={styles.radioLabel}>{label}</Text>
  </TouchableOpacity>
);

const FooterBtn = ({ label }) => (
  <TouchableOpacity style={styles.footerBtn}>
    <Text style={styles.footerText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { padding: 10, paddingBottom: 70 },

  card: {
    borderWidth: 1,
    borderColor: "#2563eb",
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
    position: "relative",
  },
  cardNoLegend: {
    padding: 12,
    marginBottom: 16,
  },
  noLegendTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 10,
  },

  legend: {
    position: "absolute",
    top: -12,
    left: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 6,
  },
  legendText: { fontSize: 14, color: "#1f2937" },
  legendBold: { fontWeight: "bold" },

  row: { flexDirection: "row", justifyContent: "space-between" },
  field: { flex: 1, margin: 6 },
  label: { fontSize: 12, color: "#374151", marginBottom: 2 },
  underlineInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#9ca3af",
    fontSize: 14,
    paddingVertical: 4,
  },

  addBtn: {
    alignSelf: "center",
    backgroundColor: "#2563eb",
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 12,
  },
  addBtnText: { color: "#fff", fontWeight: "bold" },

  tableText: { color: "#9ca3af", textAlign: "center" },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  radioOption: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#374151",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2563eb",
  },
  radioLabel: { fontSize: 14, color: "#374151" },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerBtn: {
    flex: 1,
    marginHorizontal: 6,
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  footerText: { color: "#fff", fontWeight: "bold" },
});

export default Invoice;

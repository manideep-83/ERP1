import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import ERPContext from "../../../Context/ERPContext";   // <-- Make sure this path is correct

const CreateCust = ({ navigation }) => {
  const { CreateCustomer } = useContext(ERPContext);

  // ---------------- BASIC INFO ----------------
  const [contactName, setContactName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [outletId, setOutletId] = useState("");

  // ---------------- CUSTOMER TYPE ----------------
  const [customerType, setCustomerType] = useState("B2B");

  // ---------------- CONTACT PERSON ----------------
  const [salutation, setSalutation] = useState("Mr");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // ---------------- BILLING ADDRESS ----------------
  const [billAttention, setBillAttention] = useState("");
  const [billAddress, setBillAddress] = useState("");
  const [billCity, setBillCity] = useState("");
  const [billState, setBillState] = useState("");
  const [billZip, setBillZip] = useState("");

  // ---------------- SHIPPING ADDRESS ----------------
  const [shipAttention, setShipAttention] = useState("");
  const [shipAddress, setShipAddress] = useState("");
  const [shipCity, setShipCity] = useState("");
  const [shipState, setShipState] = useState("");
  const [shipZip, setShipZip] = useState("");

  // ---------------- BUSINESS INFO ----------------
  const [gstNo, setGstNo] = useState("");
  const [panNo, setPanNo] = useState("");
  const [creditLimit, setCreditLimit] = useState("");

  // ---------------- CUSTOM FIELDS ----------------
  const [outletCategory, setOutletCategory] = useState("");
  const [availableCredit, setAvailableCredit] = useState("");
  const [completedCredit, setCompletedCredit] = useState("");
  const [lineSaleOutlet, setLineSaleOutlet] = useState(false);
  const [areaCategory, setAreaCategory] = useState("");
  const [salesmanAssigned, setSalesmanAssigned] = useState("");
  const [mapPin, setMapPin] = useState("");

  // ---------------- SUBMIT ----------------
  const handleSubmit = async () => {
    const payload = {
      contact_name: contactName,
      company_name: companyName,
      contact_type: "customer",
      gst_no: gstNo,
      pan_no: panNo,
      credit_limit: Number(creditLimit),

      contact_persons: [
        {
          salutation: salutation,
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone,
          mobile: phone,
          is_primary_contact: true,
        },
      ],

      billing_address: {
        attention: billAttention,
        address: billAddress,
        city: billCity,
        state: billState,
        zip: billZip,
        country: "India",
      },

      shipping_address: {
        attention: shipAttention,
        address: shipAddress,
        city: shipCity,
        state: shipState,
        zip: shipZip,
        country: "India",
      },

      custom_fields: [
        { label: "outlet_id", value: outletId },
        { label: "customer_type", value: customerType },
        { label: "outlet_category", value: outletCategory },
        { label: "available_credit", value: Number(availableCredit) },
        { label: "completed_credit", value: Number(completedCredit) },
        { label: "line_sale_outlet", value: Boolean(lineSaleOutlet) },
        { label: "area_category", value: areaCategory },
        { label: "salesman_assigned", value: salesmanAssigned },
        { label: "map_pinpoint", value: mapPin },
      ],
    };

    const res = await CreateCustomer(payload);

    Alert.alert("Success", "Customer Created Successfully!", [
      {
        text: "OK",
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create Customer</Text>

      {/* BASIC DETAILS */}
      <Input label="Owner Name" value={contactName} onChange={setContactName} />
      <Input label="Outlet Name" value={companyName} onChange={setCompanyName} />
      <Input label="Outlet ID" value={outletId} onChange={setOutletId} />

      {/* SALUTATION DROPDOWN */}
      <Text style={styles.label}>Salutation</Text>
      <Picker
        selectedValue={salutation}
        onValueChange={setSalutation}
        style={styles.picker}
      >
        <Picker.Item label="Mr" value="Mr" />
        <Picker.Item label="Ms" value="Ms" />
        <Picker.Item label="Mrs" value="Mrs" />
      </Picker>

      {/* CONTACT PERSON */}
      <Input label="First Name" value={firstName} onChange={setFirstName} />
      <Input label="Last Name" value={lastName} onChange={setLastName} />
      <Input label="Email" value={email} onChange={setEmail} />
      <Input label="Phone" value={phone} onChange={setPhone} />

      {/* CUSTOMER TYPE DROPDOWN */}
      <Text style={styles.label}>Customer Type</Text>
      <Picker
        selectedValue={customerType}
        onValueChange={setCustomerType}
        style={styles.picker}
      >
        <Picker.Item label="B2B" value="B2B" />
        <Picker.Item label="B2C" value="B2C" />
      </Picker>

      {/* BILLING ADDRESS */}
      <Section title="Billing Address" />
      <Input label="Attention" value={billAttention} onChange={setBillAttention} />
      <Input label="Address" value={billAddress} onChange={setBillAddress} />
      <Input label="City" value={billCity} onChange={setBillCity} />
      <Input label="State" value={billState} onChange={setBillState} />
      <Input label="Pincode" value={billZip} onChange={setBillZip} />

      {/* SHIPPING ADDRESS */}
      <Section title="Shipping Address" />
      <Input label="Attention" value={shipAttention} onChange={setShipAttention} />
      <Input label="Address" value={shipAddress} onChange={setShipAddress} />
      <Input label="City" value={shipCity} onChange={setShipCity} />
      <Input label="State" value={shipState} onChange={setShipState} />
      <Input label="Pincode" value={shipZip} onChange={setShipZip} />

      {/* BUSINESS INFO */}
      <Section title="Business Info" />
      <Input label="GST Number" value={gstNo} onChange={setGstNo} />
      <Input label="PAN Number" value={panNo} onChange={setPanNo} />
      <Input label="Credit Limit" value={creditLimit} onChange={setCreditLimit} />

      {/* CUSTOM FIELDS */}
      <Section title="Custom Fields" />
      <Input
        label="Outlet Category"
        value={outletCategory}
        onChange={setOutletCategory}
      />
      <Input
        label="Available Credit"
        value={availableCredit}
        onChange={setAvailableCredit}
      />
      <Input
        label="Completed Credit"
        value={completedCredit}
        onChange={setCompletedCredit}
      />
      <Input
        label="Area Category"
        value={areaCategory}
        onChange={setAreaCategory}
      />
      <Input
        label="Salesman Assigned"
        value={salesmanAssigned}
        onChange={setSalesmanAssigned}
      />
      <Input label="Map Pinpoint" value={mapPin} onChange={setMapPin} />

      {/* LINE SALE OUTLET (YES/NO) */}
      <Text style={styles.label}>Line Sale Outlet</Text>
      <Picker
        selectedValue={lineSaleOutlet}
        onValueChange={(v) => setLineSaleOutlet(v)}
        style={styles.picker}
      >
        <Picker.Item label="Yes" value={true} />
        <Picker.Item label="No" value={false} />
      </Picker>

      {/* SAVE BUTTON */}
      <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
        <Text style={styles.btnText}>SAVE CUSTOMER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

/* ---------------- REUSABLE COMPONENTS ---------------- */

const Input = ({ label, value, onChange }) => (
  <View style={{ marginVertical: 6 }}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChange}
      style={styles.underlineInput}
    />
  </View>
);

const Section = ({ title }) => (
  <Text style={styles.sectionHeader}>{title}</Text>
);

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: { padding: 15 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  label: { fontSize: 14, marginBottom: 3 },
  underlineInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#9ca3af",
    paddingVertical: 5,
    fontSize: 14,
  },
  picker: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  sectionHeader: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  saveBtn: {
    backgroundColor: "#1d3557",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  btnText: { color: "#fff", fontWeight: "bold" },
});

export default CreateCust;

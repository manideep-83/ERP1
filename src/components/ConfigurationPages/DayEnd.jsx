import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const DayEnd = () => {
  const [purchase, setPurchase] = useState("");
  const [billing, setBilling] = useState("");
  const [collection, setCollection] = useState("");
  const [purchaseReturn, setPurchaseReturn] = useState("");
  const [salesReturn, setSalesReturn] = useState("");
  const [pendingCollection, setPendingCollection] = useState("");
  const [closingStocks, setClosingStocks] = useState("");
  const [pendingPayment, setPendingPayment] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Day End</Text>

      {/* Distributor Info */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.label}>Distributor Branch</Text>
            <Text style={styles.value}>16622</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>Closure Date</Text>
            <Text style={styles.value}>08/09/2025</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>Last Day End Date</Text>
            <Text style={styles.value}>07/09/2025</Text>
          </View>
        </View>
        <TextInput style={styles.input} placeholder="" />
      </View>

      {/* Summary Section with Legend */}
        <SectionCard title1="➖" title2="Summary For The Day">
            {/* Row 1 */}
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.label}>Purchase</Text>
            <TextInput
              style={styles.input}
              value={purchase}
              onChangeText={setPurchase}
            />
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>Billing</Text>
            <TextInput
              style={styles.input}
              value={billing}
              onChangeText={setBilling}
            />
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>Collection</Text>
            <TextInput
              style={styles.input}
              value={collection}
              onChangeText={setCollection}
            />
          </View>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.label}>Purchase Return</Text>
            <TextInput
              style={styles.input}
              value={purchaseReturn}
              onChangeText={setPurchaseReturn}
            />
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>Sales Return</Text>
            <TextInput
              style={styles.input}
              value={salesReturn}
              onChangeText={setSalesReturn}
            />
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>Pending Collection</Text>
            <TextInput
              style={styles.input}
              value={pendingCollection}
              onChangeText={setPendingCollection}
            />
          </View>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.label}>Total Closing Stocks</Text>
            <TextInput
              style={styles.input}
              value={closingStocks}
              onChangeText={setClosingStocks}
            />
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>Pending Payment</Text>
            <TextInput
              style={styles.input}
              value={pendingPayment}
              onChangeText={setPendingPayment}
            />
          </View>
          <View style={styles.cell} />
        </View>
        </SectionCard>
    

        
      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>💾 Process</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>❌ Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
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
export default DayEnd;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 15,
  },
//   card: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 4,
//     padding: 10,
//     marginBottom: 20,
//   },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  cell: {
    display:"flex",
    marginRight: 10,
  },
  label: {
    fontSize: 13,
    color: "#444",
    marginBottom: 2,
  },
  value: {
    fontSize: 14,
    color: "#222",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 2,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 3,
    fontSize: 14,
  },
//   legend: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 15,
//     borderBottomWidth: 1,
//     borderColor: "#ccc",
//     paddingBottom: 3,
//   },
//   legendIcon: {
//     fontSize: 16,
//     color: "#1E3A8A",
//     marginRight: 5,
//   },
//   legendText: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "#1E3A8A",
//   },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },


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

});

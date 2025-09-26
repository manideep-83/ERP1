import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CheckBoxx from "../../ReusableComponents/CheckBox";
import LabeledUnderlineInput from "../../ReusableComponents/LabeledUnderlineInput";

const CreateDelivery = () => {
  const [days, setDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const toggleDay = (day) => {
    setDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Create New</Text>
      </View>

      {/* Form */}
      <View style={styles.filterBox}>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Distributor Branch Code" placeholder="16222" />
          <LabeledUnderlineInput label="Code" placeholder="" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Route Name" placeholder="Two Wheeler" />
          <LabeledUnderlineInput label="Distance" placeholder="" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Population" placeholder="" />
          <LabeledUnderlineInput label="City" placeholder="" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Is Van Route" placeholder="" />
          <LabeledUnderlineInput label="Is Active" placeholder="" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Local/UpCountry" placeholder="" />
          <LabeledUnderlineInput label="Priority Route" placeholder="" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Vehicle Name" placeholder="" />
          <LabeledUnderlineInput label="Route GTM Type" placeholder="" />
        </View>
        <View style={styles.Vrow}>
          <LabeledUnderlineInput label="Route Unique Code" placeholder="" />
          <LabeledUnderlineInput label="Route Type" placeholder="" />
        </View>

        {/* Calls Section */}
        <SectionCard title1="Calls" title2="Day">
          <View style={styles.daysRow}>
            {Object.keys(days).map((day) => (
              <CheckBoxx
                key={day}
                text={day}
                value={days[day]}
                onValueChange={() => toggleDay(day)}
              />
            ))}
          </View>
        </SectionCard>
      </View>

      {/* Footer buttons */}
      <View style={styles.Brow}>
        <TouchableOpacity style={styles.Buttons}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttons}>
          <Text style={styles.buttonText}>Discard</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const SectionCard = ({ title1, title2, children }) => (
  <View style={styles.card}>
    <View style={styles.legend}>
      <Text style={styles.legendText}>
        {title1} {title2 !== "" && <Text style={styles.legendBold}>{title2}</Text>}
      </Text>
    </View>
    <View>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", padding: 10 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  header: { fontSize: 20, fontWeight: "700", color: "#1E64CC" },

  Vrow: { flexDirection: "row", justifyContent: "space-between" },
  filterBox: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 10, marginBottom: 15 },

  card: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#8E97B0",
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
    position: "relative",
  },
  legend: {
    position: "absolute",
    top: -12,
    left: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 6,
  },
  legendText: { fontSize: 14, color: "#1F4E79" },
  legendBold: { fontWeight: "bold" },
  daysRow: { flexDirection: "row", flexWrap: "wrap" },

  Brow: { flexDirection: "row", justifyContent: "space-evenly", marginTop: 10 },
  Buttons: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F4E79",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default CreateDelivery;

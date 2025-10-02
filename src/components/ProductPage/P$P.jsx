import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import SearchBar from '../../ReusableComponents/SearchBar';
import AppTable from '../../ReusableComponents/AppTable';

const P$P = () => {
   const columns = [
  { header: 'State', key: 'id', flex: 1 },
  { header: 'Tax Type', key: 'name', flex: 2 },
  { header: 'Tax Code', key: 'id', flex: 2 },
  { header: 'Effective Date', key: 'date', flex: 2 },

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => alert(`Clicked ${item.name}`)}>
        <Text></Text>
        {/* <Ionicons name="eye-outline" size={20} color="#007bff" /> */}
      </TouchableOpacity>
      
    )
  }
];

const data = [
];
  const handleDateSelect = (date) => {
    console.log("Selected date:", date);
  };

  return (
    <View >
      <Text style={styles.title}>Product $ Price</Text>
      <SearchBar 
        placeholder="Search Product" 
        showDatePicker={true} 
        onDateChange={handleDateSelect} 
      />
      <Text>Recent Records</Text>
      
    <AppTable 
        columns={columns} 
        data={data} 
        message={`Total Records: ${data.length}`} 
      />
    </View>
  );
};

export default P$P;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E4A7B",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
});
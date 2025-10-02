import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SecondarySchemeClaim = () => {
  const handleDateSelect = (date) => {
    console.log("Selected date:", date);
  };

  const columns = [
  { header: 'Scheme Code', key: 'id', flex: 1 },
  { header: 'Company Scheme code', key: 'name', flex: 2 },
  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => alert(`Clicked ${item.name}`)}>
        <Ionicons name="eye-outline" size={20} color="#007bff" />
      </TouchableOpacity>
      
    )
  }
];

const data = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
];


  return (
    <View>
      <Text style={styles.title}>Secondary Scheme Claim</Text>
       <SearchBar 
        placeholder="Search Product" 
        showDatePicker={true} 
        onDateChange={handleDateSelect} 
      />
            <Text style={styles.title}>Recent Records</Text>

     
    </View>
  );
};


const styles = StyleSheet.create({
     title: { fontSize: 18, fontWeight: '700', marginBottom: 16, color: '#1a3d7c' },
     Button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
},
buttonText: {
      color: "#fff",
      fontWeight: "bold",
    }
     
});

export default SecondarySchemeClaim;

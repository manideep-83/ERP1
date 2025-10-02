import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';


const RetailerChannel = () => {
  const handleDateSelect = (date) => {
    console.log("Selected date:", date);
  };

  const columns = [
  { header: 'Channel Code', key: 'id', flex: 1 },
  { header: 'Channel Name', key: 'name', flex: 2 },

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
  { id: 1, name: 'Product A' ,date:'12-08-2023'},
  { id: 2, name: 'Product B' ,date:'12-09-2023'},
];


  return (
    <View>
      <Text style={styles.title}>Retailer Channel</Text>
 <TouchableOpacity style={styles.Button}>
                <Text style={styles.buttonText}>+ Create new</Text>
            </TouchableOpacity>      
            <SearchBar 
        placeholder="Search Product" 
        showDatePicker={true} 
        onDateChange={handleDateSelect} 
      />
            <Text style={styles.title}>Search Results</Text>

      <AppTable 
        columns={columns} 
        data={data} 
        message={`Total Records: ${data.length}`} 
      />
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

export default RetailerChannel;

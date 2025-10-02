import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import SearchBar from '../../ReusableComponents/SearchBar';
import AppTable from '../../ReusableComponents/AppTable';
import { useNavigation } from '@react-navigation/native';

const GTax = () => {
    const navigation=useNavigation()
   const change=(name)=>{
      // console.error("pressed",id);
       return navigation.navigate(name);
    }
   const columns = [
  { header: 'State', key: 'id', flex: 1 },
  { header: 'Tax Type', key: 'name', flex: 2 },
  { header: 'Tax code', key: 'id', flex: 2 },
  // { header: 'Action', key: 'date', flex: 2 },

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => {change("GtaxOverview")}}>
        <Text>Show</Text>
        {/* <Ionicons name="eye-outline" size={20} color="#007bff" /> */}
      </TouchableOpacity>
      
    )
  }
];

const data = [
 {},
];
  const handleDateSelect = (date) => {
    console.log("Selected date:", date);
  };

  return (
    <View>
        <View styles={styles.heading} >
        <Text style={styles.title}>GST Product Tax Structure</Text>
        
        </View>
     
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

export default GTax;
const styles=StyleSheet.create({
    heading:{
        display:"flex", 
        flexDirection:"row",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1E3A8A",
        marginBottom: 15,
    },
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

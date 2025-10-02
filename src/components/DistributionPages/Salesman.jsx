import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import SearchBar from '../../ReusableComponents/SearchBar'
import AppTable from '../../ReusableComponents/AppTable'
import { useNavigation } from '@react-navigation/native'
const Salesman = () => {
    const navigation=useNavigation()
     const change=(name)=>{
        // console.error("pressed",id);
         return navigation.navigate(name);
      }
    const columns = [
  { header: 'Branch Code', key: 'id', flex: 1 },
  { header: 'Salesman Code', key: 'name', flex: 2 },
  { header: 'Salesman ID', key: 'date', flex: 2 },
  { header: 'Phone Number', key: 'date', flex: 2 },
  { header: 'Is Active', key: 'date', flex: 2 },

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() =>{change("SalesmanOverview")}}>
        <Text>Show</Text>
      </TouchableOpacity>
      
    )
  }
];

const data = [
  { },
];
  return (
    <View>
        <View style={styles.heading} >
        <Text style={styles.title}>Salesman</Text>
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.buttonText}>+ Create new</Text>
        </TouchableOpacity>
        </View>
        <SearchBar />
        {/* Table */}
        <AppTable 
        columns={columns} 
        data={data} 
        message={`Total Records: ${data.length}`} 
      />
    </View>
  )
}

export default Salesman;
const styles=StyleSheet.create({
    heading:{
        display:"flex", 
        flexDirection:"row",
        justifyContent: "space-between"
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
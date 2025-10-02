import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import SearchBar from '../../ReusableComponents/SearchBar'
import AppTable from '../../ReusableComponents/AppTable'
import { useNavigation } from '@react-navigation/native'
const SalesmanRouteMapping = () => {
    const navigation=useNavigation()
     const change=(name)=>{
        // console.error("pressed",id);
         return navigation.navigate(name);
      }
    const columns = [
  { header: 'Branch Code', key: 'id', flex: 1 },
  { header: 'Salesman Code', key: 'name', flex: 2 },
  { header: 'Salesman Name', key: 'date', flex: 2 },
  { header: 'Route Code', key: 'date', flex: 2 },
  { header: 'Route Name', key: 'name', flex: 2 },
  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => {change("SalesmanRMOverview")}}>
        <Text>Show</Text>
      </TouchableOpacity>
      
    )
  }
];

const data = [
  {},
];
  return (
    <View>
        <View style={styles.heading} >
        <Text style={styles.title}>Salesman Route Mapping</Text>
        <TouchableOpacity style={styles.Button} onPress={() => {change("CreateSRM")}}>
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

export default SalesmanRouteMapping;
const styles=StyleSheet.create({
    heading:{
        display:"flex", 
        flexDirection:"row",
        justifyContent: "space-between",
        marginTop:5
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
    backgroundColor: "#1E3A8A",
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
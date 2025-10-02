import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import SearchBar from '../../ReusableComponents/SearchBar'
import AppTable from '../../ReusableComponents/AppTable'
import { useNavigation } from '@react-navigation/native'
const StockiestTMR = () => {
    const navigation=useNavigation()
     const change=(name)=>{
        // console.error("pressed",id);
         return navigation.navigate(name);
      }
    const columns = [
  { header: 'Ref No', key: 'id', flex: 1 },
  { header: 'Salesman', key: 'name', flex: 2 },
  { header: 'Sub stockiest', key: 'date', flex: 2 },
  { header: 'From Date', key: 'date', flex: 2 },
  { header: 'To Date', key: 'date', flex: 2 },

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => {change("StockiestOverview")}}>
        <Text>Show</Text>
      </TouchableOpacity>
      
    )
  }
];

const data = [
  { id: 1, name: 'Product A' ,date:'12-08-2023'},
];
  return (
    <View>
        <View style={styles.heading} >
        <Text style={styles.title}>Stockiest TMR</Text>
        <TouchableOpacity style={styles.Button} onPress={() => {change("CreateStockiest")}}>
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

export default StockiestTMR;
const styles=StyleSheet.create({
    heading:{
        display:"flex", 
        flexDirection:"row",
        marginTop:5,
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
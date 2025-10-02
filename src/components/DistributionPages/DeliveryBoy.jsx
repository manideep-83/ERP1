import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import SearchBar from '../../ReusableComponents/SearchBar'
import AppTable from '../../ReusableComponents/AppTable'
import { useNavigation } from '@react-navigation/native'
const DeliveryBoy = () => {
  const navigation=useNavigation()
     const change=(name)=>{
        // console.error("pressed",id);
         return navigation.navigate(name);
      }
  const columns = [
  { header: 'Branch Code', key: 'id', flex: 1 },
  { header: 'Delivery Boy Code', key: 'name', flex: 2 },
  { header: 'Delivery Boy Name', key: 'date', flex: 2 },
  { header: 'Phone Number', key: 'date', flex: 2 },

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => {change("DeliveryBoyOverview")}}>
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
          <Text style={styles.title}>Delivery Boy</Text>
          <TouchableOpacity style={styles.Button} onPress={() => {change("CreateDB")}}>
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

export default DeliveryBoy;
const styles=StyleSheet.create({
    heading:{
        display:"flex", 
        flexDirection:"row",
        marginTop:5,
        justifyContent:'space-between'
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
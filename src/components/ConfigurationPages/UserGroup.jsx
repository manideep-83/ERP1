import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import SearchBar from '../../ReusableComponents/SearchBar'
import AppTable from '../../ReusableComponents/AppTable'
import { useNavigation } from '@react-navigation/native'
const UserGroup = () => {
    const navigation=useNavigation()
     const change=(name)=>{
        // console.error("pressed",id);
         return navigation.navigate(name);
      }
    const columns = [
  { header: 'User Group Code', key: 'id', flex: 1 },
  { header: 'User Group Name', key: 'name', flex: 2 },
 

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => {change("UserGroupOverview")}
      }>
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
        <Text style={styles.title}>User Group</Text>

            <TouchableOpacity style={styles.Button} onPress={() => {change("CreateScreenName")}}>
                <Text style={styles.buttonText}>+ Create new</Text>
            </TouchableOpacity>
        </View>
        <SearchBar />
        <AppTable
        columns={columns} 
        data={data} 
        message={`Total Records: ${data.length}`} 
      />
    </View>
  )
}

export default UserGroup;
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
    backgroundColor: "#1a3d7c",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    marginRight: 10,
},
buttonText: {
      color: "#fff",
      fontWeight: "bold",
    }
});
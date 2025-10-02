import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import SearchBar from '../../ReusableComponents/SearchBar'
import AppTable from '../../ReusableComponents/AppTable'
import JCOverview from './JCOverview'
import { useNavigation } from '@react-navigation/native'
const JC = () => {
    const navigation=useNavigation()
     const change=(item)=>{
        // console.error("pressed",id);
         return navigation.navigate(item);
      }
    const columns = [
  { header: 'Company', key: 'name', flex: 1 },
  { header: 'Year', key: 'name', flex: 2 },
  { header: 'Start Date', key: 'date', flex: 2 },
  

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => {change("JCOverview")}}>
        <Text>Show</Text>
      </TouchableOpacity>
      
    )
  }
];

const data = [
  {}
];
  return (
    <View>
        <View styles={styles.heading} >
        <Text style={styles.title}>JC Calander</Text>
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

export default JC;
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
    // flexDirection: "row",
    // alignItems: "center",
    // backgroundColor: "#2563EB",
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // borderRadius: 8,
    // marginRight: 10,
    backgroundColor: "#1a3d7c",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
},
buttonText: {
      color: "#fff",
      fontWeight: "bold",
    }
});
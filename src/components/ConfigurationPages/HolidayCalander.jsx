import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import SearchBar from '../../ReusableComponents/SearchBar'
import AppTable from '../../ReusableComponents/AppTable'
import { useNavigation } from '@react-navigation/native'
const HolidayCalander = () => {
    const navigation=useNavigation()
     const change=(item)=>{
        // console.error("pressed",id);
         return navigation.navigate(item.name);
      }
    const columns = [
  { header: 'Company', key: 'name', flex: 1 },
  { header: 'Year', key: 'name', flex: 2 },
  { header: 'Holiday Date', key: 'date', flex: 2 },

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
      <TouchableOpacity onPress={() => {change("HolidayCalanderOverview")}}>
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
        <Text style={styles.title}>Holiday Calander</Text>

            <TouchableOpacity style={styles.Button}>
                <Text style={styles.buttonText} onPress={() => {change("CreateHoliday")}}>+ Create new</Text>
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

export default HolidayCalander;
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
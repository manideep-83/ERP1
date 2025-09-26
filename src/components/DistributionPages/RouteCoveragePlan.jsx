import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import SearchBar from '../../ReusableComponents/SearchBar'
const RouteCoveragePlan = () => {
  return (
    <View>
        <View styles={styles.heading} >
        <Text style={styles.title}>Route Coverage Plan</Text>
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.buttonText}>+ Create new</Text>
        </TouchableOpacity>
        </View>
        <SearchBar />
        {/* Table */}
    </View>
  )
}

export default RouteCoveragePlan;
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
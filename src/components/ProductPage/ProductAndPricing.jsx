import React, { useContext ,useEffect} from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import SearchBar from '../../ReusableComponents/SearchBar';
import AppTable from '../../ReusableComponents/AppTable';
import { useNavigation } from '@react-navigation/native';
import ERPContext from '../../Context/ERPContext';
const ProductAndPricing = () => {
  const navigation=useNavigation()
  const { fetchProduct,product,loading} = useContext(ERPContext);
     const change=(name)=>{
        // console.error("pressed",id);
         return navigation.navigate(name);
      }
      useEffect(() => {
          fetchProduct();
        }, []);
         const handleView = (item) => {
    navigation.navigate('PAPOverview', { product: item });
  };
   const columns = [
  { header: 'Product Code', key: 'item_id', flex: 1 },
  { header: 'Product Name', key: 'name', flex: 2 },
  { header: 'Distributor Product Code', key: 'id', flex: 2 },
  // { header: 'Action', key: 'date', flex: 2 },

  { 
    header: 'Action', 
    key: 'action', 
    flex: 1,
    renderCell: (item) => (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleView(item)} style={{ marginRight: 10 }}>
                 <Text>Show</Text>
              </TouchableOpacity>
            </View>
          ),
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
            <Text style={styles.title}>Product $ Price</Text>
      <SearchBar 
        placeholder="Search Product" 
        showDatePicker={true} 
        onDateChange={handleDateSelect} 
      />
      <Text>Recent Records</Text>
      
    <AppTable 
        columns={columns} 
        data={product} 
        message={loading ? 'Loading...' : `Total Records: ${product.length}`} 
      />
    </View>
  );
};

export default ProductAndPricing;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E4A7B",
    marginBottom: 20,
    textDecorationLine: "underline",
  }
});
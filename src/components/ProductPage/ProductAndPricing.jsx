import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../../ReusableComponents/SearchBar';

const ProductAndPricing = () => {
  const handleDateSelect = (date) => {
    console.log("Selected date:", date);
  };

  return (
    <View>
      <SearchBar 
        placeholder="Search Product" 
        showDatePicker={true} 
        onDateChange={handleDateSelect} 
      />
    </View>
  );
};

export default ProductAndPricing;

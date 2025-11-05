import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const SupplierOverview = () => {
  const route = useRoute();
  const { supplier } = route.params;

  const row = [
    {
      label: "ID",
      value: supplier?.contact_id || ""
    },
    {
      label: "Company Name",
      value: supplier?.company_name || ""
    },
    {
      label: "Supplier Name",
      value: supplier?.vendor_name || ""
    },
    {
      label: "Geo Mapping",
      value: ""
    }
  ];

  return (
    <View>
      <Overview title="Overview" rows={row} />
    </View>
  );
};

export default SupplierOverview;

import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Overview from '../../../ReusableComponents/Overview';

const PurchaseReturnOverview = () => {
  const route = useRoute();
  const { pr } = route.params; // Comes from navigation

  // Map API fields to overview fields
  const row = [
    {
      label: "Branch Code",
      value: pr?.vendor_credit_id || ""
    },
    {
      label: "Branch Name",
      value: "" // If your backend provides this later, map it
    },
    {
      label: "GRN Reference No.",
      value: pr?.reference_number || ""
    },
    {
      label: "PR Reference No.",
      value: pr?.vendor_credit_number || ""
    },
    {
      label: "Company Inv No",
      value: "" // Not in API response yet
    },
    {
      label: "Purchase Return Date",
      value: pr?.date || ""
    },
    {
      label: "Supplier Return Date",
      value: "" // If supplier return date exists later
    },
    {
      label: "Supplier Name",
      value: pr?.vendor_name || ""
    },
    {
      label: "Return Amount",
      value: pr?.total ? `₹${pr.total}` : ""
    },
    {
      label: "Approval Status",
      value: pr?.status || ""
    }
  ];

  return (
    <View>
      <Overview title="Purchase Return Overview" rows={row} />
    </View>
  );
};

export default PurchaseReturnOverview;

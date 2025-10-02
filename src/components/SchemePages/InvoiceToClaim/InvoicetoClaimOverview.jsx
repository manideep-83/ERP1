import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Overview from "../../../ReusableComponents/Overview";

const InvoicetoClaimOverview = () => {
  const route = useRoute();
  const claimData = route?.params?.claim || {};

  const rows = [
    { label: "Claim Code", value: claimData.id || "" },
    { label: "Claim Description", value: claimData.name || "" },
    { label: "Claim Date", value: claimData.date || "" },
    { label: "Claim Year", value: claimData.year || "" },
    { label: "Claim Month", value: claimData.month || "" },
    { label: "Claim Amount", value: claimData.amount || "" },
    { label: "Remarks", value: claimData.remarks || "" },
    { label: "Status", value: claimData.status || "" },
  ];

  return (
    <View>
      <Overview title="Overview" rows={rows} />
    </View>
  );
};

export default InvoicetoClaimOverview;
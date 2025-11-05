import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
const PurchaseOrderOverview = () => {
  const route = useRoute();
    const { po } = route.params;
    const row = [
      { label: "Branch Code", value: po?.purchaseorder_id || "" },
      { label: "Branch Name", value: po?.vendor_name || "" },
      { label: "Company PO No", value: po?.purchaseorder_number || "" },
      { label: "PO Reference No.", value: po?.reference_number || "" },
      { label: "PO Date", value: po?.date || "" },
      { label: "Company PO Date", value: po?.date || "" }, // if same
      { label: "Tentative Order Value", value: po?.total || "" },
      { label: "Date", value: po?.created_time || "" },
      { label: "Status", value: po?.status || "" }
    ];

    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default PurchaseOrderOverview;
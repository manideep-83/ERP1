import Overview from "../../../ReusableComponents/Overview";
import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native";

const GoodsReceiptsNoteOverview = () => {
   const route = useRoute();
      const { grn } = route.params;
 const row = [
    { label: "Branch Code", value: grn?.purchasereceive_id || "—" },
    { label: "GNT Reference No", value: grn?.purchasereceive_number || "—" },
    { label: "Company Invoice No", value: grn?.purchaseorder_number || "—" },
    { label: "GRN Date", value: grn?.receive_date || "—" },
    { label: "Supplier Name", value: grn?.vendor_name || "—" },
    { label: "Company Name", value: "XYZ Pvt. Ltd" }, // not provided in API, use constant or nested data
    { label: "GRN Net Amount", value:"—" },
    { label: "Status", value: grn?.status || "—" },
  ];
    return (
    <View>
        <Overview title="Overview" rows={row}/>
    </View>
  )
}

export default GoodsReceiptsNoteOverview;
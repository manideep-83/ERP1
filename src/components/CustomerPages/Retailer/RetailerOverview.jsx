import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Overview from '../../../ReusableComponents/Overview';

const formatAddress = (address) => {
  if (!address) return '-';
  const parts = [
    address.address,
    address.street2,
    address.city,
    address.state,
    address.zip,
    address.country,
  ].filter(Boolean);
  return parts.length ? parts.join(', ') : '-';
};

const RetailerOverview = () => {
  const route = useRoute();
  const retailer = route.params?.item ?? {};
  const custom = retailer.custom_fields ?? {};

  const rows = useMemo(
    () => [
      { label: 'Distributor Branch', value: custom.area_category ?? '-' },
      { label: 'Type', value: custom.customer_type ?? '-' },
      { label: 'Distr Retailer Code', value: custom.outlet_id ?? '-' },
      { label: 'Company Retailer Code', value: retailer.contact_id ?? '-' },
      { label: 'Retailer Name', value: retailer.company_name ?? '-' },
      { label: 'Owner Name', value: retailer.contact_name ?? '-' },
      { label: 'Phone', value: retailer.phone ?? '-' },
      { label: 'Email', value: retailer.email ?? '-' },
      { label: 'Status', value: retailer.status ?? '-' },
      { label: 'Outstanding', value: String(custom.available_credit ?? '-') },
      { label: 'Salesman Assigned', value: custom.salesman_assigned ?? '-' },
      { label: 'Billing Address', value: formatAddress(retailer.billing_address) },
      { label: 'Shipping Address', value: formatAddress(retailer.shipping_address) },
    ],
    [custom, retailer],
  );

  return (
    <View>
      <Overview title={retailer.company_name || 'Retailer Overview'} rows={rows} />
    </View>
  );
};

export default RetailerOverview;
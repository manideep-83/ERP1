import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import all CustomerPages screens
import BankMaster from '../components/CustomerPages/BankMaster/BankMaster';
import BankMasterOverview from '../components/CustomerPages/BankMaster/BankMasterOverview';
import Billing from '../components/CustomerPages/Billing/Billing';
import BillingOverview from '../components/CustomerPages/Billing/BillingOverview';
import BillingProductOverview from '../components/CustomerPages/Billing/BillingProductOverview';
import CreateBilling from '../components/CustomerPages/Billing/CreateBilling';
import OrderToBilling from '../components/CustomerPages/Billing/OrderToBilling';
import SRCreateBillOverview from '../components/CustomerPages/Billing/SRCreateBillOverview';
import CollectionDiscountMaster from '../components/CustomerPages/CollectionDiscountMaster/CollectionDiscountMaster';
import CollectionDiscountMasterOverview from '../components/CustomerPages/CollectionDiscountMaster/CollectionDiscountMasterOverview';
import CreateCollectionDiscountMaster from '../components/CustomerPages/CollectionDiscountMaster/CreateCollectionDiscountMaster';
import Collections from '../components/CustomerPages/Collections/Collections';
import CollectionsOverview from '../components/CustomerPages/Collections/CollectionsOverview';
import CreateCollections from '../components/CustomerPages/Collections/CreateCollections';
import CollectionCreateOverview from '../components/CustomerPages/Collections/CollectionCreateOverview';
import CreditDebitNote from '../components/CustomerPages/CreditNote/CreditDebitNote';
import CreditDebitNoteOverview from '../components/CustomerPages/CreditNote/CreditDebitNoteOverview';
import MidasSalesReturn from '../components/CustomerPages/MidasSalesReturn/MidasSalesReturn';
import MidasSalesReturnOverview from '../components/CustomerPages/MidasSalesReturn/MidasSalesReturnOverview';
import CreateMidasSalesReturn from '../components/CustomerPages/MidasSalesReturn/CreateMidasSalesReturn';
import MidasSalesReturnCreateOverview from '../components/CustomerPages/MidasSalesReturn/MidasSalesReturnCreateOverview';
import OrderBooking from '../components/CustomerPages/OrderBooking/OrderBooking';
import OrderBookingOverview from '../components/CustomerPages/OrderBooking/OrderBookingOverview';
import CreateOrderBooking from '../components/CustomerPages/OrderBooking/CreateOrderBooking';
import Retailer from '../components/CustomerPages/Retailer/Retailer';
import RetailerOverview from '../components/CustomerPages/Retailer/RetailerOverview';
import RetailerChannel from '../components/CustomerPages/Retailer/RetailerChannel';
import RetailerChannelOverview from '../components/CustomerPages/Retailer/RetailerChannelOverview';
import RetailerClass from '../components/CustomerPages/Retailer/RetailerClass';
import RetailerClassOverview from '../components/CustomerPages/Retailer/RetailerClassOverview';
import RetailerGroup from '../components/CustomerPages/Retailer/RetailerGroup';
import RetailerGroupOverview from '../components/CustomerPages/Retailer/RetailerGroupOverview';
import SalesReturn from '../components/CustomerPages/SalesReturn/SalesReturn';
import SalesReturnOverview from '../components/CustomerPages/SalesReturn/SalesReturnOverview';
import CreateNewSalesReturn from '../components/CustomerPages/SalesReturn/CreateNewSalesReturn';
import DeliveryProcess from '../components/CustomerPages/SalesReturn/DeliveryProcess';

const Stack = createStackNavigator();

const CustomerPagesRoute = () => (
  <Stack.Navigator initialRouteName="BankMaster">
    <Stack.Screen name="BankMaster" component={BankMaster} />
    <Stack.Screen name="BankMasterOverview" component={BankMasterOverview} />
    <Stack.Screen name="Billing" component={Billing} />
    <Stack.Screen name="BillingOverview" component={BillingOverview} />
    <Stack.Screen name="BillingProductOverview" component={BillingProductOverview} />
    <Stack.Screen name="CreateBilling" component={CreateBilling} />
    <Stack.Screen name="OrderToBilling" component={OrderToBilling} />
    <Stack.Screen name="SRCreateBillOverview" component={SRCreateBillOverview} />
    <Stack.Screen name="CollectionDiscountMaster" component={CollectionDiscountMaster} />
    <Stack.Screen name="CollectionDiscountMasterOverview" component={CollectionDiscountMasterOverview} />
    <Stack.Screen name="CreateCollectionDiscountMaster" component={CreateCollectionDiscountMaster} />
    <Stack.Screen name="Collections" component={Collections} />
    <Stack.Screen name="CollectionsOverview" component={CollectionsOverview} />
    <Stack.Screen name="CreateCollections" component={CreateCollections} />
    <Stack.Screen name="CollectionCreateOverview" component={CollectionCreateOverview} />
    <Stack.Screen name="CreditDebitNote" component={CreditDebitNote} />
    <Stack.Screen name="CreditDebitNoteOverview" component={CreditDebitNoteOverview} />
    <Stack.Screen name="MidasSalesReturn" component={MidasSalesReturn} />
    <Stack.Screen name="MidasSalesReturnOverview" component={MidasSalesReturnOverview} />
    <Stack.Screen name="CreateMidasSalesReturn" component={CreateMidasSalesReturn} />
    <Stack.Screen name="MidasSalesReturnCreateOverview" component={MidasSalesReturnCreateOverview} />
    <Stack.Screen name="OrderBooking" component={OrderBooking} />
    <Stack.Screen name="OrderBookingOverview" component={OrderBookingOverview} />
    <Stack.Screen name="CreateOrderBooking" component={CreateOrderBooking} />
    <Stack.Screen name="Retailer" component={Retailer} />
    <Stack.Screen name="RetailerOverview" component={RetailerOverview} />
    <Stack.Screen name="RetailerChannel" component={RetailerChannel} />
    <Stack.Screen name="RetailerChannelOverview" component={RetailerChannelOverview} />
    <Stack.Screen name="RetailerClass" component={RetailerClass} />
    <Stack.Screen name="RetailerClassOverview" component={RetailerClassOverview} />
    <Stack.Screen name="RetailerGroup" component={RetailerGroup} />
    <Stack.Screen name="RetailerGroupOverview" component={RetailerGroupOverview} />
    <Stack.Screen name="SalesReturn" component={SalesReturn} />
    <Stack.Screen name="SalesReturnOverview" component={SalesReturnOverview} />
    <Stack.Screen name="CreateNewSalesReturn" component={CreateNewSalesReturn} />
    <Stack.Screen name="DeliveryProcess" component={DeliveryProcess} />
  </Stack.Navigator>
);

export default CustomerPagesRoute;

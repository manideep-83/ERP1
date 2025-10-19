import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from '../B2C/Context/UserContext';
import { CartProvider } from '../B2C/Context/CartContext';

// Components
import ForgotPassword from '../components/ForgotPassword';
import LoginScreen from '../components/Login';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

// Screens
import HomeB2C from '../B2C/HomeB2C';
import OrderScreen from '../B2C/Orders/OrderScreen';
import OffersScreen from '../B2C/Offers/OffersScreen';
import OffersDetailsScreen from '../B2C/Offers/OfferDetailsScreen';
import ReturnsScreen from '../B2C/Returns/ReturnsScreen';
import CreditDetailsScreen from '../B2C/CreditDetails/CreditDetailsScreen';
import ProductsScreen from '../B2C/Products/ProductsScreen';
import Cart from '../B2C/Cart/ShoppingCartScreen';
import Profile from '../B2C/Profile/ProfileScreen';
import CreatePurchaseOrder from '../components/CreatePurchaseOrder';
import ViewDetails from '../B2C/Orders/ViewDetailsScreen';
import TrackRefundScreen from '../B2C/Returns/TrackRefundScreen';
import PaymentHistory from '../B2C/PaymentHistoryScreen';
import MyAccountScreen from '../B2C/Profile/MyAccount/MyAccountScreen';
import AddAddress from '../B2C/Profile/MyAccount/AddAddressScreen';
import ManageAddress from '../B2C/Profile/MyAccount/ManageAddressesScreen';
import ChangePassword from '../B2C/Profile/MyAccount/ChangePasswordScreen';
import ContactUs from '../B2C/Profile/Contact/ContactUsScreen';
const Stack = createNativeStackNavigator();

<<<<<<< HEAD
/**
 * Wrapper HOC for Header & Footer Layout
 */
const withHeaderAndFooter = (Component) => (props) => {
=======
import FinanceScreen from '../components/FinancePages/FinanceScreen' ;

import Customer from '../components/Customer';

import GoodsReceiptsNote from '../components/CompanyPages/GoodsReceiptsNote/GoodsReceiptsNote';
import GoodsReceiptsNoteOverview from '../components/CompanyPages/GoodsReceiptsNote/GoodsReceiptsNoteOverview';
import CreateNewGRN from '../components/CompanyPages/GoodsReceiptsNote/CreateNewGRN';
import CreditDebitNote from '../components/CompanyPages/CompanyCreditDebitNote/CompanyCreditDebitNoteScreen';
import CompanyCreditDebitNoteScreenOverview from '../components/CompanyPages/CompanyCreditDebitNote/CompanyCreditDebitNoteScreenOverview';
import CreateCompanyCreditDebitNoteScreen from '../components/CompanyPages/CompanyCreditDebitNote/CreateCompanyCreditDebitNoteScreen';
import Supplier from '../components/CompanyPages/Supplier/Supplier';
import SupplierOverview from '../components/CompanyPages/Supplier/SupplierOverview';
import GSTMapping from '../components/CompanyPages/Supplier/GSTMapping';
import PurchaseOrder from '../components/CompanyPages/Purchase/PurchaseOrder';
import PurchaseOrderOverview from '../components/CompanyPages/Purchase/PurchaseOrderOverview';
import CreateNewPROverview from '../components/CompanyPages/Purchase/CreateNewPROverview';
import PurchaseReturn from '../components/CompanyPages/Purchase/PurchaseReturn';
import PurchaseReturnOverview from '../components/CompanyPages/Purchase/PurchaseReturnOverview';
import CreateNewPR from '../components/CompanyPages/Purchase/CreateNewPR';


//Customer
//Customer

import CustomerCreditDebitNote from '../components/CustomerPages/CreditNote/CustomerCreditDebitNote';
import CustomerCreditDebitNoteOverview from  '../components/CustomerPages/CreditNote/CustomerCreditDebitNoteOverview';


//Customer

import Billing from '../components/CustomerPages/Billing/Billing'
import BillingOverview from '../components/CustomerPages/Billing/BillingOverview'
import CreateBilling from '../components/CustomerPages/Billing/CreateBilling'

import Collections from '../components/CustomerPages/Collections/Collections'
import CollectionsOverview from '../components/CustomerPages/Collections/CollectionsOverview'
import CreateCollections from '../components/CustomerPages/Collections/CreateCollections'
import CollectionCreateOverview from '../components/CustomerPages/Collections/CollectionCreateOverview'

import Retailer from '../components/CustomerPages/Retailer/Retailer'
import RetailerOverview from '../components/CustomerPages/Retailer/RetailerOverview'
import DeliveryProcess from '../components/CustomerPages/SalesReturn/DeliveryProcess'

import OrderBooking from '../components/CustomerPages/OrderBooking/OrderBooking'
import OrderBookingOverview from '../components/CustomerPages/OrderBooking/OrderBookingOverview'
import CreateOrderBooking from '../components/CustomerPages/OrderBooking/CreateOrderBooking'

import RetailerChannel from '../components/CustomerPages/Retailer/RetailerChannel'
import RetailerChannelOverview from '../components/CustomerPages/Retailer/RetailerChannelOverview'

import RetailerClass from '../components/CustomerPages/Retailer/RetailerClass'
import RetailerClassOverview from '../components/CustomerPages/Retailer/RetailerClassOverview'

import RetailerGroup from '../components/CustomerPages/Retailer/RetailerGroup'
import RetailerGroupOverview from '../components/CustomerPages/Retailer/RetailerGroupOverview'

import SalesReturn from '../components/CustomerPages/SalesReturn/SalesReturn'
import SalesReturnOverview from '../components/CustomerPages/SalesReturn/SalesReturnOverview'
import CreateSalesReturn from '../components/CustomerPages/SalesReturn/CreateSalesReturn'

import BankMaster from '../components/CustomerPages/BankMaster/BankMaster'
import BankMasterOverview from '../components/CustomerPages/BankMaster/BankMasterOverview'

import CollectionDiscount from '../components/CustomerPages/CollectionDiscountMaster/CollectionDiscount'
import CollectionDiscountOverview from '../components/CustomerPages/CollectionDiscountMaster/CollectionDiscountOverview'
import CreateCollectionDiscount from '../components/CustomerPages/CollectionDiscountMaster/CreateCollectionDiscount'
import CreateCollectionDiscountOverview from '../components/CustomerPages/CollectionDiscountMaster/CreateCollectionDiscountOverview'

import MidasSalesReturn from '../components/CustomerPages//MidasSalesReturn/MidasSalesReturn'
import MidasSalesReturnOverview from '../components/CustomerPages//MidasSalesReturn/MidasSalesReturnOverview'
import CreateMidasSalesReturn from '../components/CustomerPages//MidasSalesReturn/CreateMidasSalesReturn'
import MidasSalesReturnCreateOverview from '../components/CustomerPages/MidasSalesReturn/MidasSalesReturnCreateOverview'
import OrderToBilling from '../components/CustomerPages/Billing/OrderToBilling'

const Routes = () => {
    const Stack= createNativeStackNavigator()
>>>>>>> parent of 9075e54 (Change)
  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader route={props.route} />

      {/* Screen Content */}
      <View style={styles.content}>
        <Component {...props} />
      </View>

      {/* Footer */}
      <AppFooter />
    </View>
  );
};

const Routes = () => {
  return (
    <UserProvider>
       <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/* --- Auth Screens (Without Header/Footer) --- */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

<<<<<<< HEAD
        {/* --- Main Screens (With Header & Footer) --- */}
        <Stack.Screen name="HomeB2C" component={withHeaderAndFooter(HomeB2C)}/>
        <Stack.Screen name="Orders" component={withHeaderAndFooter(OrderScreen)}  />
        <Stack.Screen name="Products" component={withHeaderAndFooter(ProductsScreen)} />
        <Stack.Screen name="Returns" component={withHeaderAndFooter(ReturnsScreen)} />
        <Stack.Screen name="Payments" component={withHeaderAndFooter(CreditDetailsScreen)}/>
        <Stack.Screen name="Offers" component={withHeaderAndFooter(OffersScreen)}/>
        <Stack.Screen name="OfferDetails" component={withHeaderAndFooter(OffersDetailsScreen)} />
        <Stack.Screen name="Cart" component={withHeaderAndFooter(Cart)} />
        <Stack.Screen name="Profile" component={withHeaderAndFooter(Profile)} />
        <Stack.Screen name="ViewDetails" component={withHeaderAndFooter(ViewDetails)} />
        <Stack.Screen name="TrackRefund" component={withHeaderAndFooter(TrackRefundScreen)} />
        <Stack.Screen name="PaymentHistory" component={withHeaderAndFooter(PaymentHistory)} />
        <Stack.Screen name="MyAccount" component={withHeaderAndFooter(MyAccountScreen)} />
        <Stack.Screen name="AddAddress" component={withHeaderAndFooter(AddAddress)} />
        <Stack.Screen name="ManageAddress" component={withHeaderAndFooter(ManageAddress)} />
        <Stack.Screen name="ChangePassword" component={withHeaderAndFooter(ChangePassword)} />
        <Stack.Screen name="ContactUs" component={withHeaderAndFooter(ContactUs)} />
      </Stack.Navigator>
=======

             <Stack.Screen name="ClaimType" component={ClaimType} />
            <Stack.Screen name="ClaimOverview" component={ClaimOverview} />
            <Stack.Screen name="GSTClaim" component={GSTClaim} />
            <Stack.Screen name="GSTClaimOverview" component={GSTClaimOverview} />
            <Stack.Screen name="CreateNewGSTClaim" component={CreateNewGSTClaim} />
            <Stack.Screen name="InvoiceToClaim" component={InvoiceToClaim} />
            <Stack.Screen name="InvoicetoClaimOverview" component={InvoicetoClaimOverview} />
            <Stack.Screen name="LeakageDamage" component={LeakageClaim} />
            <Stack.Screen name="LeakageDamageReturnClaimOverview" component={LeakageDamageReturnClaimOverview} />
            <Stack.Screen name="CreateLeakageDamageReturnClaim" component={CreateLeakageDamageReturnClaim} />
            <Stack.Screen name="ManualClaim" component={ManualClaim} />
            <Stack.Screen name="ManualClaimOverview" component={ManualClaimOverview} />
            <Stack.Screen name="CreateNewManualClaim" component={CreateNewManualClaim} />
            <Stack.Screen name="OthersClaim" component={OtherClaim} />
            <Stack.Screen name="OthersServices" component={OtherServiceClaims} />
            <Stack.Screen name="OtherServiceClaimsOverview" component={OtherServiceClaimsOverview} />
            <Stack.Screen name="ProgramServices" component={Program} />
            <Stack.Screen name="ProgramServiceClaimOverview" component={ProgramServiceClaimOverview} />
            <Stack.Screen name="ProgramMaterial" component={ProgramMaterial} />
            <Stack.Screen name="Scheme" component={SchemeScreen} />
            <Stack.Screen name="SchemeOverview" component={SchemeOverview} />
            <Stack.Screen name="SecondarySchemeClaim" component={SecondarySchemeClaim} />
            <Stack.Screen name="SKU" component={SKU} />
            <Stack.Screen name="CreateSKUOverview" component={CreateSKUOverview} />
            <Stack.Screen name="TBTLClaim" component={TBTLClaim} />
            <Stack.Screen name="TBTLClaimOverview" component={TBTLClaimOverview} />
            <Stack.Screen name="ToClaim" component={ToClaim} />
            <Stack.Screen name="CreateNewClaimType" component={CreateNewClaimType} />
            <Stack.Screen name="OtherClaimOverview" component={OtherClaimOverview} />
            <Stack.Screen name="ProgramMaterialOverview" component={ProgramMaterialOverview} />
            <Stack.Screen name="ToClaimOverview" component={ToClaimOverview} />

            {/* Customer */}
            {/* 📌 Goods Receipt Note */}
          <Stack.Screen name="GoodsReceiptsNote" component={GoodsReceiptsNote} />
          <Stack.Screen name="GoodsReceiptsNoteOverview" component={GoodsReceiptsNoteOverview} />
          <Stack.Screen name="CreateNewGRN" component={CreateNewGRN} />

          {/* 📌 Company Credit/Debit Note */}
          <Stack.Screen name="CreditDebitNote" component={CreditDebitNote} />
          <Stack.Screen name="CompanyCreditDebitNoteScreenOverview" component={CompanyCreditDebitNoteScreenOverview} />
          <Stack.Screen name="CreateCompanyCreditDebitNoteScreen" component={CreateCompanyCreditDebitNoteScreen} />

          {/* 📌 Supplier */}
          <Stack.Screen name="Supplier" component={Supplier} />
          <Stack.Screen name="SupplierOverview" component={SupplierOverview} />
          <Stack.Screen name="GSTMapping" component={GSTMapping} />

          {/* 📌 Purchase Order */}
          <Stack.Screen name="PurchaseOrder" component={PurchaseOrder} />
          <Stack.Screen name="PurchaseOrderOverview" component={PurchaseOrderOverview} />
          <Stack.Screen name="CreateNewPROverview" component={CreateNewPROverview} />

          {/* 📌 Purchase Return */}
          <Stack.Screen name="PurchaseReturn" component={PurchaseReturn} />
          <Stack.Screen name="PurchaseReturnOverview" component={PurchaseReturnOverview} />
          <Stack.Screen name="CreateNewPR" component={CreateNewPR} />

          {/* {/Finance/} */}
          <Stack.Screen name="AccountCalendar"  component= {FinanceScreen}/>


          {/*Customer */}
          <Stack.Screen name="CustomerCreditDebitNote" component={CustomerCreditDebitNote} />
          <Stack.Screen name="CustomerCreditDebitNoteOverview" component={CustomerCreditDebitNoteOverview} />
          {/*Customer */}
{/* <Stack.Screen name="CustomerCreditDebitNote" component={CustomerCreditDebitNote} />
<Stack.Screen name="CustomerCreditDebitNoteOverview" component={CustomerCreditDebitNoteOverview} /> */}
{/* Billing Screens */}
<Stack.Screen name="Billing" component={Billing} />
<Stack.Screen name="BillingOverview" component={BillingOverview} />
<Stack.Screen name="CreateBilling" component={CreateBilling} />

{/* Collections Screens */}
<Stack.Screen name="Collections" component={Collections} />
<Stack.Screen name="CollectionsOverview" component={CollectionsOverview} />
<Stack.Screen name="CreateCollections" component={CreateCollections} />
<Stack.Screen name="CollectionCreateOverview" component={CollectionCreateOverview} />

<Stack.Screen name="Retailer" component={Retailer} />
<Stack.Screen name="RetailerOverview" component={RetailerOverview} />
<Stack.Screen name="DeliveryProcess" component={DeliveryProcess} />

<Stack.Screen name="OrderBooking" component={OrderBooking} />
<Stack.Screen name="OrderBookingOverview" component={OrderBookingOverview} />
<Stack.Screen name="CreateOrderBooking" component={CreateOrderBooking} />

<Stack.Screen name="RetailerChannel" component={RetailerChannel} />
<Stack.Screen name="RetailerChannelOverview" component={RetailerChannelOverview} />

<Stack.Screen name="RetailerClass" component={RetailerClass} />
<Stack.Screen name="RetailerClassOverview" component={RetailerClassOverview} />

<Stack.Screen name="RetailerGroup" component={RetailerGroup} />
<Stack.Screen name="RetailerGroupOverview" component={RetailerGroupOverview} />

<Stack.Screen name="SalesReturn" component={SalesReturn} />
<Stack.Screen name="SalesReturnOverview" component={SalesReturnOverview} />
<Stack.Screen name="CreateSalesReturn" component={CreateSalesReturn} />

<Stack.Screen name="BankMaster" component={BankMaster} />
<Stack.Screen name="BankMasterOverview" component={BankMasterOverview} />

<Stack.Screen name="CollectionDiscount" component={CollectionDiscount} />
<Stack.Screen name="CollectionDiscountOverview" component={CollectionDiscountOverview} />
<Stack.Screen name="CreateCollectionDiscount" component={CreateCollectionDiscount} />
<Stack.Screen name="CreateCollectionDiscountOverview" component={CreateCollectionDiscountOverview} />


<Stack.Screen name="MidasSalesReturn" component={MidasSalesReturn} />
<Stack.Screen name="MidasSalesReturnOverview" component={MidasSalesReturnOverview} />
<Stack.Screen name="CreateMidasSalesReturn" component={CreateMidasSalesReturn} />
<Stack.Screen name="MidasSalesReturnCreateOverview" component={MidasSalesReturnCreateOverview} />

<Stack.Screen name="OrderToBilling" component={OrderToBilling} />
        </Stack.Navigator>
>>>>>>> parent of 9075e54 (Change)
    </NavigationContainer>
    </ CartProvider>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    marginBottom: 60, // Space for footer
  },
});

export default Routes;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import all CompanyPages screens
import Supplier from '../components/CompanyPages/Supplier/Supplier';
import SupplierOverview from '../components/CompanyPages/Supplier/SupplierOverview';
import GoodsReceiptsNote from '../components/CompanyPages/GoodsReceiptsNote/GoodsReceiptsNote';
import GoodsReceiptsNoteOverview from '../components/CompanyPages/GoodsReceiptsNote/GoodsReceiptsNoteOverview';
import CreateNewGRN from '../components/CompanyPages/GoodsReceiptsNote/CreateNewGRN';
import CompanyCreditDebitNoteScreen from '../components/CompanyPages/CompanyCreditDebitNote/CompanyCreditDebitNoteScreen';
import CompanyCreditDebitNoteScreenOverview from '../components/CompanyPages/CompanyCreditDebitNote/CompanyCreditDebitNoteScreenOverview';
import CreateCompanyCreditDebitNoteScreen from '../components/CompanyPages/CompanyCreditDebitNote/CreateCompanyCreditDebitNoteScreen';
import PurchaseOrder from '../components/CompanyPages/Purchase/PurchaseOrder';
import PurchaseOrderOverview from '../components/CompanyPages/Purchase/PurchaseOrderOverview';
import CreateNewPROverview from '../components/CompanyPages/Purchase/CreateNewPROverview';
import PurchaseReturn from '../components/CompanyPages/Purchase/PurchaseReturn';
import PurchaseReturnOverview from '../components/CompanyPages/Purchase/PurchaseReturnOverview';
import CreateNewPR from '../components/CompanyPages/Purchase/CreateNewPR';

const Stack = createStackNavigator();

const CompanyPagesRoute = () => (
  <Stack.Navigator initialRouteName="GoodsReceiptsNote">
    <Stack.Screen name="Supplier" component={Supplier} />
    <Stack.Screen name="SupplierOverview" component={SupplierOverview} />
    <Stack.Screen name="GoodsReceiptsNote" component={GoodsReceiptsNote} />
    <Stack.Screen name="GoodsReceiptsNoteOverview" component={GoodsReceiptsNoteOverview} />
    <Stack.Screen name="CreateNewGRN" component={CreateNewGRN} />
    <Stack.Screen name="CompanyCreditDebitNoteScreen" component={CompanyCreditDebitNoteScreen} />
    <Stack.Screen name="CompanyCreditDebitNoteScreenOverview" component={CompanyCreditDebitNoteScreenOverview} />
    <Stack.Screen name="CreateCompanyCreditDebitNoteScreen" component={CreateCompanyCreditDebitNoteScreen} />
    <Stack.Screen name="PurchaseOrder" component={PurchaseOrder} />
    <Stack.Screen name="PurchaseOrderOverview" component={PurchaseOrderOverview} />
    <Stack.Screen name="CreateNewPROverview" component={CreateNewPROverview} />
    <Stack.Screen name="PurchaseReturn" component={PurchaseReturn} />
    <Stack.Screen name="PurchaseReturnOverview" component={PurchaseReturnOverview} />
    <Stack.Screen name="CreateNewPR" component={CreateNewPR} />
  </Stack.Navigator>
);

export default CompanyPagesRoute;

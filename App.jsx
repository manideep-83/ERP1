
import React, { useState } from 'react';

import { View, StyleSheet, StatusBar } from 'react-native';

import Login from './src/components/Login';
import ForgotPassword from './src/components/ForgotPassword'
import AppHeader from './src/components/AppHeader'
import Home from './src/components/Home'
import Distribution from './src/components/Distribution'
import Inventory from './src/components/Inventory'
import ConfigurationScreen from './src/components/Configuration';
import FormComp from './src/components/form'
import Finance from './src/components/Finance'
import OverView from './src/components/OrderOverview'
import Invoice from './src/components/Invoice'
import ReportGeneration from './src/components/ReportGeneration'
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './src/Navigation/Routes';
import Routes from './src/Navigation/Routes';
import LoginScreen from './src/components/Login';
import { Text } from 'react-native-paper';
import ProductOverview from './src/components/ProductPage/GST'
import Overview2 from './src/components/ProductPage/Overview2'
import PriceDiscount from './src/components/ProductPage/PriceDiscount'
import Pda from './src/components/ConfigurationPages/Pda'
import BillPrintConfig from './src/components/ConfigurationPages/BillPrintConfig'
import DayEnd from './src/components/ConfigurationPages/DayEnd'
import Einvoice from './src/components/ConfigurationPages/Einvoice'
import CreateHoliday from './src/components/ConfigurationPages/CreateHoliday'
import CreateScreenName from './src/components/ConfigurationPages/CreateScreenName'
import CreateRCS from './src/components/DistributionPages/CreateRCS'
import EInvoiceReport from './src/components/DistributionPages/EInvoiceReport'
import P$P from './src/components/ProductPage/P$P';
import CreatePurchaseOrder from './src/components/CompanyPages/Purchase/CreatePurchaseOrder'
import ERPState from './src/Context/ERPState'
const App = () => {
  return (
  
  <ERPState>
    <Routes/>  
  </ERPState>
  );
};

export default App;


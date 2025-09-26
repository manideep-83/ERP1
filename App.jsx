
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
import ProductOverview from './src/components/ProductPage/ProductOverview'
import Overview2 from './src/components/ProductPage/Overview2'
import PriceDiscount from './src/components/ProductPage/PriceDiscount'
import Pda from './src/components/ConfigurationPages/Pda'
import DistributorConfig from './src/components/ConfigurationPages/DistributorConfig'
import DayEnd from './src/components/ConfigurationPages/DayEnd'
import Einvoice from './src/components/ConfigurationPages/Einvoice'
import HolidayCalander from './src/components/ConfigurationPages/HolidayCalander'
import CreateScreenName from './src/components/ConfigurationPages/CreateScreenName'
import CreateStockiest from './src/components/DistributionPages/CreateStockiest'
const App = () => {
  return (
  <View style={{display:'flex', flexDirection:'column'}}>
    {/* <Overview2/> */}
    <CreateStockiest />
  </View>  
  );
};

export default App;


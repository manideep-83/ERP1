
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
const App = () => {
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <Login navigateTo={navigateTo} />;
      case 'ForgotPassword':
        return <ForgotPassword navigateTo={navigateTo} />;
      default:
        return <AppHeader />
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4a69bd" />
      <AppHeader/>
      <Invoice />
    </View>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;


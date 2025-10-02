import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import all FinancePages screens
import FinanceScreen from '../components/FinancePages/FinanceScreen';

const Stack = createStackNavigator();

const FinancePagesRoute = () => (
  <Stack.Navigator initialRouteName="FinanceScreen">
    <Stack.Screen name="FinanceScreen" component={FinanceScreen} />
  </Stack.Navigator>
);

export default FinancePagesRoute;

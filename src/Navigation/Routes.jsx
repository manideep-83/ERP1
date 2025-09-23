import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from '../components/ForgotPassword'
import LoginScreen from '../components/Login'
import Home from '../components/Home';
import AppHeader from '../components/AppHeader';
import Company from '../components/Company'
import Distribution from '../components/Distribution';
import Inventory from '../components/Inventory';
import Scheme from '../components/Scheme'
import Finance from '../components/Finance';
import ConfigurationScreen from '../components/Configuration';
import ReportScreen from '../components/Report'
import Utilities from '../components/Utilities'
import Product from '../components/Product'
const Routes = () => {
    const Stack= createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' 
          screenOptions={{
          
          header: ({ route, options }) => {
            if (options.headerShown === false) return null; 
            return <AppHeader />;
          },
        }}>
            <Stack.Screen name="Login" options={{ headerShown: false }} component= {LoginScreen}/>
            <Stack.Screen name="ForgotPassword" options={{ headerShown: false}} component= {ForgotPassword}/>
            <Stack.Screen name="Home" options={{ headerShown: true }} component= {Home}/>
            <Stack.Screen name="Company" options={{ headerShown: true }} component= {Company}/>
            <Stack.Screen name="Distribution" options={{ headerShown: true  }} component= {Distribution}/>
            <Stack.Screen name="Inventory" options={{ headerShown: true }} component= {Inventory}/>
            <Stack.Screen name="Product & Price" options={{ headerShown: true}} component= {Product}/>
            <Stack.Screen name="Schemes & Claims" options={{ headerShown: true }} component= {Scheme}/>
            <Stack.Screen name="Finance" options={{ headerShown: true }} component= {Finance}/>
            <Stack.Screen name="Configuration" options={{ headerShown: true}} component= {ConfigurationScreen}/>
            <Stack.Screen name="Reports" options={{ headerShown: true }} component= {ReportScreen}/>
            <Stack.Screen name="Utilities" options={{ headerShown: true }} component= {Utilities}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
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

/**
 * Wrapper HOC for Header & Footer Layout
 */
const withHeaderAndFooter = (Component) => (props) => {
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

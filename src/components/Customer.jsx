import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, SafeAreaView } from 'react-native';

// Data for each of the master buttons
const customerData = [
  { id: '1', name: 'Credit/Debit Note', icon: require('../../Assets/distribution/mdi_cash.png'), route: 'CreditDebitNote' },
  { id: '2', name: 'Billing', icon: require('../../Assets/distribution/Vector.png'), route: 'Billing' },
  { id: '3', name: 'Collections', icon: require('../../Assets/distribution/icon-park-outline_engineering-vehicle.png'), route: 'Collections' },
  { id: '4', name: 'B2B Customers', icon: require('../../Assets/distribution/mdi_human-male.png'), route: 'Retailer' },
  { id: '5', name: 'B2C Customers', icon: require('../../Assets/distribution/mdi_human-male.png'), route: 'B2CCustomer' },
  { id: '6', name: 'Order Booking', icon: require('../../Assets/distribution/tabler_map-route.png'), route: 'OrderBooking' },
  { id: '7', name: 'Retailer Channel', icon: require('../../Assets/distribution/akar-icons_location.png'), route: 'RetailerChannel' },
  { id: '8', name: 'Retailer Class', icon: require('../../Assets/distribution/oi_location.png'), route: 'RetailerClass' },
  { id: '9', name: 'Retailer Group', icon: require('../../Assets/distribution/mage_location-pin.png'), route: 'RetailerGroup' },
  { id: '10', name: 'Sales Return', icon: require('../../Assets/distribution/mdi_human-male-1.png'), route: 'SalesReturn' },
  { id: '11', name: 'Bank Master', icon: require('../../Assets/distribution/openmoji_circled-human-figure.png'), route: 'BankMaster' },
  { id: '12', name: 'Collection Discount', icon: require('../../Assets/distribution/icon-park-outline_engineering-vehicle-2.png'), route: 'CollectionDiscount' },
  { id: '13', name: 'Midas Sales Return', icon: require('../../Assets/distribution/streamline-ultimate-color_human-resources-workflow.png'), route: 'MidasSalesReturn' },
  { id: '14', name: 'Order to Billing', icon: require('../../Assets/distribution/openmoji_circled-human-figure.png'), route: 'OrderToBilling' },
];

const colors = ['#82D1DA', '#87CEFA', '#6495ED', '#4682B4', '#8AAEDD', '#4169E1'];
const { width } = Dimensions.get('window');
const itemSize = (width - 60) / 3;

const Customer = () => {
  const navigation = useNavigation();

  const routeMap = {
    'Credit/Debit Note': 'CustomerCreditDebitNote',
    'Billing': 'Billing',
    'Collections': 'Collections',
    'B2B Customers': 'Retailer',
    'B2C Customers': 'B2CCustomer',
    'Order Booking': 'OrderBooking',
    'Retailer Channel': 'RetailerChannel',
    'Retailer Class': 'RetailerClass',
    'Retailer Group': 'RetailerGroup',
    'Sales Return': 'SalesReturn',
    'Bank Master': 'BankMaster',
    'Collection Discount': 'CollectionDiscount',
    'Midas Sales Return': 'MidasSalesReturn',
    'Order to Billing': 'OrderToBilling',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Customer</Text>
          <Text style={styles.subtitle}>Welcome back! Here's your business overview</Text>
          <View style={styles.gridContainer}>
            {customerData.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.itemContainer, { backgroundColor: colors[index % colors.length] }]}
                onPress={() => navigation.navigate(routeMap[item.name])}
              >
                <Image source={item.icon} style={styles.icon} resizeMode="contain" />
                <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#f3f4f6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: itemSize,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Customer;
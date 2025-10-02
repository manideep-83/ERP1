import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';

// Map grid item names to their navigation route names
const routeMap = {
  'Scheme': 'Scheme',
  'Claim Type': 'ClaimType',
  'Others Claim': 'OthersClaim',
  'Secondary Scheme Claim': 'SecondarySchemeClaim',
  'Invoice Tot Claim': 'InvoiceToClaim',
  'Program Material': 'ProgramMaterial',
  'GST Claim': 'GSTClaim',
  'TBTL Claim': 'TBTLClaim',
  'Others Services': 'OthersServices',
  'Program Services': 'ProgramServices',
  'To Claim': 'ToClaim',
  'Manual Claim': 'ManualClaim',
  'Leakage Damage': 'LeakageDamage',
};

// Data for each of the master buttons, including the navigation route
const mastersData = [
  { id: '1', name: 'Scheme', icon: require('../../Assets/distribution/mdi_cash.png'), route: routeMap['Scheme'] },
  { id: '2', name: 'Claim Type', icon: require('../../Assets/distribution/Vector.png'), route: routeMap['Claim Type'] },
  { id: '3', name: 'Others Claim', icon: require('../../Assets/distribution/icon-park-outline_engineering-vehicle.png'), route: routeMap['Others Claim'] },
  { id: '4', name: 'Secondary Scheme Claim', icon: require('../../Assets/distribution/icon-park-outline_engineering-vehicle-1.png'), route: routeMap['Secondary Scheme Claim'] },
  { id: '5', name: 'Invoice To Claim', icon: require('../../Assets/distribution/mdi_human-male.png'), route: routeMap['Invoice Tot Claim'] },
  { id: '6', name: 'Program Material', icon: require('../../Assets/distribution/tabler_map-route.png'), route: routeMap['Program Material'] },
  { id: '7', name: 'GST Claim', icon: require('../../Assets/distribution/akar-icons_location.png'), route: routeMap['GST Claim'] },
  { id: '8', name: 'TBTL Claim', icon: require('../../Assets/distribution/oi_location.png'), route: routeMap['TBTL Claim'] },
  { id: '9', name: 'Others Services', icon: require('../../Assets/distribution/mage_location-pin.png'), route: routeMap['Others Services'] },
  { id: '10', name: 'Program Services', icon: require('../../Assets/distribution/mdi_human-male-1.png'), route: routeMap['Program Services'] },
  { id: '11', name: 'To Claim', icon: require('../../Assets/distribution/openmoji_circled-human-figure.png'), route: routeMap['To Claim'] },
  { id: '12', name: 'Manual Claim', icon: require('../../Assets/distribution/icon-park-outline_engineering-vehicle-2.png'), route: routeMap['Manual Claim'] },
  { id: '13', name: 'Leakage Damage', icon: require('../../Assets/distribution/streamline-ultimate-color_human-resources-workflow.png'), route: routeMap['Leakage Damage'] },
];

const colors = ['#82D1DA', '#87CEFA', '#6495ED', '#4682B4', '#8AAEDD', '#4169E1'];
const { width } = Dimensions.get('window');
const itemSize = (width - 60) / 3;

const Scheme = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Scheme</Text>
        <Text style={styles.subtitle}>Welcome back! Here's your business overview</Text>
        <View style={styles.gridContainer}>
          {mastersData.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.itemContainer, { backgroundColor: colors[index % colors.length] }]}
              onPress={() => item.route && navigation.navigate(item.route)}
            >
              <Image source={item.icon} style={styles.icon} resizeMode="contain" />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#f3f4f6', // Subtle gray background for the content area
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // Overlap with the header for a smooth transition
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
    height: itemSize,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
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

export default Scheme;
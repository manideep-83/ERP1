import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

// Data for each of the master buttons
const mastersData = [
  { id: '1', name: 'Goods Receipt Note', icon: require('../../Assets/Company/GRN.png') },
  { id: '2', name: 'Credit/Debit Note', icon: require('../../Assets/Company/CDN.png') },
  { id: '3', name: 'Supplier', icon: require('../../Assets/Company/Supplier.png') },
  { id: '4', name: 'Purchase Order', icon: require('../../Assets/Company/PO.png') },
  { id: '5', name: 'Purchase Return', icon: require('../../Assets/Company/PR.png') },
  { id: '6', name: 'GST Mapping', icon: require('../../Assets/Company/GST.png') },
];

const Company = () => {
  const navigation = useNavigation();

  // Map grid item to route name
  const routeMap = {
    'Goods Receipt Note': 'GoodsReceiptsNote',
    'Credit/Debit Note': 'CreditDebitNote',
    'Supplier': 'Supplier',
    'Purchase Order': 'PurchaseOrder',
    'Purchase Return': 'PurchaseReturn',
    'GST Mapping': 'GSTMapping',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Company</Text>
        <Text style={styles.subtitle}>Welcome back! Here's your business overview</Text>
        <View style={styles.gridContainer}>
          {mastersData.map((item, index) => (
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
  );
};

const colors = ['#82D1DA', '#87CEFA', '#6495ED', '#4682B4', '#8AAEDD', '#4169E1'];

const styles = StyleSheet.create({
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
    width: '31%',
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

export default Company;

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppHeader from './AppHeader'; // Assuming the AppHeader component is in a separate file
import { useNavigation } from '@react-navigation/native';

// Data for each of the master buttons
const mastersData = [
  { id: '1', name: 'Company', icon: require('../../Assets/Home/Vector-1.png') },
  { id: '2', name: 'Customer', icon: require('../../Assets/Home/Vector-3.png') },
  { id: '3', name: 'Distribution', icon: require('../../Assets/Home/Vector.png') },
  { id: '4', name: 'Inventory', icon: require('../../Assets/Home/Vector-2.png') },
  { id: '5', name: 'Product & Price', icon: require('../../Assets/Home/Vector-5.png') },
  { id: '6', name: 'Schemes & Claims', icon: require('../../Assets/Home/Vector-4.png') },
  { id: '7', name: 'Finance', icon: require('../../Assets/Home/Vector-6.png') },
  { id: '8', name: 'Configuration', icon: require('../../Assets/Home/Vector-7.png') },
  { id: '9', name: 'Reports', icon: require('../../Assets/Home/Vector-8.png') },
  { id: '10', name: 'Utilities', icon: require('../../Assets/Home/Vector-9.png') }
];

const Home = () => {
  const navigation=useNavigation()
    const change=(item)=>{
      // console.error("pressed",id);
       return navigation.navigate(item.name);
    }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Welcome back! Here's your business overview</Text>
        <View style={styles.gridContainer}>
          {mastersData.map((item,index ) => (
            <TouchableOpacity key={item.id} onPress={()=>change(item)} style={[styles.itemContainer,{ backgroundColor: colors[index % colors.length] }]}>
              <Image source={item.icon} style={styles.icon} resizeMode="contain" />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const colors=[ '#82D1DA', '#87CEFA', '#6495ED', '#4682B4', '#8AAEDD' ,'#4169E1'];
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
    width: '31%', // Roughly 1/3 of the container width
    aspectRatio: 1, // Keep items square
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    paddingBottom: 16,
    paddingLeft:8,
    paddingRight:8,
    paddingTop:16,
    marginBottom: 9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
itemName: {
//   fontFamily: 'Poppins-SemiBold',
  fontSize: 17,
  lineHeight: 20,
  letterSpacing: 0,
  textAlign: 'center',
  color: '#FFFFFF',
},


});

export default Home;
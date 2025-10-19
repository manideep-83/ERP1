import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppHeader = ({ route }) => {
  // Use the hook to get the navigation object
  const navigation = useNavigation();

  // Function to go back to the previous screen
  const change = () => {
    return navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        {/* Left Section: Back Button (conditionally rendered) */}
        {(route.name !== "HomeB2C" && route.name !== "Orders" && route.name !== "Payments" && route.name !== "Returns" && route.name !== "Products") && (
          <TouchableOpacity onPress={change}>
            {/* Note: This requires the correct path to your image asset */}
            <Image
              source={require('../../Assets/Vector.png')} 
              style={styles.logo}
            />
          </TouchableOpacity>
        )}
        
        {/* Middle Section: Logo and Text */}
        <View style={styles.appInfoContainer}>
          {/* App Logo */}
          <Image
            source={require('../../Assets/Home/Vector-1.png')} 
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>Bahupada</Text>
          </View>
        </View>

        {/* Right Side: Icons (Cart and Profile) */}
        <View style={styles.iconGroup}>
          {/* Cart Icon: onPress moved to TouchableOpacity */}
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Cart')} // <-- FIX APPLIED HERE
          >
            <Image
              source={require('../../Assets/shopping_cart.png')} 
              style={styles.logo}
            />
          </TouchableOpacity>
          
          {/* Profile Icon: onPress moved to TouchableOpacity */}
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Profile')} // <-- FIX APPLIED HERE
          >
            <Image
              source={require('../../Assets/login/Vector-3.png')} 
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#1e3a8a', // Solid background color
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  appInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1, // Allows it to take up available space
    marginLeft: 15,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#d1d5db',
    fontSize: 12,
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    // Optional: Add padding for a larger touch target
    padding: 5,
  },
});

export default AppHeader;

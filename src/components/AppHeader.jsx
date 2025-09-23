import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppHeader = () => {
  const navigation=useNavigation()
  const change=()=>{
    return navigation.goBack();
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        
        <TouchableOpacity onPress={change} >
          <Image
            source={require('../../Assets/Vector.png')} 
            style={styles.logo}
          />
        </TouchableOpacity>

        {/* Middle Section: Logo and Text */}
        <View style={styles.appInfoContainer}>
          {/* You would replace this with your actual app logo image */}
          <Image
            source={require('../../Assets/Home/Vector-1.png')} 
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>Bahupada</Text>
            <Text style={styles.subtitle}>Distributor Panel</Text>
          </View>
        </View>

        {/* Right Side: Icons */}
        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
            source={require('../../Assets/login/Vector-1.png')} 
            style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
           <Image
            source={require('../../Assets/bell.png')} 
            style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
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
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AppHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>

        {/* Left: Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Image
            source={require('../../Assets/Vector.png')}   
            style={styles.logo}
          />
        </TouchableOpacity>

        {/* Middle: Logo + Title */}
        <View style={styles.appInfoContainer}>
          <Image
            source={require('../../Assets/Home/Vector-1.png')} 
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>Bahupada</Text>
          </View>
        </View>

        {/* Right: Action Icons */}
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
    backgroundColor: '#1e3a8a',
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
    marginLeft: 15,
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: 5,
    resizeMode: 'contain',
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
  },
  iconButton: {
    padding: 6,
    marginLeft: 12, // replaces unsupported gap
  },
});

export default AppHeader;

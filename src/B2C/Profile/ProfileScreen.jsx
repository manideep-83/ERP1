import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../B2C/Context/UserContext'; // import your context

// Reusable component for a single navigation item
const MenuItem = ({ label, onPress, isLast, isLogout = false }) => (
  <TouchableOpacity 
    style={[styles.menuItem, isLast && styles.lastMenuItem]} 
    onPress={onPress}
  >
    <Text style={[styles.menuItemText, isLogout && styles.logoutText]}>{label}</Text>
    {!isLogout && <Text style={styles.arrowIcon}>›</Text>}
  </TouchableOpacity>
);

// Reusable component for section header
const SectionHeader = ({ title }) => (
  <Text style={styles.sectionHeader}>{title}</Text>
);

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { username } = useContext(UserContext); // get user type from context

  // Logout confirmation and navigation to Login
  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: () => {
            console.log('User Logged Out');
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.screenTitle}>{username}</Text>

        {/* ACCOUNT Section */}
        <View style={styles.menuGroup}>
          <SectionHeader title="Account" />
          <MenuItem label="My Account" onPress={() => navigation.navigate('MyAccount')} />
          <MenuItem label="Products" onPress={() => navigation.navigate('Products')} />
          <MenuItem label="Offers & Schemes" onPress={() => navigation.navigate('Offers')} />

          {/* Only show Credit Details for Business users */}
          {username === 'Business' && (
            <MenuItem label="Credit Details" onPress={() => navigation.navigate('Payments')} isLast={true} />
          )}
        </View>

        {/* HISTORY Section */}
        <View style={styles.menuGroup}>
          <SectionHeader title="History" />
          <MenuItem label="Orders" onPress={() => navigation.navigate('Orders')} />
          <MenuItem label="Returns" onPress={() => navigation.navigate('Returns')} />
          <MenuItem label="Payment History" onPress={() => navigation.navigate('PaymentHistory')} isLast={true} />
        </View>

        {/* SUPPORT Section */}
        <View style={styles.menuGroup}>
          <SectionHeader title="Support" />
          {/* <MenuItem label="Help Center" onPress={() => navigation.navigate('HelpCenter')} /> */}
          <MenuItem label="Contact Us" onPress={() => navigation.navigate('ContactUs')} isLast={true} />
        </View>

        {/* LOGOUT */}
        <View style={styles.logoutContainer}>
          <MenuItem 
            label="Log Out" 
            onPress={handleLogout} 
            isLast={true} 
            isLogout={true} 
          />
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F5F5' },
  scrollContainer: { paddingHorizontal: 15, paddingTop: 10 },
  screenTitle: {
    fontSize: 26, fontWeight: 'bold', color: '#000', textAlign: 'center',
    marginBottom: 20, paddingTop: 10,
  },
  menuGroup: {
    backgroundColor: 'white', borderRadius: 10, marginBottom: 20,
    overflow: 'hidden', borderWidth: 1, borderColor: '#E0E0E0',
  },
  sectionHeader: {
    fontSize: 16, fontWeight: 'bold', color: '#1f75bcff',
    paddingHorizontal: 15, paddingTop: 10, paddingBottom: 5,
    backgroundColor: '#f9f9f9', borderBottomWidth: 1, borderBottomColor: '#E0E0E0',
  },
  menuItem: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 15, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#F0F0F0',
  },
  lastMenuItem: { borderBottomWidth: 0 },
  menuItemText: { fontSize: 16, color: '#333' },
  arrowIcon: { fontSize: 18, color: '#AAA', fontWeight: 'bold' },
  logoutContainer: {
    backgroundColor: 'white', borderRadius: 10, marginBottom: 20,
    overflow: 'hidden', borderWidth: 1, borderColor: '#E0E0E0',
  },
  logoutText: { color: '#dc3545', fontWeight: 'bold', textAlign: 'center', flex: 1 },
});

export default ProfileScreen;

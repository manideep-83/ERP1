import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { UserContext } from '../../B2C/Context/UserContext'; // Import your UserContext

const ProfileMenuItem = ({ label, onPress, subText }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <Text style={styles.menuText}>{label}</Text>
    </View>
    <View style={styles.menuItemRight}>
      {subText && <Text style={styles.subText}>{subText}</Text>}
    </View>
  </TouchableOpacity>
);

const ProfileScreen = () => {
  const { username } = useContext(UserContext); // Get user type from context

  const user = {
    name: 'John Doe',
    profilePic: 'https://placeimg.com/640/480/people',
    email: 'johndoe@example.com',
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header Section */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <ProfileMenuItem label="My Account" onPress={() => console.log("Navigate to My Account")} />
        <ProfileMenuItem label="Products" onPress={() => console.log("Navigate to Products")} />
        <ProfileMenuItem label="Offers & Schemes" onPress={() => console.log("Navigate to Offers")} />

        {/* Only show Credit Details for Business users */}
        {username === 'Business' && (
          <ProfileMenuItem label="Credit Details" onPress={() => console.log("Navigate to Credit Details")} />
        )}
      </View>

      {/* History Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>History</Text>
        <ProfileMenuItem label="Orders" onPress={() => console.log("Navigate to Orders")} />
        <ProfileMenuItem label="Payment History" onPress={() => console.log("Navigate to Payment History")} />
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <ProfileMenuItem label="Help Center" onPress={() => console.log("Navigate to Help Center")} />
        <ProfileMenuItem label="Contact Us" onPress={() => console.log("Navigate to Contact Us")} />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  profileHeader: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
  },
  profilePic: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  userName: { fontSize: 22, fontWeight: 'bold' },
  userEmail: { fontSize: 14, color: '#666' },
  section: { backgroundColor: '#fff', marginBottom: 20, borderWidth: 1, borderColor: '#eee' },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemLeft: { flexDirection: 'row', alignItems: 'center' },
  menuItemRight: { flexDirection: 'row', alignItems: 'center' },
  menuText: { fontSize: 16, color: '#333' },
  subText: { fontSize: 14, color: '#999', marginRight: 10 },
  logoutButton: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
  },
  logoutButtonText: { color: 'red', fontSize: 16, fontWeight: 'bold' },
});

export default ProfileScreen;

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook

// --- Reusable Components (Defined here for single file mandate) ---

// Component for Quick Links Card (Orders, Cart, Offers, Credit Details)
const QuickLinkCard = ({ icon, label, count, onPress }) => (
  <TouchableOpacity style={styles.quickLinkCard} onPress={onPress}>
    <View style={styles.quickLinkContentRow}>
      {/* LEFT COLUMN: Icon */}
      <View style={styles.quickLinkIconContainer}>
        <Text style={styles.quickLinkIcon}>{icon}</Text>
      </View>
      
      {/* RIGHT COLUMN: Count and Label */}
      <View style={styles.quickLinkTextContent}>
        <Text style={styles.quickLinkCount}>{count}</Text>
        <Text style={styles.quickLinkLabel}>{label}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

// Component for Sales Overview Card (Today, This Week, This Month)
const CardComponent = ({ title, value, subtitle, isActive, onPress }) => (
  <TouchableOpacity 
    style={[styles.salesCard, isActive && styles.salesCardActive]} 
    onPress={onPress}
  >
    <Text style={styles.salesTitle}>{title}</Text>
    <Text style={[styles.salesValue, isActive && styles.salesValueActive]}>{value}</Text>
    <Text style={styles.salesSubtitle}>{subtitle}</Text>
  </TouchableOpacity>
);

// --- Main Screen Component ---

const HomeB2C = () => {
    const navigation = useNavigation(); // Initialize navigation

    // Dummy data for Quick Links
    const quickLinksData = [
        { icon: '📦', label: 'Orders', count: '12', route: 'Orders' },
        { icon: '🛒', label: 'Cart', count: '05', route: 'Cart' },
        { icon: '🎁', label: 'Offers', count: '01', route: 'Offers' },
        { icon: '🔄', label: 'Returns', count: '02', route: 'Returns'},
    ];

    // Dummy data for Sales Overview
    const salesData = [
        { title: 'Today', value: '₹15,340', subtitle: 'vs previous period', isActive: false },
        { title: 'This Week', value: '₹89,520', subtitle: 'vs previous period', isActive: true },
        { title: 'This Month', value: '₹3,45,680', subtitle: 'vs previous period', isActive: false },
    ];

    const handleQuickLinkPress = (item) => {
        // Navigate using the defined route name
        if (item.route) {
            navigation.navigate(item.route);
        } else {
            console.warn(`Route not defined for ${item.label}`);
        }
    };
    
    // Handler for Pay button
    const handlePayNow = () => {
        navigation.navigate('CreditDetails'); // Navigate to Credit Details screen
    };


    return (
        <SafeAreaView style={styles.container}>
            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                
                {/* Welcome Section */}
                <View style={styles.welcomeSection}>
                    <View>
                        <Text style={styles.welcomeText}>Welcome Back,</Text>
                        <Text style={styles.subtitleText}>Here's what's happening with business today</Text>
                    </View>
                    {/* <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
                        <Text style={styles.payButtonText}>💳 Pay</Text>
                    </TouchableOpacity> */}
                </View>

                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search products or orders..."
                        placeholderTextColor="#888"
                    />
                    <Text style={styles.searchIcon}>🔍</Text>
                </View>

                {/* Quick Links Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Links</Text>
                    <View style={styles.quickLinksContainer}>
                        {quickLinksData.map((item, index) => (
                            <QuickLinkCard
                                key={index}
                                icon={item.icon}
                                label={item.label}
                                count={item.count}
                                onPress={() => handleQuickLinkPress(item)}
                            />
                        ))}
                    </View>
                </View>

                {/* Sales Overview Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sales Overview</Text>
                    <View style={styles.salesOverviewContainer}>
                        {salesData.map((item, index) => (
                            <CardComponent
                                key={index}
                                title={item.title}
                                value={item.value}
                                subtitle={item.subtitle}
                                isActive={item.isActive}
                                onPress={() => console.log(`${item.title} card pressed`)}
                            />
                        ))}
                    </View>
                </View>

                {/* Credit Balance Card */}
                <View style={styles.creditBalanceCard}>
                    <View style={styles.creditInfo}>
                        <Text style={styles.creditInfoTitle}>💳 Credit Balance</Text>
                        <Text style={styles.creditBalanceValue}>₹25,000</Text>
                        <Text style={styles.creditDetails}>
                            Outstanding balance, Credit Limit: ₹1,00,000
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
                        <Text style={styles.payNowButtonText}>💳 Pay Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: 80}} /> 
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    padding: 16,
  },

  // --- Welcome Section ---
  welcomeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#000',
  },
  subtitleText: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  payButton: {
    backgroundColor: '#1f75bcff', // Vibrant purple
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#1f75bcff',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // --- Search Bar ---
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    color: '#333',
    fontSize: 16,
  },
  searchIcon: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
  
  // --- Quick Links & Sales Overview General ---
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000',
    marginBottom: 15,
  },

  // --- Quick Links ---
  quickLinksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  quickLinkCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    height: 140,
    marginBottom: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    justifyContent: 'center',
  },
  quickLinkContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 15,
  },
  quickLinkIconContainer: {
    backgroundColor: '#f3e6ff',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-start',
  },
  quickLinkTextContent: {
    alignSelf: 'flex-start',
    flex: 1,
  },
  quickLinkIcon: {
    fontSize: 32,
    color: '#1f75bcff',
  },
  quickLinkCount: {
    fontSize: 28,
    fontWeight: '900',
    color: '#000',
  },
  quickLinkLabel: {
    fontSize: 14,
    color: '#555',
    fontWeight: '600',
  },

  // --- Sales Overview ---
  salesOverviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salesCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginHorizontal: 4,
    height: 100,
    elevation: 2,
  },
  salesCardActive: {
    borderColor: '#1f75bcff',
    borderWidth: 2,
  },
  salesTitle: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  salesValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#000',
    marginVertical: 4,
  },
  salesValueActive: {
    color: '#1f75bcff',
  },
  salesSubtitle: {
    fontSize: 10,
    color: '#888',
  },
  
  // --- Credit Balance Card ---
  creditBalanceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginTop: 15,
  },
  creditInfo: {
    flex: 1,
  },
  creditInfoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  creditBalanceValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1f75bcff',
    marginTop: 4,
  },
  creditDetails: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  payNowButton: {
    backgroundColor: '#1f75bcff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    elevation: 3,
  },
  payNowButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeB2C;
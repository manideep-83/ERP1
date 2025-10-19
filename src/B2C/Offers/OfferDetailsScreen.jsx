import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

// Dummy data for a specific offer detail view (You would pass this via navigation)
const offerData = {
    id: '1',
    category: 'Oral Care',
    title: 'Dabur Bulk Purchase Offer',
    description: 'Buy 6 bundles of ₹10 Dabur paste → Get 1 free',
    minOrder: 650,
    maxSaving: 100,
    validUntil: '2024-02-15',
    offPercentage: '16.67% OFF',
    conditions: [
      'Applicable on Dabur Red Paste only',
      'Minimum 6 units required',
      'Cannot be combined with other offers',
      'Valid for first 100 outlets',
      'Requires credit check approval',
    ],
    termsAndConditions: 'This offer is subject to availability and can be withdrawn without prior notice. Maximum of one redemption per customer during the promotional period. Retailer must comply with all local laws.',
};

const OfferDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.screenTitle}>Offer Details</Text>
          <Text style={styles.screenSubtitle}>View complete terms and how to redeem this offer.</Text>
        </View>

        {/* Main Offer Card Replication (Enhanced) */}
        <View style={styles.offerCard}>
            <View style={styles.cardHeader}>
                <Text style={styles.categoryTag}>{offerData.category}</Text>
                <View style={styles.offTag}>
                    <Text style={styles.offText}>{offerData.offPercentage}</Text>
                </View>
            </View>

            <Text style={styles.offerTitle}>{offerData.title}</Text>
            <Text style={styles.offerDescription}>{offerData.description}</Text>

            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Valid Until:</Text>
                <Text style={styles.infoValue}>{offerData.validUntil}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Min. Order Value:</Text>
                <Text style={styles.infoValue}>₹{offerData.minOrder}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Max. Saving:</Text>
                <Text style={styles.infoValue}>₹{offerData.maxSaving}</Text>
            </View>
        </View>

        {/* Eligibility/Conditions Section */}
        <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Eligibility Conditions</Text>
            {offerData.conditions.map((condition, index) => (
                <View key={index} style={styles.conditionItem}>
                    <Text style={styles.conditionBullet}>•</Text>
                    <Text style={styles.conditionText}>{condition}</Text>
                </View>
            ))}
        </View>

        {/* Full Terms and Conditions Section */}
        <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Full Terms & Conditions</Text>
            <Text style={styles.termsText}>{offerData.termsAndConditions}</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.shopButton}>
          <Text style={styles.shopButtonText}>Shop Now & Get Offer</Text>
        </TouchableOpacity>

        <View style={{height: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  screenSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },

  // --- Offer Card (Main Detail) ---
  offerCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTag: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    color: '#333',
  },
  offTag: {
    backgroundColor: '#4caf50', // Green for highlight
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  offText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  offerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#8a2be2', // Primary color highlight
    marginBottom: 5,
  },
  offerDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  
  // --- General Section Cards ---
  sectionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  // --- Conditions List ---
  conditionItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  conditionBullet: {
    fontSize: 14,
    color: '#8a2be2',
    marginRight: 8,
    fontWeight: 'bold',
  },
  conditionText: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  termsText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },

  // --- Action Button ---
  shopButton: {
    backgroundColor: '#8a2be2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  shopButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OfferDetailsScreen;

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // ✅ Added navigation

const { width } = Dimensions.get('window');

// Reusable component for each offer card
const OfferCard = ({ offer, onShopNow, onViewDetails }) => (
  <View style={styles.cardContainer}>
    {/* Header with category and discount */}
    <View style={styles.cardHeader}>
      <Text style={styles.categoryTag}>{offer.category}</Text>
      <View style={styles.offTag}>
        <Text style={styles.offText}>{offer.offPercentage}</Text>
      </View>
    </View>

    {/* Offer details */}
    <View style={styles.detailsContainer}>
      <Text style={styles.offerTitle}>{offer.title}</Text>
      <Text style={styles.offerDescription}>{offer.description}</Text>
      <Text style={styles.orderInfo}>
        Minimum Order <Text style={styles.priceHighlight}>₹{offer.minOrder}</Text>
      </Text>
      <Text style={styles.orderInfo}>
        Max Saving <Text style={styles.priceHighlight}>₹{offer.maxSaving}</Text>
      </Text>
      <Text style={styles.validUntil}>Valid until {offer.validUntil}</Text>

      {/* Conditions list */}
      <View style={styles.conditionsList}>
        {offer.conditions.map((condition, index) => (
          <Text key={index} style={styles.conditionItem}>• {condition}</Text>
        ))}
      </View>
    </View>

    {/* Action buttons */}
    <View style={styles.cardFooter}>
      <TouchableOpacity style={styles.shopButton} onPress={() => onShopNow(offer)}>
        <Text style={styles.shopButtonText}>Shop Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.detailsButton} onPress={() => onViewDetails(offer)}>
        <Text style={styles.detailsButtonText}>ⓘ Details</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const OffersScreen = () => {
  const navigation = useNavigation(); // ✅ Added hook

  const offersData = [
    {
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
      ],
    },
    {
      id: '2',
      category: 'Hair Care',
      title: 'Personal Care Combo',
      description: 'Buy any 3 shampoos + Get 1 conditioner free',
      minOrder: 850,
      maxSaving: 285,
      validUntil: '2024-02-28',
      offPercentage: '25% OFF',
      conditions: [
        'Applicable on Dabur Red Paste only',
        'Minimum 6 units required',
        'Cannot be combined with other offers',
      ],
    },
    {
      id: '3',
      category: 'Electronics',
      title: 'Electronics Store Special',
      description: 'Extra 12% discount on orders above ₹5,000',
      minOrder: 5000,
      maxSaving: 2000,
      validUntil: '2024-01-31',
      offPercentage: '12% OFF',
      conditions: [
        'Applicable on your outlet category',
        'Cannot exceed credit limit',
        'Valid for limited time',
      ],
    },
    {
      id: '4',
      category: 'All Categories',
      title: 'New Year Mega',
      description: 'Flat ₹500 off on orders above ₹10,000',
      minOrder: 10000,
      maxSaving: 500,
      validUntil: '2024-01-31',
      offPercentage: '50% OFF',
      conditions: [
        'Applicable on all categories',
        'Cannot be combined with other offers',
        'Valid for first 500 customers only',
      ],
    },
  ];

  // ✅ Navigate when pressing "Shop Now"
  const handleShopNow = () => {
    navigation.navigate('Products'); // Example: pass offer data to shop
  };

  // ✅ Navigate when pressing "ⓘ Details"
  const handleViewDetails = (offer) => {
    navigation.navigate('OfferDetails', { offer }); // Example: pass offer data to details page
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity> */}

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Offers & Schemes</Text>
        <Text style={styles.subtitle}>Special offers and schemes available for your outlet category</Text>
      </View>

      <FlatList
        data={offersData}
        renderItem={({ item }) => (
          <OfferCard
            offer={item}
            onShopNow={handleShopNow}
            onViewDetails={handleViewDetails}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

// ---------- STYLES ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 15,
  },
  backButtonText: {
    fontSize: 16,
    color: '#6a0dad',
    fontWeight: 'bold',
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  categoryTag: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  offTag: {
    backgroundColor: 'green',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  offText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  detailsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
    marginBottom: 10,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  offerDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  orderInfo: {
    fontSize: 12,
    color: '#666',
  },
  priceHighlight: {
    fontWeight: 'bold',
    color: '#000',
  },
  validUntil: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  conditionsList: {
    marginTop: 10,
  },
  conditionItem: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  shopButton: {
    flex: 1,
    backgroundColor: '#6a0dad',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  shopButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  detailsButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#333',
  },
});

export default OffersScreen;

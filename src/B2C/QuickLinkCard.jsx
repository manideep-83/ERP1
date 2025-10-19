import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// You'll need to install a library for vector icons, like react-native-vector-icons
// For this example, we'll assume you've imported them.
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const QuickLinkCard = ({ iconName, label, count, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          transform: [{ scale: pressed ? 0.98 : 1 }],
          backgroundColor: pressed ? '#f0f0f0' : 'white',
        },
      ]}
    >
      <View style={styles.row}>
        {/* Replace with your icon component */}
        <Text>📦</Text>
        <Text style={styles.label}>{label}</Text>
        <Text>→ </Text>
      </View>
      <Text style={styles.count}>{count}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '46%',
    padding: 16,
    margin: 6,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
});

export default QuickLinkCard;
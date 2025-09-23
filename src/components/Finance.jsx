import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppHeader from './AppHeader';

// Data for the Finance screen
const financeData = [
    { id: '1', name: 'Accounts Calendar', icon: require('../../Assets/Home/Vector-1.png') },
];
const colors = ['#82D1DA', '#87CEFA', '#6495ED', '#4682B4', '#8AAEDD', '#4169E1'];

const Finance = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Finance</Text>
                <Text style={styles.subtitle}>Welcome back! Here's your business overview</Text>
                <View style={styles.gridContainer}>
                    {financeData.map((item, index) => (
                        <TouchableOpacity key={item.id} style={[styles.itemContainer, { backgroundColor: colors[index % colors.length] }]}>
                            <Image source={item.icon} style={styles.icon} resizeMode="contain" />
                            <Text style={styles.itemName}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    contentContainer: { padding: 20, backgroundColor: '#f3f4f6', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -20 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#1f2937', marginBottom: 5 },
    subtitle: { fontSize: 14, color: '#6b7280', marginBottom: 20 },
    gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    itemContainer: { width: '31%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 40, paddingBottom: 16, paddingLeft: 8, paddingRight: 8, paddingTop: 16, marginBottom: 9, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
    icon: { width: 40, height: 40 },
    itemName: { fontFamily: 'Poppins-SemiBold', fontSize: 16, lineHeight: 20, letterSpacing: 0, textAlign: 'center', color: '#FFFFFF' },
});

export default Finance;
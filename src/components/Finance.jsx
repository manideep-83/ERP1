import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, SafeAreaView } from 'react-native';
import AppHeader from './AppHeader'; // Assuming the AppHeader component is in a separate file

// Data for the Finance screen
const financeData = [
    { id: '1', name: 'Accounts Calendar', icon: require('../../Assets/Home/Vector-1.png') },
    // Add more items here if needed
];

// Define a color palette for consistency
const colors = ['#82D1DA', '#87CEFA', '#6495ED', '#4682B4', '#8AAEDD', '#4169E1'];

// Map grid item to route name
const routeMap = {
    'Accounts Calendar': 'AccountCalendar',
};

const Finance = () => {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Finance</Text>
                    <Text style={styles.subtitle}>Welcome back! Here's your business overview</Text>
                    <View style={styles.gridContainer}>
                        {financeData.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                style={[styles.itemContainer, { backgroundColor: colors[index % colors.length] }]}
                                onPress={() => navigation.navigate(routeMap[item.name])}
                            >
                                <Image source={item.icon} style={styles.icon} resizeMode="contain" />
                                <Text style={styles.itemName}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const { width } = Dimensions.get('window');
const itemSize = (width - 60) / 3;

const styles = StyleSheet.create({
    safeArea: { 
        flex: 1, 
        backgroundColor: '#fff' 
    },
    scrollContent: {
        flexGrow: 1,
    },
    contentContainer: { 
        padding: 20, 
        backgroundColor: '#f3f4f6', 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        marginTop: -20,
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#1f2937', 
        marginBottom: 5 
    },
    subtitle: { 
        fontSize: 14, 
        color: '#6b7280', 
        marginBottom: 20 
    },
    gridContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between' 
    },
    itemContainer: { 
        width: itemSize,
        height: itemSize,
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 40,
        marginBottom: 9, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4, 
        elevation: 3,
        padding: 10,
    },
    icon: { 
        width: 40, 
        height: 40,
        marginBottom: 8,
    },
    itemName: { 
        fontSize: 15, 
        fontWeight: '600',
        color: '#fff', 
        textAlign: 'center' 
    },
});

export default Finance;
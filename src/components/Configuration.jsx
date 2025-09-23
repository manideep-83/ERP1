import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppHeader from './AppHeader';

// Data for the Configuration screen
// const configurationData = [
//     // { id: '1', name: 'E-Invoice Report', icon: require('../../Assets/distribution/mdi_cash.png') },
//     { id: '1', name: 'User Profile', icon: require('../../Assets/Configuration/Vector.png') },
//     // { id: '2', name: 'User Group', icon: require('./Assets/configuration/') },
//     // { id: '3', name: 'JC Calendar', icon: require('./Assets/configuration/jc-calendar.png') },
//     // { id: '4', name: 'Holiday Calendar', icon: require('./Assets/configuration/holiday-calendar.png') },
//     // { id: '5', name: 'Bill Print Configuration', icon: require('./Assets/configuration/bill-print.png') },
//     // { id: '6', name: 'Pdo Export', icon: require('./Assets/configuration/pdo-export.png') },
//     // { id: '7', name: 'Distributor Configuration', icon: require('./Assets/configuration/distributor-config.png') },
//     // { id: '8', name: 'Day End', icon: require('./Assets/configuration/day-end.png') },
//     // { id: '9', name: 'ETL', icon: require('./Assets/configuration/etl.png') },
//     // { id: '10', name: 'E Invoice Authen', icon: require('./Assets/configuration/e-invoice.png') },
// ];
const configurationData = [
{ id: '1', name: 'User Profile', icon: require('../../Assets/Configuration/material-symbols_person-outline-rounded.png') },
    { id: '2', name: 'User Group', icon: require('../../Assets/Configuration/Vector.png') },
    { id: '3', name: 'JC Calendar', icon: require('../../Assets/Configuration/uil_calender.png') },
    { id: '4', name: 'Holiday Calendar', icon: require('../../Assets/Configuration/simple-line-icons_calender.png') },
    { id: '5', name: 'Bill Print Configuration', icon: require('../../Assets/Configuration/material-symbols_settings-outline.png') },
    { id: '6', name: 'Pdo Export', icon: require('../../Assets/Configuration/mynaui_letter-i-octagon-solid.png') },
    { id: '7', name: 'Distributor Configuration', icon: require('../../Assets/Configuration/mynaui_letter-i-octagon-solid-1.png') },
    { id: '8', name: 'Day End', icon: require('../../Assets/Configuration/fa-solid_hourglass-end.png') },
    { id: '9', name: 'ETL', icon: require('../../Assets/Configuration/mingcute_upload-line.png') },
    { id: '10', name: 'E Invoice Authen', icon: require('../../Assets/Configuration/nimbus_cash.png') },
];

const colors = ['#82D1DA', '#87CEFA', '#6495ED', '#4682B4', '#8AAEDD', '#4169E1'];

const ConfigurationScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Configuration</Text>
                <Text style={styles.subtitle}>Welcome back! Here's your business overview</Text>
                <View style={styles.gridContainer}>
                    {configurationData.map((item, index) => (
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

export default ConfigurationScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../../ReusableComponents/AppButton'; // Import AppButton
import AppTable from '../../ReusableComponents/AppTable'; // Re-added AppTable for consistency

const FinanceScreen = () => {
    const navigation = useNavigation();
    const [searchYear, setSearchYear] = useState('2025');

    const handleCreateNew = () => {
        console.log('Navigating to Create New Form...');
        // Assuming a route for creating a new finance record
        navigation.navigate('CreateFinanceScreen'); 
    };

    const handleQuickSearch = () => {
        console.log(`Performing quick search for Year: ${searchYear}`);
        // Placeholder for search/filter logic
    };

    // Placeholder data for AppTable to demonstrate functionality
    const financeData = [
        { id: '1', year: '2025', accountsCalendar: 'Jan-2025' },
    ];
    
    // Define columns for the table
    const columns = [
        { header: 'Year', key: 'year', flex: 1.5 },
        { header: 'Accounts Calendar', key: 'accountsCalendar', flex: 2 },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                {/* Header and "Create New" button */}
                <View style={styles.headerRow}>
                    <Text style={styles.headerText}>Finance</Text>
                    <AppButton
                        label="+ Create New"
                        onPress={handleCreateNew}
                        style={styles.createNewButton}
                        textStyle={styles.createNewButtonText}
                    />
                </View>

                {/* --- Quick Search Section --- */}
                <View style={styles.searchContainer}>
                    <Text style={styles.searchTitle}>Quick Search</Text>
                    <View style={styles.inputRow}>
                        <View style={styles.yearInputGroup}>
                            <Text style={styles.label}>Year</Text>
                            <TextInput
                                style={styles.yearInput}
                                value={searchYear}
                                onChangeText={setSearchYear}
                                keyboardType="numeric"
                            />
                        </View>
                        <AppButton
                            label="Go"
                            onPress={handleQuickSearch}
                            style={styles.goButton}
                            textStyle={styles.goButtonText}
                        />
                    </View>
                    
                    {/* --- Search Results Section (AppTable) --- */}
                    <View style={styles.searchResultsContainer}>
                        <AppTable
                            columns={columns}
                            data={financeData}
                            message={`${financeData.length} matching record(s) found`}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1f3a8a',
        marginLeft: 10,
    },
    createNewButton: {
        backgroundColor: '#1f3a8a',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginRight: 10,
    },
    createNewButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // --- Search Section Styles ---
    searchContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
    },
    searchTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    yearInputGroup: {
        flex: 1,
        marginRight: 15,
    },
    label: {
        fontSize: 12,
        color: '#666',
        marginBottom: 2,
    },
    yearInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: Platform.OS === 'ios' ? 8 : 4,
        fontSize: 16,
        textAlign: 'center',
    },
    goButton: {
        backgroundColor: '#1f3a8a',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 35,
        marginLeft: 'auto', // Pushes the button to the right
    },
    goButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchResultsContainer: {
        marginTop: 20,
    },
});

export default FinanceScreen;
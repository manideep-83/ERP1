import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../../ReusableComponents/SearchBar';
import AppTable from '../../../ReusableComponents/AppTable';
import AppButton from '../../../ReusableComponents/AppButton';

const ProgramServiceClaim = () => {
    const navigation = useNavigation();

    // State for managing live data
    const [claimData, setClaimData] = useState([
        { id: 101, name: 'Setup Fee Claim', date: '01-09-2025' },
        { id: 102, name: 'Training Service Claim', date: '05-09-2025' },
    ]);

    const handleDateSelect = (date) => {
        console.log("Selected date:", date);
    };

    // const handleCreateNew = () => {
    //     // Navigate to the 'CreateProgramServiceClaim' screen
    //     navigation.navigate('CreateProgramServiceClaim');
    // };

    const handleView = (item) => {
        // Navigate to the overview screen with the selected item's data
        navigation.navigate('ProgramServiceClaimOverview', { claim: item });
    };

    const handleDelete = (itemToDelete) => {
        Alert.alert(
            'Delete Program Service Claim',
            `Are you sure you want to delete claim ${itemToDelete.id}?`,
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        const updatedData = claimData.filter(item => item.id !== itemToDelete.id);
                        setClaimData(updatedData);
                        console.log('Deleted claim:', itemToDelete);
                    }
                },
            ]
        );
    };

    // Table columns with action buttons for view and delete
    const columns = [
        { header: 'Claim Code', key: 'id', flex: 1 },
        { header: 'Claim Description', key: 'name', flex: 2 },
        { header: 'Claim Date', key: 'date', flex: 1 },
        {
            header: 'Action',
            key: 'action',
            flex: 1.5,
            renderCell: (item) => (
                <View style={styles.actionCell}>
                    {/* View Button */}
                    <TouchableOpacity onPress={() => handleView(item)} style={{ marginRight: 10 }}>
                        <Ionicons name="eye-outline" size={20} color="#007bff" />
                    </TouchableOpacity>
                    {/* Delete Button */}
                    <TouchableOpacity onPress={() => handleDelete(item)}>
                        <Ionicons name="trash-outline" size={20} color="#ff3333" />
                    </TouchableOpacity>
                </View>
            ),
        },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View style={styles.headerRow}>
                    <Text style={styles.title}>Program Service Claims</Text>
                    {/* <AppButton
                        label="+ Create new"
                        onPress={handleCreateNew}
                        style={styles.createNewButton}
                        textStyle={styles.createNewButtonText}
                    /> */}
                </View>
                
                <SearchBar
                    placeholder="Search Product"
                    showDatePicker={true}
                    onDateChange={handleDateSelect}
                />
                
                <Text style={styles.title}>Search Results</Text>
                
                <AppTable
                    columns={columns}
                    data={claimData}
                    message={`Total Records: ${claimData.length}`}
                />
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    container: { flex: 1, paddingHorizontal: 15, paddingTop: 10 },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a3d7c',
    },
    createNewButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1f3a8a",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    createNewButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    actionCell: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default ProgramServiceClaim;
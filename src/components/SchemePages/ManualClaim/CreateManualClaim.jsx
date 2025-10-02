import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTable from '../../../ReusableComponents/AppTable'; // Assuming this path is correct

const CreateNewManualClaim = () => {
    // State for main form
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [claimDescription, setClaimDescription] = useState('');
    const [claimDate, setClaimDate] = useState('08/09/2025');
    const [channelNumber, setChannelNumber] = useState('');
    const [channelDate, setChannelDate] = useState('08/09/2025');
    const [remarks, setRemarks] = useState('');

    // State for file upload section
    const [selectedUploadDescription, setSelectedUploadDescription] = useState('');
    const [claimAmt, setClaimAmt] = useState('0.00');
    const [taxAmt, setTaxAmt] = useState('');

    // Data lists
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => (currentYear - 5 + i).toString());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const descriptionOptions = ["Product A Refund", "Service Fee Adjustment", "Marketing Claim"];

 

    const handleLoad = () => {
        console.log('Loading data...');
        // Logic to fetch data based on Year/Month/ClaimDescription/etc.
    };

    const handleSave = () => {
        // Handle save logic
        console.log('Saving manual claim data...');
    };

    const handleDiscard = () => {
        // Handle discard logic
        console.log('Discarding manual claim...');
    };

    const handleSelectFiles = () => {
        // Handle file selection logic
        console.log('Selecting files for upload...');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create New</Text>
            </View>

            {/* --- Main Claim Details Form (From first image) --- */}
            <View style={styles.formContainer}>
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Year</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedYear}
                                onValueChange={(itemValue) => setSelectedYear(itemValue)}
                            >
                                <Picker.Item label="Select" value="" />
                                {years.map((year, index) => (
                                    <Picker.Item key={index} label={year} value={year} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Month</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedMonth}
                                onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                            >
                                <Picker.Item label="Select" value="" />
                                {months.map((month, index) => (
                                    <Picker.Item key={index} label={month} value={month} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Claim Description</Text>
                        <TextInput
                            style={styles.input}
                            value={claimDescription}
                            onChangeText={setClaimDescription}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Claim Date</Text>
                        <TextInput
                            style={styles.input}
                            value={claimDate}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.inputGroupMarginRight]}>
                        <Text style={styles.label}>Channel Number</Text>
                        <TextInput
                            style={styles.input}
                            value={channelNumber}
                            onChangeText={setChannelNumber}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Channel Date</Text>
                        <TextInput
                            style={styles.input}
                            value={channelDate}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.inputGroupFull}>
                        <Text style={styles.label}>Remarks</Text>
                        <TextInput
                            style={styles.input}
                            value={remarks}
                            onChangeText={setRemarks}
                        />
                    </View>
                </View>
            </View>

          
            
            {/* --- File Upload Section (From last image) --- */}
            <View style={styles.fileUploadContainer}>
                <Text style={styles.fileInstruction}>
                    Please Choose only <Text style={{ fontWeight: 'bold' }}>pdf</Text> if the file size is less than 1MB
                </Text>
                <View style={styles.inputRow}>
                    <View style={styles.inputGroupColumn}>
                        <Text style={styles.label}>Description</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedUploadDescription}
                                onValueChange={(itemValue) => setSelectedUploadDescription(itemValue)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Select" value="" />
                                {descriptionOptions.map((option, index) => (
                                    <Picker.Item key={index} label={option} value={option} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.inputGroupColumn}>
                        <Text style={styles.label}>Claim Amt</Text>
                        <TextInput
                            style={styles.input}
                            value={claimAmt}
                            onChangeText={setClaimAmt}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputGroupColumn}>
                        <Text style={styles.label}>Tax Amt</Text>
                        <TextInput
                            style={styles.input}
                            value={taxAmt}
                            onChangeText={setTaxAmt}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputGroupColumn}>
                        <Text style={styles.label}>Remarks</Text>
                        <TextInput
                            style={styles.input}
                            value={remarks}
                            onChangeText={setRemarks}
                        />
                    </View>
                    {/* Select Files Button is placed separately to align with the image */}
                </View>
                <View style={styles.selectFilesRow}>
                    <TouchableOpacity style={styles.selectFilesButton} onPress={handleSelectFiles}>
                        <Text style={styles.selectFilesButtonText}>Select Files</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* --- Action Buttons --- */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.actionButton, styles.saveButton]} onPress={handleSave}>
                    <Ionicons name="save-outline" size={24} color="#fff" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.discardButton]} onPress={handleDiscard}>
                    <Ionicons name="close-circle-outline" size={24} color="#fff" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Discard</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    header: {
        paddingVertical: 15,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1f3a8a',
        marginLeft: 30,
    },
    formContainer: {
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
    fileUploadContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
        borderWidth: 1, // Add border to match the visual look of the image
        borderColor: '#ccc',
    },
    fileInstruction: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputGroup: {
        flex: 1,
    },
    inputGroupMarginRight: {
        marginRight: 10,
    },
    inputGroupFull: {
        flex: 1,
    },
    inputGroupColumn: {
        width: '24%', // Adjust width for 4 columns in the row
        marginRight: '1%', // Small space between columns
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
        // Make labels horizontally aligned with their inputs in the file upload section
        textAlign: 'left',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: Platform.OS === 'ios' ? 8 : 4,
        fontSize: 16,
    },
    pickerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
    },
    loadButton: {
        backgroundColor: '#1e3a8a',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    loadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectFilesRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // Aligns the button to the right
        width: '100%',
        marginTop: 10,
    },
    selectFilesButton: {
        backgroundColor: '#d4ac5e',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '30%', // Adjusted width for better fit
    },
    selectFilesButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    saveButton: {
        backgroundColor: '#2b6cb0',
    },
    discardButton: {
        backgroundColor: '#dc2626',
    },
    buttonIcon: {
        marginRight: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // AppTable Placeholder styles (as they were in the previous iteration)
    // Removed the placeholder styles to keep the component focused on the new design.
});

export default CreateNewManualClaim;

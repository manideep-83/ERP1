import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppTable = ({ columns, data, message }) => {
    const renderTableHeaders = () => (
        <View style={styles.tableHeader}>
            {columns.map((column, index) => (
                <Text key={index} style={[styles.tableHeaderText, { flex: column.flex }]}>
                    {column.header}
                </Text>
            ))}
        </View>
    );

    const renderTableRows = () => (
        data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                {columns.map((column, colIndex) => (
                    <View key={colIndex} style={[styles.cell, { flex: column.flex }]}>
                        {column.renderCell 
                            ? column.renderCell(item) 
                            : <Text style={styles.tableRowText}>{item[column.key]}</Text>
                        }
                    </View>
                ))}
            </View>
        ))
    );

    return (
        <View style={styles.tableContainer}>
            {renderTableHeaders()}
            {renderTableRows()}
            <Text style={styles.recordCountText}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    tableContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    tableHeaderText: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    tableRowText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#666',
    },
    cell: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    recordCountText: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 12,
        color: '#666',
        backgroundColor: '#f8f8f8',
    },
});

export default AppTable;
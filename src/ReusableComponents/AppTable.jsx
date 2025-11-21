import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const getValueByPath = (item, key) => {
  if (!item || !key) return '';
  return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), item) ?? '';
};

const AppTable = ({ columns = [], data = [], message = "No records found" }) => {

  const renderTableHeaders = () => (
    <View style={styles.tableHeader}>
      {columns.map((column, index) => (
        <Text
          key={index}
          style={[styles.tableHeaderText, { flex: column.flex || 1 }]}
        >
          {column.header ?? ''}
        </Text>
      ))}
    </View>
  );

  const renderTableRows = () => {
    if (!data || data.length === 0) {
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>{message}</Text>
        </View>
      );
    }

    return data.map((item, index) => (
      <View key={index} style={styles.tableRow}>
        {columns.map((column, colIndex) => (
          <View
            key={colIndex}
            style={[styles.cell, { flex: column.flex || 1 }]}
          >
            {typeof column?.renderCell === 'function'
              ? column.renderCell(item ?? {})
              : (
                <Text style={styles.tableRowText}>
                  {getValueByPath(item, column?.key)}
                </Text>
              )}
          </View>
        ))}
      </View>
    ));
  };

  return (
    <View style={styles.tableContainer}>
      {renderTableHeaders()}
      {renderTableRows()}
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
  noDataContainer: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  noDataText: {
    fontSize: 13,
    color: '#999',
  },
});

export default AppTable;

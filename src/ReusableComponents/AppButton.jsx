import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * AppButton - A reusable button component for your ERP app
 * Props:
 * - label: string (button text)
 * - onPress: function (callback)
 * - icon: string (Ionicons icon name, optional)
 * - style: object (additional styles, optional)
 * - disabled: boolean (optional)
 * - variant: 'primary' | 'secondary' | 'danger' (optional, for color)
 */
const AppButton = ({ label, onPress, icon, style, disabled, variant = 'primary' }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondary;
      case 'danger':
        return styles.danger;
      default:
        return styles.primary;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {/* Icon and label are now direct children */}
      {icon && <Ionicons name={icon} size={16} color="#fff" style={styles.icon} />}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // Layout styles are directly on the button
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginHorizontal: 4,
    marginVertical: 2,
  },
  icon: {
    marginRight: 6,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  primary: {
    backgroundColor: '#3151AC',
  },
  secondary: {
    backgroundColor: '#4E7AC7',
  },
  danger: {
    backgroundColor: '#d32f2f',
  },
  disabled: {
    opacity: 0.6,
  },
});

export default AppButton;
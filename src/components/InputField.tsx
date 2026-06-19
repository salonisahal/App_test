import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

interface InputFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  onChangeText: (value: string) => void;
  error?: string;
}

export default function InputField({
  label,
  value,
  placeholder,
  secureTextEntry,
  multiline,
  onChangeText,
  error
}: InputFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.darkSilver}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        multiline={multiline}
        style={[styles.input, multiline && styles.multiline, error ? styles.inputError : null]}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.textPrimary,
    backgroundColor: Colors.cardBackground
  },
  multiline: {
    height: 110,
    textAlignVertical: 'top'
  },
  inputError: {
    borderColor: Colors.error
  },
  error: {
    marginTop: 6,
    color: Colors.error,
    fontSize: 12
  }
});

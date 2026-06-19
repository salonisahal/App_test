import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

interface ResourceCardProps {
  title: string;
  summary: string;
}

export default function ResourceCard({ title, summary }: ResourceCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <MaterialIcons name="library-books" size={20} color={Colors.primaryOrange} />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.summary}>{summary}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: Colors.lightSilver,
    marginBottom: 12
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.lightOrange,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textWrap: {
    flex: 1
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary
  },
  summary: {
    marginTop: 6,
    fontSize: 12,
    color: Colors.textSecondary
  }
});

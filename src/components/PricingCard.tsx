import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import PrimaryButton from './PrimaryButton';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  onPress: () => void;
}

export default function PricingCard({ name, price, description, features, highlighted, onPress }: PricingCardProps) {
  return (
    <View style={[styles.card, highlighted && styles.highlightedCard]}>
      <Text style={styles.plan}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.featureList}>
        {features.map((feature) => (
          <View key={feature} style={styles.featureRow}>
            <MaterialIcons name="check-circle" size={18} color={Colors.primaryOrange} />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>
      <PrimaryButton label="Choose Plan" onPress={onPress} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 18,
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: Colors.lightSilver,
    marginBottom: 16,
    shadowColor: Colors.secondaryBlack,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2
  },
  highlightedCard: {
    borderColor: Colors.primaryOrange,
    backgroundColor: Colors.lightYellow
  },
  plan: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary
  },
  price: {
    marginTop: 6,
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primaryOrange
  },
  description: {
    marginTop: 8,
    fontSize: 13,
    color: Colors.textSecondary
  },
  featureList: {
    marginTop: 12
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6
  },
  featureText: {
    fontSize: 13,
    color: Colors.textSecondary
  },
  button: {
    marginTop: 12
  }
});

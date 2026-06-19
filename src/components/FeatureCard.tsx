import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Colors } from '../theme/colors';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Animated.View entering={FadeInUp} style={styles.card}>
      <View style={styles.iconWrap}>
        <MaterialIcons name={icon as any} size={24} color={Colors.primaryOrange} />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Animated.View>
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
    shadowColor: Colors.secondaryBlack,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    marginBottom: 12
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.lightYellow,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textWrap: {
    flex: 1
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary
  },
  description: {
    marginTop: 6,
    fontSize: 13,
    color: Colors.textSecondary
  }
});

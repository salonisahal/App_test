import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { Colors } from '../theme/colors';

interface CollaborationCardProps {
  title: string;
  description: string;
  image: string;
}

export default function CollaborationCard({ title, description, image }: CollaborationCardProps) {
  return (
    <Animated.View entering={FadeInRight} style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 240,
    marginRight: 16,
    backgroundColor: Colors.cardBackground,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: Colors.secondaryBlack,
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3
  },
  image: {
    width: '100%',
    height: 120
  },
  content: {
    padding: 14
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary
  },
  description: {
    marginTop: 6,
    fontSize: 12,
    color: Colors.textSecondary
  }
});

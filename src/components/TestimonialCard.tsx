import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { Colors } from '../theme/colors';

interface TestimonialCardProps {
  name: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export default function TestimonialCard({ name, company, avatar, rating, quote }: TestimonialCardProps) {
  return (
    <Animated.View entering={ZoomIn} style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
      </View>
      <Text style={styles.quote}>{quote}</Text>
      <View style={styles.stars}>
        {Array.from({ length: 5 }).map((_, index) => (
          <MaterialIcons
            key={`star-${index}`}
            name={index < rating ? 'star' : 'star-border'}
            size={18}
            color={Colors.secondaryYellow}
          />
        ))}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    marginRight: 16,
    padding: 16,
    borderRadius: 18,
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: Colors.lightSilver,
    shadowColor: Colors.secondaryBlack,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary
  },
  company: {
    marginTop: 2,
    fontSize: 12,
    color: Colors.textSecondary
  },
  quote: {
    marginTop: 12,
    fontSize: 13,
    color: Colors.textSecondary
  },
  stars: {
    flexDirection: 'row',
    marginTop: 12
  }
});

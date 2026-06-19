import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors } from '../theme/colors';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function PrimaryButton({ label, onPress, variant = 'primary', style }: PrimaryButtonProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  return (
    <AnimatedTouchable
      onPressIn={() => {
        scale.value = withSpring(0.96);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
      onPress={onPress}
      style={[styles.button, variant === 'secondary' && styles.secondaryButton, animatedStyle, style]}
      activeOpacity={0.9}
    >
      <Text style={[styles.label, variant === 'secondary' && styles.secondaryLabel]}>{label}</Text>
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryOrange,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryOrange,
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4
  },
  label: {
    color: Colors.cardBackground,
    fontWeight: '700',
    fontSize: 16
  },
  secondaryButton: {
    backgroundColor: Colors.lightYellow,
    borderWidth: 1,
    borderColor: Colors.secondaryYellow
  },
  secondaryLabel: {
    color: Colors.textPrimary
  }
});

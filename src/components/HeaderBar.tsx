import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

interface HeaderBarProps {
  title: string;
  onMenuPress?: () => void;
  onBackPress?: () => void;
  showLogo?: boolean;
}

export default function HeaderBar({ title, onMenuPress, onBackPress, showLogo }: HeaderBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        {onBackPress ? (
          <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
            <MaterialIcons name="arrow-back" size={22} color={Colors.textPrimary} />
          </TouchableOpacity>
        ) : onMenuPress ? (
          <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
            <MaterialIcons name="menu" size={22} color={Colors.textPrimary} />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </View>
      <View style={styles.center}>
        {showLogo ? (
          <View style={styles.logoWrap}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=200&q=80' }}
              style={styles.logo}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </View>
      <View style={styles.side}>
        <View style={styles.iconPlaceholder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: Colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border
  },
  side: {
    width: 44,
    alignItems: 'flex-start'
  },
  center: {
    flex: 1,
    alignItems: 'center'
  },
  logoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  logo: {
    width: 26,
    height: 26,
    borderRadius: 13
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightSilver
  },
  iconPlaceholder: {
    width: 36,
    height: 36
  }
});

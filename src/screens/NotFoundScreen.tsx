import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { Colors } from '../theme/colors';

export default function NotFoundScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.text}>Screen not found</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MainDrawer')}>
          <Text style={styles.link}>Go Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: Colors.textPrimary,
    marginBottom: 12
  },
  link: {
    color: Colors.primaryOrange,
    fontWeight: '600'
  }
});

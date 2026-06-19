import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { Colors } from '../theme/colors';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Log in to manage your Circle workspace.</Text>
        <InputField label="Email" value={email} placeholder="you@company.com" onChangeText={setEmail} />
        <InputField
          label="Password"
          value={password}
          placeholder="Enter password"
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.forgot}
          onPress={() => navigation.navigate('MainDrawer', { screen: 'Contact' })}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <PrimaryButton label="Login" onPress={() => navigation.navigate('MainDrawer')} style={styles.loginButton} />
        <PrimaryButton label="Sign in with Google" onPress={() => navigation.navigate('MainDrawer')} variant="secondary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background
  },
  container: {
    padding: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 20
  },
  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 16
  },
  forgotText: {
    color: Colors.primaryOrange,
    fontWeight: '600',
    fontSize: 13
  },
  loginButton: {
    marginBottom: 12
  }
});

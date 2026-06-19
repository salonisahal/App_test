import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../navigation';
import HeaderBar from '../components/HeaderBar';
import SectionHeader from '../components/SectionHeader';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { Colors } from '../theme/colors';

export default function ContactScreen() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList, 'Contact'>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!name.trim()) nextErrors.name = 'Name is required.';
    if (!email.includes('@')) nextErrors.email = 'Valid email required.';
    if (!company.trim()) nextErrors.company = 'Company is required.';
    if (message.trim().length < 10) nextErrors.message = 'Message must be at least 10 characters.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSuccess(true);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setErrors({});
    setSuccess(false);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderBar title="Contact" onMenuPress={() => navigation.openDrawer()} />
        <SectionHeader title="Talk with Circle" subtitle="We respond in under 24 hours." />
        <InputField label="Name" value={name} placeholder="Your name" onChangeText={setName} error={errors.name} />
        <InputField label="Email" value={email} placeholder="you@company.com" onChangeText={setEmail} error={errors.email} />
        <InputField label="Company" value={company} placeholder="Company name" onChangeText={setCompany} error={errors.company} />
        <InputField
          label="Message"
          value={message}
          placeholder="Tell us about your goals"
          onChangeText={setMessage}
          error={errors.message}
          multiline
        />
        <View style={styles.actions}>
          <PrimaryButton label="Submit" onPress={handleSubmit} style={styles.actionButton} />
          <PrimaryButton label="Reset" onPress={handleReset} variant="secondary" style={styles.actionButton} />
        </View>
        {success ? <Text style={styles.success}>Thanks! Your message has been sent.</Text> : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background
  },
  content: {
    padding: 20
  },
  actions: {
    gap: 12
  },
  actionButton: {
    marginTop: 6
  },
  success: {
    marginTop: 16,
    fontSize: 13,
    color: Colors.success,
    fontWeight: '600'
  }
});

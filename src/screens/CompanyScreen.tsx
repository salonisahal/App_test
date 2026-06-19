import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../navigation';
import HeaderBar from '../components/HeaderBar';
import SectionHeader from '../components/SectionHeader';
import { companyValues } from '../data/mockData';
import { Colors } from '../theme/colors';

export default function CompanyScreen() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList, 'Company'>>();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderBar title="Company" onMenuPress={() => navigation.openDrawer()} />
        <SectionHeader title="Bold, trusted, human" subtitle="Our mission is to elevate customer engagement." />
        {companyValues.map((value) => (
          <View key={value.id} style={styles.card}>
            <Text style={styles.title}>{value.title}</Text>
            <Text style={styles.description}>{value.description}</Text>
          </View>
        ))}
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
  card: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: Colors.lightSilver,
    marginBottom: 12
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

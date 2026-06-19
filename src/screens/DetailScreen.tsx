import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import HeaderBar from '../components/HeaderBar';
import PrimaryButton from '../components/PrimaryButton';
import { collaborationCards } from '../data/mockData';
import { Colors } from '../theme/colors';

export default function DetailScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Detail'>>();
  const route = useRoute<NativeStackScreenProps<RootStackParamList, 'Detail'>['route']>();
  const item = collaborationCards.find((card) => card.id === route.params.id);

  if (!item) {
    return (
      <SafeAreaView style={styles.safe}>
        <HeaderBar title="Detail" onBackPress={() => navigation.goBack()} />
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>Details not available.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderBar title="Detail" onBackPress={() => navigation.goBack()} />
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Why teams choose Circle</Text>
          <Text style={styles.cardText}>
            Accelerate activation, automate retention, and stay ahead with real-time analytics that scale with your
            enterprise.
          </Text>
        </View>
        <PrimaryButton label="Get Started" onPress={() => navigation.navigate('MainDrawer', { screen: 'Pricing' })} />
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 18,
    marginBottom: 16
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22
  },
  card: {
    marginVertical: 18,
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: Colors.lightSilver
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary
  },
  cardText: {
    marginTop: 6,
    fontSize: 13,
    color: Colors.textSecondary
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notFoundText: {
    fontSize: 16,
    color: Colors.textSecondary
  }
});

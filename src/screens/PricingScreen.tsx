import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../navigation';
import HeaderBar from '../components/HeaderBar';
import SectionHeader from '../components/SectionHeader';
import PricingCard from '../components/PricingCard';
import { pricingPlans } from '../data/mockData';
import { Colors } from '../theme/colors';

export default function PricingScreen() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList, 'Pricing'>>();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderBar title="Pricing" onMenuPress={() => navigation.openDrawer()} />
        <SectionHeader title="Plans that scale" subtitle="Launch fast, grow smarter." />
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            highlighted={plan.highlighted}
            onPress={() => navigation.navigate('Contact')}
          />
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
  }
});

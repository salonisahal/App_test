import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../navigation';
import HeaderBar from '../components/HeaderBar';
import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';
import { featureItems } from '../data/mockData';
import { Colors } from '../theme/colors';

export default function FeaturesScreen() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList, 'Features'>>();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderBar title="Features" onMenuPress={() => navigation.openDrawer()} />
        <SectionHeader
          title="Analytics, Community, Automation"
          subtitle="Everything you need to accelerate engagement outcomes."
        />
        {featureItems.map((item) => (
          <FeatureCard key={item.id} title={item.title} description={item.description} icon={item.icon} />
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

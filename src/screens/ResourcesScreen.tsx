import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../navigation';
import HeaderBar from '../components/HeaderBar';
import SectionHeader from '../components/SectionHeader';
import ResourceCard from '../components/ResourceCard';
import { resourceItems } from '../data/mockData';
import { Colors } from '../theme/colors';

export default function ResourcesScreen() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList, 'Resources'>>();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderBar title="Resources" onMenuPress={() => navigation.openDrawer()} />
        <SectionHeader title="Enable your teams" subtitle="Playbooks, training, and customer stories." />
        {resourceItems.map((resource) => (
          <ResourceCard key={resource.id} title={resource.title} summary={resource.summary} />
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

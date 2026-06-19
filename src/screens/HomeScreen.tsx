import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../navigation';
import HeaderBar from '../components/HeaderBar';
import PrimaryButton from '../components/PrimaryButton';
import SectionHeader from '../components/SectionHeader';
import CollaborationCard from '../components/CollaborationCard';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import { collaborationCards, featureItems, testimonials } from '../data/mockData';
import { Colors } from '../theme/colors';

export default function HomeScreen() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList, 'Home'>>();
  const [activeIndex, setActiveIndex] = useState(0);
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 60 }).current;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.content}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        <HeaderBar title="Circle" onMenuPress={() => navigation.openDrawer()} showLogo />
        <Animated.View entering={FadeInUp} style={styles.hero}>
          <Text style={styles.headline}>A powerful online engagement tool that's intuitive and simple to use.</Text>
          <Text style={styles.subhead}>
            With stellar one-click reports and unmatched support, see how Circle can make a difference in your business.
          </Text>
          <PrimaryButton
            label="Get Started Free"
            onPress={() => navigation.navigate('Pricing')}
            style={styles.cta}
          />
        </Animated.View>
        <SectionHeader title="Collaboration" subtitle="Engage teams with connected insights." />
        <FlatList
          data={collaborationCards}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.getParent()?.navigate('Detail', { id: item.id })}>
              <CollaborationCard title={item.title} description={item.description} image={item.image} />
            </TouchableOpacity>
          )}
        />
        <SectionHeader title="Features" subtitle="Modern analytics for bold teams." />
        {featureItems.map((item) => (
          <FeatureCard key={item.id} title={item.title} description={item.description} icon={item.icon} />
        ))}
        <SectionHeader title="Testimonials" subtitle="Trust from fast-growing enterprises." />
        <FlatList
          data={testimonials}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={({ viewableItems }) => {
            if (viewableItems[0]?.index !== undefined) {
              setActiveIndex(viewableItems[0].index ?? 0);
            }
          }}
          renderItem={({ item }) => (
            <TestimonialCard
              name={item.name}
              company={item.company}
              avatar={item.avatar}
              rating={item.rating}
              quote={item.quote}
            />
          )}
        />
        <View style={styles.pagination}>
          {testimonials.map((_, index) => (
            <View
              key={`dot-${index}`}
              style={[styles.dot, activeIndex === index && styles.dotActive]}
            />
          ))}
        </View>
        <View style={styles.pricingPrompt}>
          <Text style={styles.pricingTitle}>Ready for enterprise-ready engagement?</Text>
          <PrimaryButton label="View Pricing" onPress={() => navigation.navigate('Pricing')} />
        </View>
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
    paddingBottom: 32
  },
  hero: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12
  },
  headline: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.textPrimary,
    lineHeight: 34
  },
  subhead: {
    marginTop: 12,
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 22
  },
  cta: {
    marginTop: 18
  },
  horizontalList: {
    paddingHorizontal: 20,
    paddingBottom: 12
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 20
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.lightSilver,
    marginHorizontal: 4
  },
  dotActive: {
    backgroundColor: Colors.primaryOrange,
    width: 16
  },
  pricingPrompt: {
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 18,
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: Colors.lightSilver,
    shadowColor: Colors.secondaryBlack,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2
  },
  pricingTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 12
  }
});

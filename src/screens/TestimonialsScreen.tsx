import React, { useRef, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../navigation';
import HeaderBar from '../components/HeaderBar';
import SectionHeader from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/mockData';
import { Colors } from '../theme/colors';

export default function TestimonialsScreen() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList, 'Testimonials'>>();
  const [activeIndex, setActiveIndex] = useState(0);
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 60 }).current;

  return (
    <SafeAreaView style={styles.safe}>
      <HeaderBar title="Testimonials" onMenuPress={() => navigation.openDrawer()} />
      <View style={styles.content}>
        <SectionHeader title="Customer momentum" subtitle="Teams trust Circle to power engagement." />
        <FlatList
          data={testimonials}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
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
            <View key={`dot-${index}`} style={[styles.dot, activeIndex === index && styles.dotActive]} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background
  },
  content: {
    paddingTop: 16
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 16
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center'
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
  }
});

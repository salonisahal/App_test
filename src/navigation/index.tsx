import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import FeaturesScreen from '../screens/FeaturesScreen';
import PricingScreen from '../screens/PricingScreen';
import TestimonialsScreen from '../screens/TestimonialsScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import CompanyScreen from '../screens/CompanyScreen';
import ContactScreen from '../screens/ContactScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { Colors } from '../theme/colors';

export type DrawerParamList = {
  Home: undefined;
  Features: undefined;
  Pricing: undefined;
  Testimonials: undefined;
  Resources: undefined;
  Company: undefined;
  Contact: undefined;
  Login: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  MainDrawer: NavigatorScreenParams<DrawerParamList> | undefined;
  Detail: { id: string };
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerActiveTintColor: Colors.primaryOrange,
        drawerInactiveTintColor: Colors.textSecondary,
        drawerStyle: {
          backgroundColor: Colors.cardBackground,
          width: 260
        },
        overlayColor: 'rgba(17, 17, 17, 0.25)'
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Features" component={FeaturesScreen} />
      <Drawer.Screen name="Pricing" component={PricingScreen} />
      <Drawer.Screen name="Testimonials" component={TestimonialsScreen} />
      <Drawer.Screen name="Resources" component={ResourcesScreen} />
      <Drawer.Screen name="Company" component={CompanyScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
}

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}

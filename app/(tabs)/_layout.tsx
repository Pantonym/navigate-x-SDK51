import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// This is the bottom navigation for the entire website.

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused ? "home" : "home"} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="development"
        options={{
          title: 'development',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? 'folder-open' : 'folder-open-o'} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="photos"
        options={{
          title: 'Photos',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? 'photo' : 'file-photo-o'} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="privatescreen"
        options={{
          title: 'PrivateScreen',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={focused ? 'private-connectivity' : 'private-connectivity'} size={24} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}

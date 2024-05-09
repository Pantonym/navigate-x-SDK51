import { View, Text } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { SafeAreaView } from 'react-native-safe-area-context'

const photos = () => {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText>photos</ThemedText>
      </ThemedView>
    </SafeAreaView>
  )
}

export default photos
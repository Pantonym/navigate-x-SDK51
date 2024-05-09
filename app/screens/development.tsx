import { StyleSheet } from 'react-native'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react'

const DevelopmentScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Development</ThemedText>
    </ThemedView>
  )
}

export default DevelopmentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
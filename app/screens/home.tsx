import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const HomeScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Home</ThemedText>
    </ThemedView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
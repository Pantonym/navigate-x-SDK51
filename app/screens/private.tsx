import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const PrivateScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Private</ThemedText>
    </ThemedView>
  )
}

export default PrivateScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})